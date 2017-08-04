import { axios } from '../services/queryData';
import formatdata from 'formatdata';
import { message } from 'antd';
import {routerRedux} from 'dva/router';

message.config({
    top: 50,
    duration: 2,
});

const Schema = {
};

export default {

    namespace: 'index',

    state: Schema,

    subscriptions: {
        setup({dispatch,history}) {
            history.listen(location => {
                if(location.pathname === '/medicalretrieval/index') {

                    dispatch({
                        type:'resetState',
                        payload:{}
                    });

                    dispatch({
                        type:'renderList',
                        payload:{
                            url:'http://api2.drugsea.cn/onekey',
                            db:'globalDrug',
                            offset:'0'
                        }
                    });
                }
            });
        },
    },

    effects: {
        // call是调用执行一个函数，而put则是相当于dispatch执行一个action
        // select则可以用来访问model数据
        *renderList({ payload }, { call, put ,select}) {

            const options = {
                method:'get',
                data:{
                    db:payload.db,
                    offset:payload.offset
                }
            }

            yield put({ type: 'spin/showLoading' });

            const { data } = yield call(axios,payload.url,options);
            if(data && data.api_status == 'success') {
                yield put({ type: 'spin/hideLoading' });
                if(data && data.content) {

                } else {
                    message.error('获取数据失败！');
                }
            } else {
                yield put({ type: 'spin/hideLoading' });
                message.error('获取数据失败！');
            }
        },
        *requestto({ payload }, { call, put ,select}) {

            const options = {
                method:'get',
                data:{
                    ...payload
                }
            }

            // yield put({ type: 'spin/showLoading' });

            const { data } = yield call(axios,'http://api2.drugsea.cn/check/auth',options);
            if(data && data.api_status == 'success') {
                // yield put({ type: 'spin/hideLoading' });
                // if(data && data.content) {
                //
                // } else {
                //     message.error('获取数据失败！');
                // }
            } else {
                // yield put({ type: 'spin/hideLoading' });
                // message.error('获取数据失败！');
            }
        }
    },

    reducers: {
        resetState(state,action){
            return {
                ...action.payload
            }
        },
        updateState(state,action) {
            return {
                ...state,
                ...action.payload
            }
        }
    }

};
