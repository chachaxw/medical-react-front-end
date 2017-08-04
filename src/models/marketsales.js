import { axios } from '../services/queryData';
import { message } from 'antd';
message.config({
    top: 50,
    duration: 2,
});


const Schema = {
    tagNumber:'1',//左侧边栏上的tag处于数据查询（1）还是数据分析（2）
    sumBy:['drug_name','company'],//汇总依据
    offset:0,//分页的页数（当切换浏览方式是需要重置）

    navactive:'',//控制nav的activeclass
    content:[],//列表的数据
    tnum:0,//文章的数量（当切换浏览方式是需要重置）
    selectOpen:false//控制浏览方式的select是否展开
}

export default {

    namespace: 'marketsales',

    state: Schema,

    subscriptions: {
        setup({dispatch, history}) {
            history.listen(location => {
                const query = location.query;
                let url;
                if(location.pathname == '/medicalretrieval/marketsales') {

                    if(query && query.render == 'ybyy') {
                        url = 'http://qy2.drugsea.cn/c/drug/hosp';
                    }else if(query && query.render == 'nbsj') {
                        url = 'http://api2.drugsea.cn/drug/annual_report';
                    }

                    dispatch({
                        type:'renderList',
                        payload:{
                            url:url,
                            offset:0,
                            render:query.render,
                            sumBy:['drug_name','company']
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
            let url = payload && payload.url;

            yield put({ type: 'spin/showLoading' });
            const options = {
                data:{
                    ...payload
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
                            tnum:data.tnum,
                            ...payload
                        }
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
            //分页时候要获取的信息
            const querydata = yield select(({ leftnav }) => leftnav.querydata);

            yield put({
                type:'renderList',
                payload:{
                    ...payload,
                    ...querydata
                }
            });
        },
        *renderOnchangeBrowsing({payload},{call,put,select}) {

            yield put({
                type:'renderList',
                payload:{
                    ...payload
                }
            });

            //切换浏览方式需要获取的信息以及重置的信息
            const time = new Date().getTime();
            yield put({
                type:'leftnav/updateState',
                payload:{
                    browsing:payload.browsing,
                    querydata:{},
                    keywordsReset:time,
                    toSelectReset:time+1,
                    screeningReset:time+2,
                    myScreeningReset:time+3
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
