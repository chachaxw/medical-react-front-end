import { axios } from '../services/queryData';
import { message } from 'antd';
message.config({
    top: 50,
    duration: 2,
});

const Schema = {
    from:'',//从哪个导航下来的
    render:'',//哪个导航下的子集
    content:[],//数据源
    floatdata:[]//浮动层数据的数据源
}

export default {

    namespace: 'thelisteddrugsdetail',

    state: Schema,

    subscriptions: {
        setup({dispatch, history}) {
            history.listen(location => {
                const query = location.query;

                if(location.pathname == '/medicalretrieval/thelisteddrugsdetail') {
                    dispatch({
                        type:'query',
                        payload:{
                            ...query
                        }
                    });
                }


            });
        },
    },

    effects: {
        // call是调用执行一个函数，而put则是相当于dispatch执行一个action
        // select则可以用来访问其它model
        *query({payload},{call,put,select}) {
            const from = payload && payload.from;
            const render = payload && payload.render;
            let url;
            let payloaddata;
            if(from == 'thelisteddrugsdetail') {
                if(render == 'zgss') {
                    let params = payload.auth_num;
                    url = `http://api2.drugsea.cn/product/cn/detail/${params}`;
                } else if(render == 'mgss') {
                    let params = payload.uid;
                    url = `http://api3.drugsea.cn/fda_drugs/detail/${params}`;
                } else if(render == 'omss') {
                    let params = payload.id;
                    url = `http://api3.drugsea.cn/ema_drugs/detail/${params}`;
                } else if(render == 'rbss') {
                    let params = payload.id;
                    url = `http://api3.drugsea.cn/ema_drugs/detail/${params}`;
                }
                payloaddata = {};
            } else {
                payloaddata = {};
            }

            yield put({ type: 'spin/showLoading' });
            const options = {
                data:{
                    ...payloaddata
                },
                method:'get'
            }

            const { data } = yield call( axios , url , options );

            if(data && data.api_status == 'success') {
                yield put({ type: 'spin/hideLoading' });
                if(data.content) {
                    yield put({
                        type:'updateState',
                        payload:{
                            content:data.content,
                            ...payload
                        }
                    })
                } else {
                    message.error('请求详情失败111');
                }

            } else {
                yield put({ type: 'spin/hideLoading' });
                message.error('请求详情失败111');
            }
        },
        *queryfloatdata({payload},{call,put,select}) {
            yield put({ type: 'spin/showLoading' });
            const options = {
                data:{
                    ...payload
                },
                method:'get'
            }
            let url;
            if(payload.from == 'zbjy') {
                url = 'http://api2.drugsea.cn/jiyao/list';
            }else {
                url = 'http://api2.drugsea.cn/yibao/list';
            }


            const { data } = yield call( axios , url , options );

            if(data && data.api_status == 'success') {
                yield put({ type: 'spin/hideLoading' });
                if(data.content) {
                    yield put({
                        type:'updateState',
                        payload:{
                            floatdata:data.content
                        }
                    })
                } else {
                    message.error('请求失败！');
                }

            } else {
                yield put({ type: 'spin/hideLoading' });
                message.error('请求失败！');
            }
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
