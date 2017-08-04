import { axios } from '../services/queryData';
import { message } from 'antd';
message.config({
    top: 50,
    duration: 2,
});

const Schema = {
    render:'',//控制leftnav的dom输出
    browsing:'ApprovalNumber',//浏览方式 默认按批文
    offsetSelect:0,//一键搜索的分页页数
    TheSelectContent:[],//一键搜索的content
    showactiveLeftNav:'',
    keywordsReset:false,
    toSelectReset:false,
    screeningReset:false,
    querydata:{},//总体的querydata
    SelectShowMore:false
}

export default {

    namespace: 'leftnav',

    state: Schema,

    subscriptions: {
        setup({dispatch, history}) {
            history.listen(location => {
                let render =  '';
                let query = location.query;
                if (location.pathname === '/medicalretrieval/indexsearch') {
                    render =  'indexsearch';
                } else if(location.pathname === '/medicalretrieval/indexdetail') {
                    render =  'indexdetail';
                } else if(location.pathname === '/medicalretrieval/monitoringandtracking') {
                    render = 'monitoringandtracking';
                } else if(location.pathname === '/medicalretrieval/thelisteddrugs') {

                    render = `thelisteddrugs-${query && query.render}`;
                    if(!query.backfrom || query.backfrom != 'detail') {
                        dispatch({
                            type:'resetState',
                            payload:Schema
                        });
                    }

                } else if(location.pathname === '/medicalretrieval/thelisteddrugsdetail') {
                    render =  `thelisteddrugsdetail-${query && query.render}`;
                } else if(location.pathname == '/medicalretrieval/registeredtoaccept') {
                    render = 'registeredtoaccept';
                } else if(location.pathname == '/medicalretrieval/registeredtoacceptdetail') {
                    render = 'registeredtoacceptdetail';
                } else if(location.pathname == '/medicalretrieval/RegisteredtoacceptdetailStatistical'){
                    render = 'RegisteredtoacceptdetailStatistical';
                } else if(location.pathname == '/medicalretrieval/marketsales') {
                    render = `marketsales-${query && query.render}`;
                } else if(location.pathname == '/medicalretrieval/clinicaltrials') {
                    render = `clinicaltrials-${query && query.render}`;
                } else if(location.pathname == '/medicalretrieval/instructions') {
                    render = `instructions`;
                } else if(location.pathname == '/medicalretrieval/drugbid') {
                    render = `drugbid`;
                } else if(location.pathname == '/medicalretrieval/medicalInsuranceDirectory') {
                    render = `medicalInsuranceDirectory`;
                } else if(location.pathname == '/medicalretrieval/maseDrugTarget') {
                    render = `maseDrugTarget`
                } else if(location.pathname == '/medicalretrieval/domesticCompanies') {
                    render = `domesticCompanies`
                }

                // if(!query.backfrom || query.backfrom != 'detail') {
                //     console.log(11111);
                //     dispatch({
                //         type:'resetState',
                //         payload:Schema
                //     });
                // }

                dispatch({
                    type:'updateState',
                    payload:{
                        render
                    }
                });



            });
        },
    },

    effects: {
        // *chufaDoSearchFn({ payload }, { call , put , select }) {
        //     const querydata = yield select(({leftnav}) => {
        //         return leftnav.querydata
        //     });
        //
        //     const querydataobj = Object.assign({},querydata);
        //
        //     yield put({
        //         type:'doSearchFn',
        //         payload:{
        //             ...querydataobj
        //         }
        //     });
        // },
        *doSearchFn({ payload }, { call , put , select }) {

            const render = yield select(({ leftnav }) => leftnav.render);

            let browsing;
            // let offset;
            let namespace;//区分是哪个地方要请求
            let url;
            let sumBy;//样本医院 年报数据 所需
            let getpayload;//根据不同路由返回不同的负载
            let renderright;
            let order_by;
            let direction;
            if(render == 'domesticCompanies'){
                //首先进行分页缓存重置
                yield put({
                    type:'domesticCompanies/updateState',
                    payload:{
                        listCache:{}
                    }
                });

                namespace = 'domesticCompanies';
            } else if(render == 'maseDrugTarget') {
                //首先进行分页缓存重置
                yield put({
                    type:'maseDrugTarget/updateState',
                    payload:{
                        listCache:{}
                    }
                });

                namespace = 'maseDrugTarget';
            } else if(render.match('medicalInsuranceDirectory')){
                //首先进行分页缓存重置
                yield put({
                    type:'medicalInsuranceDirectory/updateState',
                    payload:{
                        listCache:{}
                    }
                });

                namespace = 'medicalInsuranceDirectory';
            } else if(render.match('drugbid')){
                //首先进行分页缓存重置
                yield put({
                    type:'drugbid/updateState',
                    payload:{
                        listCache:{}
                    }
                });

                namespace = 'drugbid';
            }if(render.match('indexsearch')) {
                //首先进行分页缓存重置
                yield put({
                    type:'indexsearch/updateState',
                    payload:{
                        listCache:{}
                    }
                });
                namespace = 'indexsearch';
            } else if(render.match('thelisteddrugs')) {
                //首先进行分页缓存重置
                yield put({
                    type:'thelisteddrugs/updateState',
                    payload:{
                        listCache:{}
                    }
                });
                namespace = 'thelisteddrugs';
            } else if(render.match('instructions')) {

                //首先进行分页缓存重置
                yield put({
                    type:'instructions/updateState',
                    payload:{
                        listCache:{}
                    }
                });
                namespace = 'instructions';

            } else if(render == 'registeredtoaccept') {
                //首先进行分页缓存重置
                yield put({
                    type:'registeredtoaccept/updateState',
                    payload:{
                        listCache:{}
                    }
                });
                namespace = 'registeredtoaccept';
            } else if(render.match('marketsales')) {
                namespace = 'marketsales';
            } else if(render.match('clinicaltrials')) {
                namespace = 'clinicaltrials';
            }

            browsing = yield select((payload) => {
                return payload && payload[namespace] && payload[namespace].browsing || ''
            });

            // offset = yield select((payload) => {
            //     return payload && payload[namespace] && payload[namespace].offset || 0
            // });

            url = yield select((payload) => {
                return payload && payload[namespace] && payload[namespace].url || ''
            });

            sumBy = yield select((payload) => {
                return payload && payload[namespace] && payload[namespace].sumBy || []
            });

            renderright = yield select((payload) => {
                return payload && payload[namespace] && payload[namespace].render || []
            });

            order_by = yield select((payload) => {
                return payload && payload[namespace] && payload[namespace].order_by || []
            });

            direction = yield select((payload) => {
                return payload && payload[namespace] && payload[namespace].direction || []
            });

            if(render.match('maseDrugTarget')) {
                getpayload = {
                    ...payload,
                    querydata:payload,
                    offset:0
                }
            } else if(render.match('medicalInsuranceDirectory')) {
                getpayload = {
                    ...payload,
                    querydata:payload,
                    offset:0
                }
            } else if(render.match('drugbid')) {
                getpayload = {
                    ...payload,
                    querydata:payload,
                    offset:0
                }
            } else if(render.match('instructions')) {
                getpayload = {
                    ...payload,
                    querydata:payload,
                    offset:0
                }
            } else if(render.match('indexsearch')) {
                getpayload = {
                    ...payload,
                    querydata:payload,
                    offset:0,
                }
            } else if(render.match('thelisteddrugs')) {
                getpayload = {
                    ...payload,
                    querydata:payload,
                    offset:0,
                    browsing,
                    render:renderright,
                    order_by:order_by,
                    direction:direction
                }
            } else if(render.match('marketsales')) {
                getpayload = {
                    ...payload,
                    url,
                    querydata:payload,
                    offset:0,
                    sumBy:sumBy,
                }
            } else if(render.match('clinicaltrials')) {
                getpayload = {
                    ...payload,
                    url,
                    querydata:payload,
                    browsing,
                    offset:0,
                    render:renderright,
                }
            } else {
                getpayload = {
                    ...payload,
                    url,
                    querydata:payload,
                    browsing,
                    offset:0,
                }
            }

            yield put({
                type:`${namespace}/renderList`,
                payload:getpayload
            });

            let resetdata;
            const time = new Date().getTime();

            if(payload.from == 'keywords') {
                resetdata = {
                    toSelectReset:time,
                    screeningReset:time+1,
                    myScreeningReset:time+2
                };
            } else if(payload.from == 'toSelect') {
                resetdata = {
                    keywordsReset:time,
                    screeningReset:time+1,
                    myScreeningReset:time+2
                };
            } else if(payload.from == 'screening') {
                resetdata = {
                    keywordsReset:time,
                    toSelectReset:time+1,
                    myScreeningReset:time+2
                };
            } else if(payload.from == 'myScreeningReset') {
                resetdata = {
                    keywordsReset:time,
                    toSelectReset:time+1,
                    screeningReset:time+2
                };
            }

            yield put({
                type:'updateState',
                payload:{
                    querydata:payload,
                    ...resetdata
                }
            });
        },
        *renderTheSelect({ payload }, { call, put ,select}) {

            let queryurl = payload.url;

            const options = {
                data:{
                    offset:payload.offsetSelect
                },
                method:'get'
            }

            const { data } = yield call( axios , queryurl , options );
            if(data && data.api_status == 'success') {
                if(data.content) {

                    yield put({
                        type:'updateState',
                        payload:{
                            TheSelectContent:data.content,
                        }
                    });

                } else {
                    message.error('获取一键搜索数据失败');
                }

            } else {
                message.error('获取一键搜索数据失败');
            }
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
