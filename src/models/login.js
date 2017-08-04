import { axios } from '../services/queryData';
import { message } from 'antd';
message.config({
    top: 50,
    duration: 2,
});

const Schema = {
    render:'wechat',//显示微信登录或者手机登录
}

export default {

    namespace: 'login',

    state: Schema,

    subscriptions: {
        setup({dispatch, history}) {
            history.listen(location => {

            });
        },
    },

    effects: {
        // call是调用执行一个函数，而put则是相当于dispatch执行一个action
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
