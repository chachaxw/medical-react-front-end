
import { axios } from '../services/queryData';
import { message } from 'antd';
message.config({
    top: 50,
    duration: 2,
});

const Schema = {
    lefttype:'xssypjk',//控制左侧属于哪个
    xssypjk:{
        type:'',
        date:'',
        searchConditions:{}
    }//新上市药品监察数据结构
}

export default {

    namespace: 'monitoringandtracking',

    state: Schema,

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
    },

    reducers: {
        updateState(state,action) {
            return {
                ...state,
                ...action.payload
            }
        },
        showLoading(state) {
            return { ...state, loading: true };
        },
        hideLoading(state) {
            return { ...state, loading: false };
        }
    }

};
