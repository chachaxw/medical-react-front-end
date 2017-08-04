import { axios } from '../services/queryData';
import { message } from 'antd';
message.config({
    top: 50,
    duration: 2,
});

const Schema = {
    navactive:'',//控制nav的activeclass
    content:[],//列表的数据
    offset:0,//分页的页数（当切换浏览方式是需要重置）
    tnum:0,//文章的数量（当切换浏览方式是需要重置）
    browsing:'ApprovalNumber',//浏览方式 默认为一般浏览
    selectOpen:false,//控制浏览方式的select是否展开
    listCache:{}//缓存数据
}

export default {

    namespace: 'clinicaltrials',

    state: Schema,

    subscriptions: {
        setup({dispatch, history}) {
            history.listen(location => {
                const query = location.query;
                let url;

                if(location.pathname == '/medicalretrieval/clinicaltrials') {
                    if(query && query.render == 'qqlcsy') {
                        url = 'http://api2.drugsea.cn';
                    } else if(query && query.render == 'zglcsy') {
                        url = 'http://api3.drugsea.cn';
                    }

                    //切换需要重置的信息
                    const time = new Date().getTime();
                    dispatch({
                        type:'leftnav/updateState',
                        payload:{
                            keywordsReset:time,
                            toSelectReset:time+1,
                            screeningReset:time+2,
                            myScreeningReset:time+3
                        }
                    });

                    dispatch({
                        type:'resetState',
                        payload:Schema
                    })

                    dispatch({
                        type:'renderList',
                        payload:{
                            url:url,
                            offset:0,
                            browsing:'ApprovalNumber',
                            render:query.render
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
            const listCache = yield select(({ clinicaltrials }) => clinicaltrials.listCache);
            const ObjectlistCache = Object.assign({},listCache);

            let url = payload && payload.url;

            if(payload.browsing == 'ApprovalNumber') {
                //一般浏览
                if(payload.render == 'qqlcsy') {
                    url = 'http://api2.drugsea.cn/us/ct/list'
                } else if(payload.render == 'zglcsy') {
                    url = 'http://qy2.drugsea.cn/c/cde/ct/list'
                }
            } else if(payload.browsing == 'medicines') {
                //药名浏览
                if(payload.render == 'qqlcsy') {
                    url = 'http://api2.drugsea.cn/us/ct/list_by_intervention'
                } else if(payload.render == 'zglcsy') {
                    url = 'http://qy2.drugsea.cn/c/cde/ct/list_by_drug_name'
                }
            }

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
                let payloadget;
                //缓存赋值
                const offset = payload.offset;
                ObjectlistCache[offset] = data.content;
                if(payload.offset == 0) {
                    payloadget = {
                        content:data.content,
                        tnum:data.tnum,
                        ...payload,
                        listCache:ObjectlistCache
                    }
                } else {
                    payloadget = {
                        content:data.content,
                        ...payload,
                        listCache:ObjectlistCache
                    }
                }

                if(data.content) {

                    yield put({
                        type:'updateState',
                        payload:payloadget
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
            const listCache = yield select(({ clinicaltrials }) => clinicaltrials.listCache);

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
        },
        resetState(state,action) {
            return {
                ...action.payload
            }
        }
    }

};
