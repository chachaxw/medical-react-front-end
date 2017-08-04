const Schema = {
    navactive:'',//控制nav的activeclass
    thelisteddrugText:'',//上市药品选中菜单的文字
    registeredtoacceptText:''//注册受理选中菜单的文字
}

export default {

    namespace: 'topnav',

    state: Schema,

    subscriptions: {
        setup({dispatch, history}) {
            history.listen(location => {
                const query = location.query;
                let navactive = '';
                if (location.pathname == '/medicalretrieval/index' || location.pathname == '/medicalretrieval/indexsearch') {
                    //如果为首页 或者首页搜索列表页

                    navactive = 'index';

                } else if(location.pathname == '/medicalretrieval/indexdetail') {

                    navactive = 'index';

                } else if(location.pathname == '/medicalretrieval/monitoringandtracking') {

                    //监测追踪
                    navactive = 'monitoringandtracking';

                } else if(location.pathname == '/medicalretrieval/thelisteddrugs' || location.pathname == '/medicalretrieval/thelisteddrugsdetail') {
                    //上市药品
                    navactive = 'thelisteddrugs';

                } else if(location.pathname == '/medicalretrieval/registeredtoaccept' || location.pathname == '/medicalretrieval/registeredtoacceptdetail' || location.pathname == '/medicalretrieval/RegisteredtoacceptdetailStatistical') {
                    //国内注册
                    navactive = 'registeredtoaccept';

                } else if(location.pathname == '/medicalretrieval/marketsales') {
                    //市场销售
                    navactive = 'marketsales';

                } else if(location.pathname == '/medicalretrieval/clinicaltrials' || location.pathname == '/medicalretrieval/instructions' || location.pathname == '/medicalretrieval/drugbid' || location.pathname == '/medicalretrieval/medicalInsuranceDirectory' || location.pathname == '/medicalretrieval/maseDrugTarget' || location.pathname == '/medicalretrieval/domesticCompanies') {
                    //更多
                    navactive = 'more';
                } else if(location.pathname == '/selfcenter') {
                    //个人中心
                    navactive = 'selfcenter';
                }

                dispatch({
                    type:'updateState',
                    payload:{
                        navactive:navactive,
                        ...query
                    }
                });

            });
        },
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
        }
    }

};
