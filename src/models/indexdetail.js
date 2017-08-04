import { axios } from '../services/queryData';
import { message } from 'antd';
message.config({
    top: 50,
    duration: 2,
});

const Schema = {
    from:'',//从哪个导航下来的
    render:'',//哪个导航下的子集
    content:[]//数据源
}

export default {

    namespace: 'indexdetail',

    state: Schema,

    subscriptions: {
        setup({dispatch, history}) {
            history.listen(location => {
                const query = location.query;

                if(location.pathname == '/medicalretrieval/indexdetail') {
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
            const searchId = payload.searchId;

            yield put({ type: 'spin/showLoading' });

            const options = {
                data:{
                },
                method:'get'
            }

            const { data } = yield call( axios , `http://api3.drugsea.cn/global_drugs/detail/${searchId}` , options );

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
