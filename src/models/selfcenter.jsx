import { axios } from '../services/queryData';
import { message } from 'antd';
message.config({
    top: 50,
    duration: 2,
});

export default {

    namespace: 'selfcenter',

    state: {
        tagin:'jcxt',//左侧边栏位置在哪 jzxt：监测系统管理  zzxt：追踪系统管理 zhsz：账号设置 gmzf：购买支付
        zhuizongstyle:'ypzz',//追踪方式：ypzz:药品追踪，zcsl:注册受理追踪，zbdt:招标动态追踪
        jcxt:{
            queryData:{}
        },
        zzxt:{
            type:'ypzz', // 药品追踪 注册受理追踪 招标动态追踪
            queryData:{
                type:''
            },
            data:[]//数据
        },
        zhsz:{},
        gmzf:{}
    },

    subscriptions: {
        // setup({dispatch, history}) {
        //     history.listen(location => {
        //         if (location.pathname === '/login') {
        //
        //         }
        //     });
        // },
    },

    effects: {
        // call是调用执行一个函数，而put则是相当于dispatch执行一个action
        // select则可以用来访问其它model
        *zzxtFn({payload},{call,put,select}) {
            const type = payload && payload.type;
            const queryData = payload && payload.queryData;
            let url;


            if(type == 'ypzz') {
                url='xxx';
                return;
            } else if(type == 'zcsl') {
                url = `http://qy2.drugsea.cn/b/product/trace/${queryData.type}`;
            } else if(type == 'zbdt') {
                url = 'http://qy2.drugsea.cn/c/zhaobiao/status';
            }

            yield put({ type: 'spin/showLoading' });

            const options = {
                data:{
                },
                method:'get'
            }

            const { data } = yield call( axios , url , options );

            if(data && data.api_status == 'success') {
                yield put({ type: 'spin/hideLoading' });
                if(data.content) {
                    let payloadput;
                    if(type == 'ypzz') {
                        payloadput = {
                            zzxt:{
                                ...payload,
                                data:data.content
                            }

                        }
                    } else if(type == 'zcsl') {
                        payloadput = {
                            zzxt:{
                                ...payload,
                                data:data.content
                            }

                        }
                    } else if(type == 'zbdt') {
                        payloadput = {
                            zzxt:{
                                ...payload,
                                data:data.content
                            }

                        }
                    }

                    yield put({
                        type:'updateState',
                        payload:payloadput
                    });

                } else {

                    message.error('请求失败');

                }

            } else {
                yield put({ type: 'spin/hideLoading' });
                message.error('请求失败');
            }
        },
        *deleteZC({payload},{call,put,select}) {
            console.log(payload,'deleteZC');
            yield put({ type: 'spin/showLoading' });
            const zzxyquery = payload.zzxyquery;
            let realquery = {};
            for(let attr in payload) {
                if(attr!='zzxyquery') {
                    realquery[attr] = payload[attr];
                }
            }
            const options = {
                data:{
                    ...realquery
                },
                method:'get'
            }

            const { data } = yield call( axios , "http://qy2.drugsea.cn/b/product/trace" , options );

            if(data && data.api_status == 'success') {

                message.success('删除成功！');
                yield put({
                    type:'zzxtFn',
                    payload:{...zzxyquery}
                });
            } else {
                yield put({ type: 'spin/hideLoading' });
                message.error('删除失败！');
            }

        },
        *zzAndEsc({payload},{call,put,select}) {
            yield put({ type: 'spin/showLoading' });
            const zzxyquery = payload.zzxyquery;
            let realquery = {};
            for(let attr in payload) {
                if(attr!='zzxyquery') {
                    realquery[attr] = payload[attr];
                }
            }

            let url = `http://qy2.drugsea.cn/c/zhaobiao/subscribe/${realquery.subscribe}/${realquery.city}`;

            const options = {
                data:{
                },
                method:'get'
            }

            const { data } = yield call( axios , url , options );

            if(data && data.api_status == 'success') {

                message.success('成功！');

                yield put({
                    type:'zzxtFn',
                    payload:{...zzxyquery}
                })
            } else {
                yield put({ type: 'spin/hideLoading' });
                message.error('失败！');
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
