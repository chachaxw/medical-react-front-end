import React from 'react';
import { Router, Route , IndexRedirect} from 'dva/router';
import useful from 'useful';

//动态加入model
const cached = {};
function registerModel(app, model) {
    if (!cached[model.namespace]) {
        app.model(model);
        cached[model.namespace] = 1;
    }
}
//registerModel(app, require('./models/users'));

export default function ({ history, app }) {

    //公共组件 如弹窗 loading
    const CommonComponents = (nextState, cb) => {

        require.ensure([], require => {
            cb(null, require('routes/commonComponents/componentswrap'));
        });

    };

    //top的wrap
    const WrapWithTopNav = (nextState, cb) => {

        require.ensure([], require => {
            registerModel(app, require('./models/topnav'));
            cb(null, require('routes/WrapWithTopNav/WrapWithTopNav'));
        });

    };

    //首页route的wrap
    const Index = (nextState, cb) => {

        require.ensure([], require => {
            registerModel(app, require('./models/index'));
            cb(null, require('routes/Index/Index'));
        });

    };

    // 左侧边栏
    const WrapWithLeftNav = (nextState, cb) => {

        registerModel(app, require('./models/leftnav'));
        require.ensure([], require => {
            cb(null, require('routes/WrapWithLeftNav/WrapWithLeftNav'));
        });

    };

    //首页搜索展示
    const IndexSearch = (nextState, cb) => {

        require.ensure([], require => {
            registerModel(app, require('./models/indexsearch'));
            cb(null, require('routes/Index/IndexSearch'));
        });

    };

    //搜索详情
    const IndexDetail = (nextState, cb) => {

        require.ensure([], require => {
            registerModel(app, require('./models/indexdetail'));
            cb(null, require('routes/Index/IndexDetail'));
        });

    };

    //监测系统列表
    const MonitoringAndTracking = (nextState, cb) => {

        require.ensure([], require => {
            registerModel(app, require('./models/monitoringandtracking'));
            cb(null, require('routes/MonitoringAndTracking/MonitoringAndTracking'));
        });

    };

    //上市药品
    const TheListedDrugs = (nextState, cb) => {

        require.ensure([], require => {
            registerModel(app, require('./models/thelisteddrugs'));
            cb(null, require('routes/TheListedDrugs/TheListedDrugs'));
        });

    };

    const Thelisteddrugsdetail = (nextState, cb) => {

        require.ensure([], require => {
            registerModel(app, require('./models/thelisteddrugsdetail'));
            cb(null, require('routes/Thelisteddrugs/Thelisteddrugsdetail'));
        });

    };

    //国内注册
    const RegisteredToAccept = (nextState, cb) => {

        require.ensure([], require => {
            registerModel(app, require('./models/registeredtoaccept'));
            cb(null, require('routes/RegisteredToAccept/RegisteredToAccept'));
        });

    };
    //国内注册详情
    const Registeredtoacceptdetail = (nextState, cb) => {

        require.ensure([], require => {
            registerModel(app, require('./models/registeredtoacceptdetail'));
            cb(null, require('routes/RegisteredToAccept/Registeredtoacceptdetail'));
        });

    };
    //注册受理统计
    const RegisteredtoacceptdetailStatistical = (nextState, cb) => {

        require.ensure([], require => {
            registerModel(app, require('./models/registeredtoacceptdetailStatistical'));
            cb(null, require('routes/RegisteredToAccept/RegisteredtoacceptdetailStatistical'));
        });

    };

    //市场销售
    const MarketSales = (nextState, cb) => {

        require.ensure([], require => {
            registerModel(app, require('./models/marketsales'));
            cb(null, require('routes/MarketSales/MarketSales'));
        });

    };

    //临床试验
    const ClinicalTrials = (nextState, cb) => {

        require.ensure([], require => {
            registerModel(app, require('./models/clinicaltrials'));
            cb(null, require('routes/ClinicalTrials/ClinicalTrials'));
        });

    };

    //说明书
    const Instructions = (nextState, cb) => {

        require.ensure([], require => {
            registerModel(app, require('./models/instructions'));
            cb(null, require('routes/Instructions/Instructions'));
        });

    };

    //药品招标
    const Drugbid = (nextState, cb) => {

        require.ensure([], require => {
            registerModel(app, require('./models/drugbid'));
            cb(null, require('routes/Drugbid/Drugbid'));
        });

    };

    //医保目标
    const MedicalInsuranceDirectory = (nextState, cb) => {

        require.ensure([], require => {
            registerModel(app, require('./models/medicalInsuranceDirectory'));
            cb(null, require('routes/MedicalInsuranceDirectory/MedicalInsuranceDirectory'));
        });

    };

    //基药目标
    const MaseDrugTarget = (nextState, cb) => {

        require.ensure([], require => {
            registerModel(app, require('./models/maseDrugTarget'));
            cb(null, require('routes/MaseDrugTarget/MaseDrugTarget'));
        });

    };

    //国内企业
    const DomesticCompanies = (nextState, cb) => {

        require.ensure([], require => {
            registerModel(app, require('./models/domesticCompanies'));
            cb(null, require('routes/DomesticCompanies/DomesticCompanies'));
        });

    };

    //个人中心
    const Selfcenter = (nextState, cb) => {

        require.ensure([], require => {
            registerModel(app, require('./models/selfcenter'));
            cb(null, require('routes/Selfcenter/Selfcenter'));
        });

    };

    //登录
    const Login = (nextState, cb) => {

        require.ensure([], require => {
            registerModel(app, require('./models/login'));
            cb(null, require('routes/login/login'));
        });

    };

    //登陆校验
    const loginAuth = ({location}, replace) => {
        const DsDynSign = useful.getCookie('DsDynSign');
        let pathname = location.pathname;
        if(!DsDynSign) {
            if(pathname !== "/login") {
                replace({ pathname: '/login' });
            }
        }
    }

    return  <Router history={ history }>
                <Route path="/" getComponents={CommonComponents}>

                    <IndexRedirect to="/medicalretrieval/index" />
                    <Route path="login" getComponents={Login} ></Route>
                    <Route path="medicalretrieval" getComponents={WrapWithTopNav}>
                        {/*首页*/}
                        <Route path="index" getComponents={Index}>
                        </Route>

                        {/*监测追踪*/}
                        <Route path="monitoringandtracking" getComponents={MonitoringAndTracking}></Route>

                        <Route getComponents={WrapWithLeftNav}>

                            {/*首页搜索*/}
                            <Route path="indexsearch" getComponents={IndexSearch}></Route>

                            {/*药品详情页*/}
                            <Route path="indexdetail" getComponents={IndexDetail}></Route>


                            {/*上市药品*/}
                            <Route path="thelisteddrugs" getComponents={TheListedDrugs}></Route>
                            {/*上市药品详情页*/}
                            <Route path="thelisteddrugsdetail" getComponents={Thelisteddrugsdetail}></Route>

                            {/*国内注册受理*/}
                            <Route path="registeredtoaccept" getComponents={RegisteredToAccept}></Route>
                            {/*国内注册受理详情页*/}
                            <Route path="registeredtoacceptdetail" getComponents={Registeredtoacceptdetail}></Route>
                            {/*注册受理统计*/}
                            <Route path="registeredtoacceptdetailStatistical" getComponents={RegisteredtoacceptdetailStatistical}></Route>

                            {/*市场销售*/}
                            <Route path="marketsales" getComponents={MarketSales}></Route>

                            {/*更多里面的临床试验*/}
                            <Route path="clinicaltrials" getComponents={ClinicalTrials}></Route>
                            {/*更多里面的说明书*/}
                            <Route path="instructions" getComponents={Instructions}></Route>
                            {/*更多里面的药品招标*/}
                            <Route path="drugbid" getComponents={Drugbid}></Route>
                            {/*更多医保目录*/}
                            <Route path="medicalInsuranceDirectory" getComponents={MedicalInsuranceDirectory}></Route>
                            {/*基药目标*/}
                            <Route path="maseDrugTarget" getComponents={MaseDrugTarget}></Route>
                            {/*国内企业*/}
                            <Route path="domesticCompanies" getComponents={DomesticCompanies}></Route>
                        </Route>

                        {/*个人中心*/}
                        <Route path="/selfcenter" getComponents={Selfcenter} onEnter={loginAuth}></Route>
                    </Route>

                </Route>
            </Router>
}
