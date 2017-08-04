import { axios } from '../services/queryData';
import { message } from 'antd';
message.config({
    top: 50,
    duration: 2,
});

const Schema = {
    render:'',//控制leftnav的dom输出
    listCache:{}//分页数据缓存
}

export default {

    namespace: 'domesticCompanies',

    state: Schema,

    subscriptions: {
        setup({dispatch, history}) {
            history.listen(location => {

                if (location.pathname === '/medicalretrieval/domesticCompanies') {
                    dispatch({
                        type:'renderList',
                        payload:{
                            offset:0
                        }
                    });
                }

            });
        },
    },

    effects: {
        // call是调用执行一个函数，而put则是相当于dispatch执行一个action
        // select则可以用来访问其它model
        *renderList({payload},{call,put,select}) {

            //获取缓存信息
            const listCache = yield select(({ domesticCompanies }) => domesticCompanies.listCache);
            const ObjectlistCache = Object.assign({},listCache);

            yield put({ type: 'spin/showLoading' });
            const options = {
                data:{
                    ...payload
                },
                method:'get'
            }

            const { data } = yield call( axios , 'http://api2.drugsea.cn/enterprise/gmp' , options );
            if(data && data.api_status == 'success') {
                yield put({ type: 'spin/hideLoading' });

                //缓存赋值
                const offset = payload.offset;
                let payloadput;
                ObjectlistCache[offset] = data.content;
                yield put({ type: 'spin/hideLoading' });

                if(data.content) {

                    if(payload.offset == 0) {
                        payloadput = {
                            content:data.content,
                            tnum:data.tnum,
                            ...payload,
                            listCache:ObjectlistCache
                        }
                    } else {
                        payloadput = {
                            content:data.content,
                            ...payload,
                            listCache:ObjectlistCache
                        }
                    }

                    yield put({
                        type:'updateState',
                        payload:payloadput
                    });

                } else {
                    message.error('获取数据失败');
                }

            } else {
                yield put({type: 'spin/hideLoading'});
                message.error('获取数据失败');
            }
        },
        *renderOnchangeGet({payload},{call,put,select}) {
            const offset = payload.offset;
            const listCache = yield select(({ domesticCompanies }) => domesticCompanies.listCache);

            if(listCache && listCache[offset]) {

                yield put({
                    type:'updateState',
                    payload:{
                        ...payload,
                        content:listCache[offset]
                    }
                });

                return;
            }

            //分页时候要获取的信息
            const querydata = yield select(({ leftnav }) => leftnav.querydata);

            yield put({
                type:'renderList',
                payload:{
                    ...payload,
                    ...querydata
                }
            });
        }
    },

    reducers: {
        updateState(state,action) {
            return {
                ...state,
                ...action.payload
            }
        }
    }

};
