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
    browsing:'ApprovalNumber',//浏览方式 默认为按批准文号浏览
    selectOpen:false,//控制浏览方式的select是否展开
    listCache:{},
    length:'',//请求返回的数据数量
    renderTable:false,
    keywordsquery:{}//记录keywords的数据
}

export default {

    namespace: 'thelisteddrugs',

    state: Schema,

    subscriptions: {
        setup({dispatch, history}) {
            history.listen(location => {
                const query = location.query;

                if(location.pathname == '/medicalretrieval/thelisteddrugs') {

                    if(!query.backfrom || query.backfrom != 'detail') {
                        dispatch({
                            type:'resetState',
                            payload:Schema
                        });

                        dispatch({
                            type:'renderList',
                            payload:{
                                offset:0,
                                browsing:'ApprovalNumber',
                                render:query.render,
                                listCache:{},
                            }
                        });
                    } else {
                        dispatch({
                            type:'renderList',
                            payload:{
                                offset:0,
                                browsing:'ApprovalNumber',
                                render:query.render,
                                listCache:{}
                            }
                        });
                    }
                }

            });
        },
    },

    effects: {
        // call是调用执行一个函数，而put则是相当于dispatch执行一个action
        // select则可以用来访问其它model
        *renderList({payload},{call,put,select}) {
            console.log(payload,'payloadss');
            //获取缓存信息
            let listCache;
            let realQuerydata = {};//筛选不必要的信息
            if(payload && payload.listCache) {
                listCache = payload.listCache
            } else {
                listCache = yield select(({ thelisteddrugs }) => thelisteddrugs.listCache);
            }
            const ObjectlistCache = Object.assign({},listCache);
            let url ;

            const length = yield select(({ thelisteddrugs }) => thelisteddrugs.length);
            let offsetC = '';
            if(payload.offset!=0) {
                offsetC = length * (payload.offset - 1);
            }else {
                offsetC = 0;
            }


            if(payload.render == 'zgss') {
                if(payload.browsing == 'ApprovalNumber') {
                    //按批准文号浏览
                    url = 'http://api2.drugsea.cn/product/cn/list';
                } else if(payload.browsing == 'medicines') {
                    //按药名浏览
                    url = 'http://api2.drugsea.cn/product/cn/list_by_drug_name';
                } else if(payload.browsing == 'enterprise') {
                    //按企业浏览
                    url = 'http://api2.drugsea.cn/product/cn/list_by_manufacture';
                }
            } else if(payload.render == 'mgss') {
                if(payload.browsing == 'ApprovalNumber') {
                    //按申请号浏览
                    url = 'http://api3.drugsea.cn/fda_drugs/list';
                } else if(payload.browsing == 'medicines') {
                    //按药名浏览
                    url = 'http://api3.drugsea.cn/fda_drugs/list_by_drug_name';
                } else if(payload.browsing == 'enterprise') {
                    //按企业浏览
                    url = 'http://api3.drugsea.cn/fda_drugs/list_by_company';
                }
            } else if(payload.render == 'omss') {
                if(payload.browsing == 'ApprovalNumber') {
                    //结果列表
                    url = 'http://api3.drugsea.cn/ema_drugs/list';
                } else if(payload.browsing == 'medicines') {
                    //按活性成分浏览
                    url = 'http://api3.drugsea.cn/ema_drugs/list_by_substance';
                } else if(payload.browsing == 'enterprise') {
                    //按企业浏览
                    url = 'http://api3.drugsea.cn/ema_drugs/list_by_company';
                }
            } else if(payload.render == 'rbss') {
                if(payload.browsing == 'ApprovalNumber') {
                    //按通用名浏览
                    url = 'http://api3.drugsea.cn/jp_drugs/list';
                } else if(payload.browsing == 'enterprise') {
                    //按企业浏览
                    url = 'http://api3.drugsea.cn/jp_drugs/list_by_company';
                }
            }

            yield put({ type: 'spin/showLoading' });

            for(let attr in payload) {
                if(attr!='browsing' && attr!='render' && attr!='listCache' && attr!='querydata' && attr!='from' && attr!='selectOpen' && attr!='keywordsquery') {
                    realQuerydata[attr] = payload[attr];
                }
            }

            const options = {
                data:{
                    ...realQuerydata,
                    offset:offsetC
                },
                method:'get'
            }

            const { data } = yield call( axios , url , options );
            if(data && data.api_status == 'success') {

                //缓存赋值
                const offset = payload.offset;
                let payloadput;
                ObjectlistCache[offset] = data.content;
                yield put({ type: 'spin/hideLoading' });
                if(data.content) {

                    if(offset == 0) {
                        payloadput = {
                            content:data.content,
                            tnum:data.tnum,
                            ...payload,
                            listCache:ObjectlistCache,
                            length:data && data.content && data.content.length,
                            renderTable:true
                        }
                    } else {
                        payloadput = {
                            content:data.content,
                            ...payload,
                            listCache:ObjectlistCache,

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
        *queryToGetNewContent({payload},{call,put,select}) {

            yield put({ type: 'spin/showLoading' });


            const querykey = payload.querykey;

            // let querypayload = {};
            // for(let attr in payload) {
            //     if(attr!='id' && attr!='open' && attr!='content' && attr!='keyID') {
            //         querypayload[attr] = payload[attr]
            //     }
            // }

            const options = {
                data:{
                    ...querykey
                },
                method:'get'
            }

            let url = payload.url;

            const { data } = yield call( axios , url , options );
            if(data && data.api_status == 'success') {
                yield put({ type: 'spin/hideLoading' });
                if(data.content) {
                    let Childcontent = data.content;
                    let id = payload.id;
                    let content = payload.content;
                    let contentOb = Object.assign([],content);

                    contentOb.map((d)=>{
                        if(d.id == id) {
                            d.children = Childcontent;
                            d.open = true;
                            d.offset = payload.offset;
                            d.keyID = payload.keyID;
                            d.querykey = payload.querykey;
                        }
                    });
                    yield put({
                        type:'updateState',
                        payload:{
                            content:contentOb,
                            keyID:payload['keyID']
                        }
                    })
                } else {
                    message.error('请求失败');
                }

            } else {
                yield put({ type: 'spin/hideLoading' });
                message.error('请求失败');
            }

        },
        *renderMore({payload},{call,put,select}) {
            yield put({ type: 'spin/showLoading' });

            const querykey = payload.querykey;

            const options = {
                data:{
                    ...querykey
                },
                method:'get'
            }

            let url = 'http://api2.drugsea.cn/product/cn/list';

            const { data } = yield call( axios , url , options );
            if(data && data.api_status == 'success') {
                yield put({ type: 'spin/hideLoading' });
                if(data.content && data.content.length) {
                    let contentOld = yield select(({ thelisteddrugs }) => thelisteddrugs.content);;
                    let contentOb = Object.assign([],contentOld);
                    let contentNewChild = data.content;
                    let id = payload.id;

                    contentOb.map((d)=>{
                        if(d.id == id) {
                            d.children = d.children && d.children.concat(contentNewChild);
                            d.offset = payload.offset;
                            d.querykey = payload.querykey;
                        }
                    });

                    yield put({
                        type:'updateState',
                        payload:{
                            content:contentOb,
                        }
                    })
                } else {
                    message.error('没有数据了！');
                }

            } else {
                yield put({ type: 'spin/hideLoading' });
                message.error('没有数据了！');
            }
        },
        *renderOnchangeGet({payload},{call,put,select}) {
            //分页时候要获取的信息
            const offset = payload.offset;
            const listCache = yield select(({ thelisteddrugs }) => thelisteddrugs.listCache);

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

            const querydata = yield select(({ leftnav }) => leftnav.querydata);

            yield put({
                type:'renderList',
                payload:{
                    ...payload,
                    ...querydata
                }
            });
        },
        *onUPDOWNChange({payload},{call,put,select}) {
            //筛选时候要获取的信息
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

            const querydata = yield select(({ leftnav }) => leftnav.querydata);

            yield put({
                type:'updateState',
                payload:{
                    listCache:{}
                }
            });

            yield put({
                type:'renderList',
                payload:{
                    ...payload,
                    ...querydata
                }
            });

            //切换浏览方式需要获取的信息以及重置的信息
            yield put({
                type:'leftnav/updateState',
                payload:{
                    browsing:payload.browsing,
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
