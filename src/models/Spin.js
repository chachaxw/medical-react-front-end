export default {

    namespace: 'spin',

    state: {
        loading:false,
        url:'',
        showimg:false
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
    },

    reducers: {
        updateState(state,action) {
            console.log(action.payload);
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
