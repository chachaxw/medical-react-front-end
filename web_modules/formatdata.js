import React, {PropTypes, Component} from 'react';
import OpenAndClose from 'components/openAndClose/openAndClose';
import TheKeyWordQuery from 'components/TheKeyWordQuery/TheKeyWordQuery';
import TheSelectQuery from 'components/TheSelectQuery/TheSelectQuery';
import TheConditionsForScreening from 'components/TheConditionsForScreening/TheConditionsForScreening';
import TheScreening from 'components/TheScreening/TheScreening';
import { Tabs } from 'antd';
import useful from 'useful';

const DsUserInfo = useful.getCookie('DsUserInfo') || '';
const objectDsUserInfo = DsUserInfo && JSON.parse(DsUserInfo) || {};
const TabPane = Tabs.TabPane;
const usrename = objectDsUserInfo.usrename;

const changTime = (data) => {
    const date = new Date(data);
    return `${date.getFullYear()}-${date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)}-${date.getDate() > 9 ? date.getDate() : '0' + date.getDate()}`
};


import big_arrow_close from 'public/img/big_arrow_close.png';

const getTop = (e) => {
    let offset = e.offsetTop;
    if(e.offsetParent != null) offset += getTop(e.offsetParent);
    return offset;
}

const changeScrollTop = (payload) => {
    const e = payload && payload.e;
    const event = e || window.e;
    const target = event.target;
    const props = payload && payload.props || {};
    const attr = target && target.getAttribute('data-id') || '';
    if(attr) {
        const ele = document.getElementById(attr);
        const top = getTop(ele);
        document.body.scrollTop = top;
        document.documentElement.scrollTop = top;
        props.updateState({
            showactiveLeftNav:attr
        })
    }
}


const formatType = {
    'formatFormValue'(data) {
        if(!data) {
            return {};
        }
        let returnJson = {};
        for(let attr in data) {
            returnJson[attr] = {
                value:data[attr]
            }
        }
        return returnJson;
    },
    'registeredheader'(data) {
        if(!data) {
            return ''
        }

        if(data == 'ApprovalNumber') {
            return (
                <div className="xh-content-list-heard xh-content-list-heard-6 xh-proportion">
                    <span>受理号</span>
                    <span className="xh-down-arrow">药品名称</span>
                    <span className="xh-down-arrow">企业</span>
                    <span className="xh-down-arrow">平生结论</span>
                    <span>办理状态</span>
                    <span>状态日期</span>
                </div>
            )
        } else if(data == 'medicines') {
            return (
                <div className="xh-content-list-heard xh-content-list-heard-7 xh-proportion">
                    <span>药品名称</span>
                    <span>申请生产数</span>
                    <span>申请临床数</span>
                    <span>新药申请</span>
                    <span>仿制申请</span>
                    <span>进口申请</span>
                    <span>总申请数</span>
                </div>
            )
        } else if(data == 'enterprise') {
            return (
                <div className="xh-content-list-heard xh-content-list-heard-7 xh-proportion">
                    <span>企业名称</span>
                    <span>申请生产数</span>
                    <span>申请临床数</span>
                    <span>新药申请</span>
                    <span>仿制申请</span>
                    <span>进口申请</span>
                    <span>总申请数</span>
                </div>
            )
        }
    },
    'thelisteddrugsheader'(data) {
        if(!data) {
            return ''
        }

        if(data == 'ApprovalNumber') {
            return (
                <div className="xh-content-list-heard xh-proportion">
                    <span>批准文号</span>
                    <span className="xh-down-arrow">药品名称</span>
                    <span className="xh-down-arrow">规格</span>
                    <span className="xh-down-arrow">生产企业</span>
                    <span>关键信息</span>
                </div>
            )
        } else if(data == 'medicines') {
            return (
                <div className="xh-content-list-heard xh-proportion">
                    <span>药品名称</span>
                    <span>最早上市批文</span>
                    <span>国产批文数</span>
                    <span>进口批文数</span>
                    <span>总计</span>
                </div>
            )
        } else if(data == 'enterprise') {
            return (
                <div className="xh-content-list-heard xh-proportion">
                    <span>企业名称</span>
                    <span>化学药</span>
                    <span>生物制药</span>
                    <span>总计</span>
                </div>
            )
        }

    },
    'selectText'(data) {
        if (!data) {
            return ''
        }
        const browsing = data.browsing;
        const render = data.render;

        if (browsing == 'ApprovalNumber') {
            if(render == 'zgss') {
                return '按批文浏览';
            }else if(render == 'mgss') {
                return '按申请号浏览';
            }else if(render == 'omss') {
                return '按结果列表浏览';
            }else if(render == 'rbss') {
                return '按通用名浏览';
            }

        } else if (browsing == 'medicines') {
            if(render == 'zgss') {
                return '按药名浏览';
            }else if(render == 'mgss') {
                return '按药名浏览';
            }else if(render == 'omss') {
                return '按活性成分浏览';
            }else if(render == 'rbss') {
                return '';
            }
        } else if (browsing == 'enterprise') {
            if(render == 'zgss') {
                return '按企业浏览';
            }else if(render == 'mgss') {
                return '按企业浏览';
            }else if(render == 'omss') {
                return '按企业浏览';
            }else if(render == 'rbss') {
                return '按企业浏览';
            }
        }
    },
    selectTextReg(data) {
        if (!data) {
            return ''
        }
        const browsing = data.browsing;
        const render = data.render;

        if (browsing == 'ApprovalNumber') {
            return '按批文浏览';
        } else if (browsing == 'medicines') {
            return '按药名浏览';
        } else if (browsing == 'enterprise') {
            return '按企业浏览';
        }
    },
    'leftnav'(data) {

        if(!data || !data.render) {
            return "";
        }

        const render = data && data.render;
        const props = data && data.props || {};
        const clickleftnav = data && data.clickleftnav;

        //详情左侧边栏
        if(render == 'indexdetail') {
            return (
                <div className="xh-container-left">
                    <div className="xh-container-left-inner">
                        {/*<!--侧边栏顶部-->*/}
                        <div className="xh-sidebar-top xh-sidebar-arrow">
                            <a href="javascript:;" className="xh-sidebar-hide">
                                <img src={big_arrow_close} onClick={()=>{clickleftnav({change:'close'})}} />
                            </a>
                        </div>
                        {/*<!--侧边栏列表-->*/}
                        <div className="xh-sidebar-drug-details">
                            <h2>内容目录</h2>
                            <ul>
                                <li>
                                    <a href="javascript:;" className="active" data-id="base_message">药物简介</a>
                                </li>
                                <li>
                                    <a href="javascript:;" data-id="base_message">基本信息</a>
                                </li>
                                <li>
                                    <a href="javascript:;" data-id="base_message">化学信息</a>
                                </li>
                                <li>
                                    <a href="javascript:;" data-id="base_message">中国上市</a>
                                </li>
                                <li>
                                    <a href="javascript:;" data-id="base_message">欧美日上市</a>
                                </li>
                                <li>
                                    <a href="javascript:;" data-id="base_message">临床试验</a>
                                </li>
                                <li>
                                    <a href="javascript:;" data-id="base_message">中国注册申报</a>
                                </li>
                                <li>
                                    <a href="javascript:;" data-id="base_message">市场销售</a>
                                </li>
                                <li>
                                    <a href="javascript:;" data-id="base_message">专利信息</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
        // 上市药品详情
        else if(render.match('thelisteddrugsdetail')) {
            if(render == 'thelisteddrugsdetail-zgss') {
                 return (
                     <div className="xh-container-left" onClick={(e)=>{changeScrollTop({e:e,props:props})}}>
                         <div className="xh-container-left-inner">
                             {/*<!--侧边栏顶部-->*/}
                             <div className="xh-sidebar-top xh-sidebar-arrow">
                                 <a href="javascript:;" className="xh-sidebar-hide">
                                     <img src={big_arrow_close} onClick={()=>{clickleftnav({change:'close'})}} />
                                 </a>
                             </div>
                             {/*<!--侧边栏列表-->*/}
                             <div className="xh-sidebar-drug-details">
                                 <h2>内容目录</h2>
                                 <ul>
                                     <li>
                                         <a href="javascript:;" className={props.showactiveLeftNav=='' || props.showactiveLeftNav == 'key_message'?'active':''} data-id="key_message">关键信息</a>
                                     </li>
                                     <li>
                                         <a href="javascript:;" className={props.showactiveLeftNav == 'piwen_message'?'active':''} data-id="piwen_message">批文信息</a>
                                     </li>
                                     <li>
                                         <a href="javascript:;" className={props.showactiveLeftNav == 'active_ingredient'?'active':''} data-id="active_ingredient">药物简介</a>
                                     </li>
                                     <li>
                                         <a href="javascript:;" className={props.showactiveLeftNav == 'newzhongbiao_message'?'active':''} data-id="newzhongbiao_message">中标价格</a>
                                     </li>
                                     <li>
                                         <a href="javascript:;" className={props.showactiveLeftNav == 'instructions'?'active':''} data-id="instructions">说明书</a>
                                     </li>
                                     <li>
                                         <a href="javascript:;" className={props.showactiveLeftNav == 'agent_message'?'active':''} data-id="agent_message">招商代理</a>
                                     </li>
                                     <li>
                                         <a href="javascript:;" className={props.showactiveLeftNav == 'tuijian_sj'?'active':''} data-id="tuijian_sj">一致性评价信息</a>
                                     </li>
                                 </ul>
                             </div>
                         </div>
                     </div>
                 )
            } else if(render == 'thelisteddrugsdetail-mgss') {
                return (
                    <div className="xh-container-left" onClick={(e)=>{changeScrollTop({e:e,props:props})}}>
                        <div className="xh-container-left-inner">
                            {/*<!--侧边栏顶部-->*/}
                            <div className="xh-sidebar-top xh-sidebar-arrow">
                                <a href="javascript:;" className="xh-sidebar-hide">
                                    <img src={big_arrow_close} onClick={()=>{clickleftnav({change:'close'})}} />
                                </a>
                            </div>
                            {/*<!--侧边栏列表-->*/}
                            <div className="xh-sidebar-drug-details">
                                <h2>内容目录</h2>
                                <ul>
                                    <li>
                                        <a href="javascript:;" className={props.showactiveLeftNav=='' || props.showactiveLeftNav == 'base_message'?'active':''} data-id="base_message">基本信息</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" className={props.showactiveLeftNav == 'active_ingredient'?'active':''} data-id="active_ingredient">活性成分</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" className={props.showactiveLeftNav == 'zlxx'?'active':''} data-id="zlxx">专利信息</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" className={props.showactiveLeftNav == 'instructions'?'active':''} data-id="instructions">说明书</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            } else if(render == 'thelisteddrugsdetail-omss') {
                return (
                    <div className="xh-container-left" onClick={(e)=>{changeScrollTop({e:e,props:props})}}>
                        <div className="xh-container-left-inner">
                            {/*<!--侧边栏顶部-->*/}
                            <div className="xh-sidebar-top xh-sidebar-arrow">
                                <a href="javascript:;" className="xh-sidebar-hide">
                                    <img src={big_arrow_close} onClick={()=>{clickleftnav({change:'close'})}} />
                                </a>
                            </div>
                            {/*<!--侧边栏列表-->*/}
                            <div className="xh-sidebar-drug-details">
                                <h2>内容目录</h2>
                                <ul>
                                    <li>
                                        <a href="javascript:;" className={props.showactiveLeftNav=='' || props.showactiveLeftNav == 'base_message'?'active':''} data-id="base_message">基本信息</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" className={props.showactiveLeftNav == 'active_ingredient'?'active':''} data-id="active_ingredient">活性成分</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" className={props.showactiveLeftNav == 'instructions'?'active':''} data-id="instructions">说明书</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }
        } else if(render.match('thelisteddrugs')) {
            let renderList;
            let renderListDataSelf;
            let queryurl;
            let TheSelectQueryUrl;
            let delectLS;
            if(render == 'thelisteddrugs-zgss') {

                renderList = [
                    // {key:'auth_num',placeholder:'批准文号'},
                    {key:'drug_name',placeholder:'中英文药品名称/商品名'},
                    {key:'specification',placeholder:'规格'},
                    {key:'manufacture',placeholder:'企业名称'},
                    // {key:'address',placeholder:'地址'},
                    // {key:'orig_auth_num',placeholder:'原批准文号'},
                    {key:'auth_num',placeholder:'批准文号'},
                    // {key:'state_yibao',placeholder:'药品本位码'},
                    // {key:'state_jiyao',placeholder:'基药类型'},
                    // {key:'state_OTC',placeholder:'处方类别'},
                    // {key:'is_api',placeholder:'原料/制剂'}
                ];

                renderListDataSelf = [
                    {title:'剂型',queryUrl:'http://api2.drugsea.cn/product/cn/list/dosage_form',key:'dosage_form',useCheckbox:true},
                    {title:'药品类型',queryUrl:'http://api2.drugsea.cn/product/cn/list/drug_type',key:'drug_type',useCheckbox:true},
                    {title:'上市日期',queryUrl:'http://api2.drugsea.cn/product/cn/list/listing_date',key:'listing_date',useCheckbox:true},
                    {title:'新药类型',queryUrl:'http://api2.drugsea.cn/product/cn/list/new_drug_type',key:'new_drug_type',useCheckbox:true},
                    {title:'国产/进口',queryUrl:'http://api2.drugsea.cn/product/cn/list/source',key:'source',useCheckbox:true},
                    {title:'ATC分类',queryUrl:'http://api2.drugsea.cn/product/cn/list/ATC_code',key:'ATC_code',useCheckbox:true},
                    {title:'特殊条件',queryUrl:'http://api2.drugsea.cn/product/cn/list/special_condition',key:'special_condition',useCheckbox:true},
                ];

                queryurl = `http://api2.drugsea.cn/onekey?db=cnProduct&offset=0&user=${usrename}&type=0`;

                TheSelectQueryUrl = 'http://api2.drugsea.cn/onekey?db=cnProduct'

                delectLS = 'http://api2.drugsea.cn/mysearch/delete/';

            } else if(render == 'thelisteddrugs-mgss') {

                renderList = [
                    {key:'drug_name',placeholder:'英文药品名称/商品名'},
                    {key:'company',placeholder:'企业名称'},
                    {key:'brand_name',placeholder:'商品名'},
                    // {key:'Strength',placeholder:'规格'},
                    {key:'ApplNo',placeholder:'申请号'},
                ];

                renderListDataSelf = [
                    {title:'药品类型',queryUrl:'http://api3.drugsea.cn/fda_drugs/list/drug_type',key:'drug_type',useCheckbox:true},
                    {title:'是否参比制剂',queryUrl:'http://api3.drugsea.cn/fda_drugs/list/RLD',key:'RLD',useCheckbox:true},
                    {title:'市场状态',queryUrl:'http://api3.drugsea.cn/fda_drugs/list/MarketingStatus',key:'MarketingStatus',useCheckbox:true},
                    {title:'申请类型',queryUrl:'http://api3.drugsea.cn/fda_drugs/list/ApplyType',key:'ApplyType',useCheckbox:true},
                    {title:'化学类型',queryUrl:'http://api3.drugsea.cn/fda_drugs/list/SubmissionClassification',key:'SubmissionClassification',useCheckbox:true},
                    {title:'审评类型',queryUrl:'http://api3.drugsea.cn/fda_drugs/list/ReviewPriorityOrphanStatus',key:'ReviewPriorityOrphanStatus',useCheckbox:true},
                    {title:'上市日期',queryUrl:'http://api3.drugsea.cn/fda_drugs/list/year',key:'year',useCheckbox:true},
                    {title:'ATC分类',queryUrl:'http://api3.drugsea.cn/fda_drugs/list/ATC_code',key:'ATC_code',useCheckbox:true},
                ];

                queryurl = `http://api2.drugsea.cn/onekey?db=cnProduct&offset=0&user=${usrename}&type=0`;

                TheSelectQueryUrl = 'http://api2.drugsea.cn/onekey?db=usProduct';

                delectLS = 'http://api2.drugsea.cn/mysearch/delete/';

            } else if(render == 'thelisteddrugs-omss') {

                renderList = [
                    {key:'drug_name',placeholder:'英文活性成分'},
                    {key:'manufacture',placeholder:'企业名称'},
                    {key:'brand_name',placeholder:'商品名'},
                    {key:'product_number',placeholder:'申请编号'},
                ];

                renderListDataSelf = [
                    {title:'药品类型',queryUrl:'http://api3.drugsea.cn/ema_drugs/list/drug_type',key:'drug_type',useCheckbox:true},
                    {title:'市场状态',queryUrl:'http://api3.drugsea.cn/ema_drugs/list/status',key:'status',useCheckbox:true},
                    {title:'有条件批准',queryUrl:'http://api3.drugsea.cn/ema_drugs/list/condition_approval',key:'condition_approval',useCheckbox:true},
                    {title:'例外条件',queryUrl:'http://api3.drugsea.cn/ema_drugs/list/exceptional_circumstance',key:'exceptional_circumstance',useCheckbox:true},
                    {title:'是否孤儿药',queryUrl:'http://api3.drugsea.cn/ema_drugs/list/is_orphan',key:'is_orphan',useCheckbox:true},
                    {title:'是否仿制药',queryUrl:'http://api3.drugsea.cn/ema_drugs/list/is_generic',key:'is_generic',useCheckbox:true},
                    {title:'是否生物类似物',queryUrl:'http://api3.drugsea.cn/ema_drugs/list/biosimilar',key:'biosimilar',useCheckbox:true},
                    {title:'上市年份',queryUrl:'http://api3.drugsea.cn/ema_drugs/list/year',key:'year',useCheckbox:true},
                    {title:'ATC分类',queryUrl:'http://api3.drugsea.cn/ema_drugs/list/ATC_code',key:'ATC_code',useCheckbox:true}
                ];

                queryurl = `http://api2.drugsea.cn/onekey?db=cnProduct&offset=0&user=${usrename}&type=0`;

                TheSelectQueryUrl = 'http://api2.drugsea.cn/onekey?db=euProduct';

                delectLS = 'http://api2.drugsea.cn/mysearch/delete/';

            } else if(render == 'thelisteddrugs-rbss') {

                renderList = [
                    {key:'drug_name',placeholder:'日本/英文药品名称'},
                    {key:'manufacture',placeholder:'日文/英文企业名称'},
                    {key:'sales_name',placeholder:'日本/英文商标名'}
                ];

                renderListDataSelf = [
                    {title:'上市年份',queryUrl:'http://api3.drugsea.cn/fda_drugs/list/year',key:'year',useCheckbox:true},
                    {title:'ATC分类',queryUrl:'http://api3.drugsea.cn/fda_drugs/list/ATC_code',key:'ATC_code',useCheckbox:true},
                ];

                TheSelectQueryUrl = 'http://api2.drugsea.cn/onekey?db=jpProduct';

                queryurl = `http://api2.drugsea.cn/onekey?db=cnProduct&offset=0&user=${usrename}&type=0`;

                delectLS = 'http://api2.drugsea.cn/mysearch/delete/';

            }

            return (
                <div className="xh-container-left-inner">
                    {/*<!--侧边栏顶部-->*/}
                    <div className="xh-sidebar-top xh-sidebar-arrow">
                        <a href="javascript:;" className="xh-sidebar-hide">
                            <img src={big_arrow_close} onClick={()=>{clickleftnav({change:'close'})}} />
                        </a>
                    </div>
                    {/*<!--侧边栏列表-->*/}
                    <ul className="xh-sidebar-wrap">

                        <OpenAndClose title="关键词查询" show={true} render={true}>
                            <TheKeyWordQuery renderList={renderList} {...props} key={props.render} />
                        </OpenAndClose>
                        <OpenAndClose title="一键搜索">
                            <TheSelectQuery {...props} url={TheSelectQueryUrl} key={props.render+props.toSelectReset} />
                        </OpenAndClose>
                        <OpenAndClose title="条件筛选">
                            <TheConditionsForScreening {...props} key={props.render} renderListDataSelf={renderListDataSelf}/>
                        </OpenAndClose>
                        <OpenAndClose title="我的筛选">
                            <TheScreening {...props} key={props.render} queryurl={queryurl}  delectLS={delectLS}/>
                        </OpenAndClose>

                    </ul>
                </div>
            )
        } else if(render == 'indexsearch') {
            //首页搜索列表页侧边栏

            const renderList = [
                {key:'drug_name',placeholder:'药品名称'},
                {key:'target',placeholder:'靶点'},
                {key:'indication',placeholder:'适应症'},
                {key:'brief_introduction',placeholder:'简介'},
            ];

            const renderListDataSelf = [
                {title:'药品类型',queryUrl:'http://api3.drugsea.cn/global_drugs/list/drug_type',key:'drug_type'},
                {title:'研发状态',queryUrl:'http://api3.drugsea.cn/global_drugs/list/rd_status',key:'rd_status'},
                {title:'上市年份',queryUrl:'http://api3.drugsea.cn/global_drugs/list/year',key:'year'},
                {title:'ATC一级编码',queryUrl:'http://api3.drugsea.cn/global_drugs/list/ATC_code',key:'ATC_code'},
            ];

            const getlocalItem = 'myScreeningSearch';

            const TheSelectQueryUrl = 'http://api2.drugsea.cn/onekey?db=globalDrug';

            return (
                <div className="xh-container-left-inner">
                    {/*<!--侧边栏顶部-->*/}
                    <div className="xh-sidebar-top xh-sidebar-arrow">
                        <a href="javascript:;" className="xh-sidebar-hide">
                            <img src={big_arrow_close} onClick={()=>{clickleftnav({change:'close'})}} />
                        </a>
                    </div>
                    {/*<!--侧边栏列表-->*/}
                    <ul className="xh-sidebar-wrap">
                        <OpenAndClose title="关键词查询" show={true} render={true}>
                            <TheKeyWordQuery renderList={renderList} {...props} key={props.keywordsReset} />
                        </OpenAndClose>

                        <OpenAndClose title="一键搜索">
                            <TheSelectQuery {...props} url={TheSelectQueryUrl} key={props.toSelectReset} />
                        </OpenAndClose>

                        <OpenAndClose title="条件筛选">
                            <TheConditionsForScreening {...props} key={props.screeningReset} renderListDataSelf={renderListDataSelf} />
                        </OpenAndClose>

                        <OpenAndClose title="我的筛选">
                            <TheScreening {...props} key={props.myScreeningReset} getlocalItem={getlocalItem} />
                        </OpenAndClose>
                    </ul>
                </div>
            )
        } else if(render == 'instructions') {

            //说明书列表页
            const renderList = [
                {key:'drug_name',placeholder:'中英文药品名称/商品名'},
                {key:'company',placeholder:'企业名称'},
                {key:'dosage_form',placeholder:'剂型'},
                {key:'specification',placeholder:'specification'},
            ];

            const renderListDataSelf = [
                {title:'年份',queryUrl:'http://qy2.drugsea.cn/c/drug/hosp/rank/years',key:'years'},
                {title:'季度',queryUrl:'http://qy2.drugsea.cn/c/drug/hosp/rank/quarter',key:'quarter'},
                {title:'治疗分类',queryUrl:'http://qy2.drugsea.cn/c/drug/hosp/rank/ATC_code',key:'ATC_code'},
                {title:'城市',queryUrl:'http://qy2.drugsea.cn/c/drug/hosp/rank/city',key:'city'},
            ];

            const getlocalItem = 'myScreeningSearch';

            return (
                <div className="xh-container-left-inner">
                    {/*<!--侧边栏顶部-->*/}
                    <div className="xh-sidebar-top xh-sidebar-arrow">
                        <a href="javascript:;" className="xh-sidebar-hide">
                            <img src={big_arrow_close} onClick={()=>{clickleftnav({change:'close'})}} />
                        </a>
                    </div>
                    {/*<!--侧边栏列表-->*/}
                    <ul className="xh-sidebar-wrap">
                        <OpenAndClose title="关键词查询" show={true} render={true}>
                            <TheKeyWordQuery renderList={renderList} {...props} key={props.keywordsReset}/>
                        </OpenAndClose>

                        <OpenAndClose title="条件筛选">
                            <TheConditionsForScreening {...props} key={props.screeningReset} renderListDataSelf={renderListDataSelf}/>
                        </OpenAndClose>

                        {/*<OpenAndClose title="我的筛选">*/}
                            {/*<TheScreening {...props} key={props.myScreeningReset} getlocalItem={getlocalItem}/>*/}
                        {/*</OpenAndClose>*/}
                    </ul>
                </div>
            )
        } else if(render == 'drugbid') {

            //药品招标列表页面
            const renderList = [
                {key:'drug_name',placeholder:'中英文药品名称/商品名'},
                {key:'company',placeholder:'企业名称'},
                {key:'dosage_form',placeholder:'剂型'},
                {key:'specification',placeholder:'specification'},
            ];

            const renderListDataSelf = [
                {title:'年份',queryUrl:'http://qy2.drugsea.cn/c/drug/hosp/rank/years',key:'years'},
                {title:'季度',queryUrl:'http://qy2.drugsea.cn/c/drug/hosp/rank/quarter',key:'quarter'},
                {title:'治疗分类',queryUrl:'http://qy2.drugsea.cn/c/drug/hosp/rank/ATC_code',key:'ATC_code'},
                {title:'城市',queryUrl:'http://qy2.drugsea.cn/c/drug/hosp/rank/city',key:'city'},
            ];

            const getlocalItem = 'myScreeningSearch';

            const TheSelectQueryUrl = 'http://api2.drugsea.cn/onekey?db=zhaobiao';

            return (
                <div className="xh-container-left-inner">
                    {/*<!--侧边栏顶部-->*/}
                    <div className="xh-sidebar-top xh-sidebar-arrow">
                        <a href="javascript:;" className="xh-sidebar-hide">
                            <img src={big_arrow_close} onClick={()=>{clickleftnav({change:'close'})}} />
                        </a>
                    </div>
                    {/*<!--侧边栏列表-->*/}
                    <ul className="xh-sidebar-wrap">
                        <OpenAndClose title="关键词查询" show={true} render={true}>
                            <TheKeyWordQuery renderList={renderList} {...props} key={props.keywordsReset}/>
                        </OpenAndClose>
                        <OpenAndClose title="一键搜索">
                            <TheSelectQuery {...props} url={TheSelectQueryUrl} key={props.toSelectReset+props.render} />
                        </OpenAndClose>
                        <OpenAndClose title="条件筛选">
                            <TheConditionsForScreening {...props} key={props.screeningReset} renderListDataSelf={renderListDataSelf}/>
                        </OpenAndClose>

                        {/*<OpenAndClose title="我的筛选">*/}
                        {/*<TheScreening {...props} key={props.myScreeningReset} getlocalItem={getlocalItem}/>*/}
                        {/*</OpenAndClose>*/}
                    </ul>
                </div>
            )
        } else if(render == 'medicalInsuranceDirectory') {
            //医保目录
            const renderList = [
                {key:'drug_name',placeholder:'中英文药品名称/商品名'},
                {key:'company',placeholder:'企业名称'},
                {key:'dosage_form',placeholder:'剂型'},
                {key:'specification',placeholder:'specification'},
            ];

            const renderListDataSelf = [
                {title:'年份',queryUrl:'http://qy2.drugsea.cn/c/drug/hosp/rank/years',key:'years'},
                {title:'季度',queryUrl:'http://qy2.drugsea.cn/c/drug/hosp/rank/quarter',key:'quarter'},
                {title:'治疗分类',queryUrl:'http://qy2.drugsea.cn/c/drug/hosp/rank/ATC_code',key:'ATC_code'},
                {title:'城市',queryUrl:'http://qy2.drugsea.cn/c/drug/hosp/rank/city',key:'city'},
            ];

            const getlocalItem = 'myScreeningSearch';

            return (
                <div className="xh-container-left-inner">
                    {/*<!--侧边栏顶部-->*/}
                    <div className="xh-sidebar-top xh-sidebar-arrow">
                        <a href="javascript:;" className="xh-sidebar-hide">
                            <img src={big_arrow_close} onClick={()=>{clickleftnav({change:'close'})}} />
                        </a>
                    </div>
                    {/*<!--侧边栏列表-->*/}
                    <ul className="xh-sidebar-wrap">
                        <OpenAndClose title="关键词查询" show={true} render={true}>
                            <TheKeyWordQuery renderList={renderList} {...props} key={props.keywordsReset}/>
                        </OpenAndClose>

                        <OpenAndClose title="条件筛选">
                            <TheConditionsForScreening {...props} key={props.screeningReset} renderListDataSelf={renderListDataSelf}/>
                        </OpenAndClose>

                        {/*<OpenAndClose title="我的筛选">*/}
                        {/*<TheScreening {...props} key={props.myScreeningReset} getlocalItem={getlocalItem}/>*/}
                        {/*</OpenAndClose>*/}
                    </ul>
                </div>
            )
        } else if(render == 'maseDrugTarget') {
            //基本目录
            const renderList = [
                {key:'drug_name',placeholder:'中英文药品名称/商品名'},
                {key:'company',placeholder:'企业名称'},
                {key:'dosage_form',placeholder:'剂型'},
                {key:'specification',placeholder:'specification'},
            ];

            const renderListDataSelf = [
                {title:'年份',queryUrl:'http://qy2.drugsea.cn/c/drug/hosp/rank/years',key:'years'},
                {title:'季度',queryUrl:'http://qy2.drugsea.cn/c/drug/hosp/rank/quarter',key:'quarter'},
                {title:'治疗分类',queryUrl:'http://qy2.drugsea.cn/c/drug/hosp/rank/ATC_code',key:'ATC_code'},
                {title:'城市',queryUrl:'http://qy2.drugsea.cn/c/drug/hosp/rank/city',key:'city'},
            ];

            const getlocalItem = 'myScreeningSearch';

            return (
                <div className="xh-container-left-inner">
                    {/*<!--侧边栏顶部-->*/}
                    <div className="xh-sidebar-top xh-sidebar-arrow">
                        <a href="javascript:;" className="xh-sidebar-hide">
                            <img src={big_arrow_close} onClick={()=>{clickleftnav({change:'close'})}} />
                        </a>
                    </div>
                    {/*<!--侧边栏列表-->*/}
                    <ul className="xh-sidebar-wrap">
                        <OpenAndClose title="关键词查询" show={true} render={true}>
                            <TheKeyWordQuery renderList={renderList} {...props} key={props.keywordsReset}/>
                        </OpenAndClose>

                        <OpenAndClose title="条件筛选">
                            <TheConditionsForScreening {...props} key={props.screeningReset} renderListDataSelf={renderListDataSelf}/>
                        </OpenAndClose>

                        {/*<OpenAndClose title="我的筛选">*/}
                        {/*<TheScreening {...props} key={props.myScreeningReset} getlocalItem={getlocalItem}/>*/}
                        {/*</OpenAndClose>*/}
                    </ul>
                </div>
            )
        } else if(render == "domesticCompanies") {
            //国内企业
            const renderList = [
                {key:'drug_name',placeholder:'中英文药品名称/商品名'},
                {key:'company',placeholder:'企业名称'},
                {key:'dosage_form',placeholder:'剂型'},
                {key:'specification',placeholder:'specification'},
            ];

            const renderListDataSelf = [
                {title:'年份',queryUrl:'http://qy2.drugsea.cn/c/drug/hosp/rank/years',key:'years'},
                {title:'季度',queryUrl:'http://qy2.drugsea.cn/c/drug/hosp/rank/quarter',key:'quarter'},
                {title:'治疗分类',queryUrl:'http://qy2.drugsea.cn/c/drug/hosp/rank/ATC_code',key:'ATC_code'},
                {title:'城市',queryUrl:'http://qy2.drugsea.cn/c/drug/hosp/rank/city',key:'city'},
            ];

            const getlocalItem = 'myScreeningSearch';

            return (
                <div className="xh-container-left-inner">
                    {/*<!--侧边栏顶部-->*/}
                    <div className="xh-sidebar-top xh-sidebar-arrow">
                        <a href="javascript:;" className="xh-sidebar-hide">
                            <img src={big_arrow_close} onClick={()=>{clickleftnav({change:'close'})}} />
                        </a>
                    </div>
                    {/*<!--侧边栏列表-->*/}
                    <ul className="xh-sidebar-wrap">
                        <OpenAndClose title="关键词查询" show={true} render={true}>
                            <TheKeyWordQuery renderList={renderList} {...props} key={props.keywordsReset}/>
                        </OpenAndClose>

                        <OpenAndClose title="条件筛选">
                            <TheConditionsForScreening {...props} key={props.screeningReset} renderListDataSelf={renderListDataSelf}/>
                        </OpenAndClose>

                        {/*<OpenAndClose title="我的筛选">*/}
                        {/*<TheScreening {...props} key={props.myScreeningReset} getlocalItem={getlocalItem}/>*/}
                        {/*</OpenAndClose>*/}
                    </ul>
                </div>
            )
        } else if(render == 'registeredtoaccept') {
            //注册侧边栏
            const renderList = [
                {key:'drug_name',placeholder:'中英文药品名称/商品名'},
                {key:'manufacture',placeholder:'企业名称'},
                {key:'slh',placeholder:'受理号'},
                {key:'auth_num',placeholder:'靶点（没找到字段在哪）'},
                {key:'auth_num',placeholder:'适应症（没找到字段在哪）'},
            ];

            const renderListDataSelf = [
                {title:'研发状态',queryUrl:'http://qy2.drugsea.cn/b/drugreg/cn/list/',key:'drug_type'},
                {title:'药品类型',queryUrl:'http://qy2.drugsea.cn/b/drugreg/cn/list/',key:'listing_date'},
                {title:'申请类型',queryUrl:'http://qy2.drugsea.cn/b/drugreg/cn/list/',key:'state_yibao'},
                {title:'办理类型',queryUrl:'http://qy2.drugsea.cn/b/drugreg/cn/list/',key:'state_jiyao'},
                {title:'审评结论',queryUrl:'http://qy2.drugsea.cn/b/drugreg/cn/list/',key:'new_drug_type'},
                {title:'特殊品种',queryUrl:'http://qy2.drugsea.cn/b/drugreg/cn/list/',key:'special_condition'},
                {title:'受理日期',queryUrl:'http://qy2.drugsea.cn/b/drugreg/cn/list/',key:'special_condition'},
                {title:'状态日期',queryUrl:'http://qy2.drugsea.cn/b/drugreg/cn/list/',key:'special_condition'},
                {title:'申报类型',queryUrl:'http://qy2.drugsea.cn/b/drugreg/cn/list/',key:'special_condition'},
                {title:'注册分类',queryUrl:'http://qy2.drugsea.cn/b/drugreg/cn/list/',key:'special_condition'},
                {title:'药品分类',queryUrl:'http://qy2.drugsea.cn/b/drugreg/cn/list/',key:'special_condition'},
                {title:'省份来源',queryUrl:'http://qy2.drugsea.cn/b/drugreg/cn/list/',key:'special_condition'},
                {title:'排除备案',queryUrl:'http://qy2.drugsea.cn/b/drugreg/cn/list/',key:'special_condition'},
                {title:'治疗领域',queryUrl:'http://qy2.drugsea.cn/b/drugreg/cn/list/',key:'special_condition'},

            ];

            const getlocalItem = 'myScreeningTheReg';
            const TheSelectQueryUrl = 'http://api2.drugsea.cn/onekey?db=cnRegistration';

            return (
                <div className="xh-container-left-inner">
                    {/*<!--侧边栏顶部-->*/}
                    <div className="xh-sidebar-top xh-sidebar-arrow">
                        <a href="javascript:;" className="xh-sidebar-hide">
                            <img src={big_arrow_close} onClick={()=>{clickleftnav({change:'close'})}} />
                        </a>
                    </div>
                    {/*<!--侧边栏列表-->*/}
                    <ul className="xh-sidebar-wrap">
                        <OpenAndClose title="关键词查询" show={true} render={true}>
                            <TheKeyWordQuery renderList={renderList} {...props} key={props.keywordsReset}/>
                        </OpenAndClose>
                        <OpenAndClose title="一键搜索">
                            <TheSelectQuery {...props} url={TheSelectQueryUrl} key={props.toSelectReset} />
                        </OpenAndClose>
                        <OpenAndClose title="条件筛选">
                            <TheConditionsForScreening {...props} key={props.screeningReset} renderListDataSelf={renderListDataSelf}/>
                        </OpenAndClose>
                        <OpenAndClose title="我的筛选">
                            <TheScreening {...props} key={props.myScreeningReset} getlocalItem={getlocalItem}/>
                        </OpenAndClose>
                    </ul>
                </div>
            )
        } else if(render == 'marketsales-ybyy') {

            const renderList = [
                {key:'drug_name',placeholder:'中英文药品名称/商品名'},
                {key:'company',placeholder:'企业名称'},
                {key:'dosage_form',placeholder:'剂型'},
                {key:'specification',placeholder:'specification'},
            ];

            const renderListDataSelf = [
                {title:'年份',queryUrl:'http://qy2.drugsea.cn/c/drug/hosp/rank/years',key:'years'},
                {title:'季度',queryUrl:'http://qy2.drugsea.cn/c/drug/hosp/rank/quarter',key:'quarter'},
                {title:'治疗分类',queryUrl:'http://qy2.drugsea.cn/c/drug/hosp/rank/ATC_code',key:'ATC_code'},
                {title:'城市',queryUrl:'http://qy2.drugsea.cn/c/drug/hosp/rank/city',key:'city'},
            ];

            const getlocalItem = 'myScreeningYbyy';


            return(
                <div className="xh-container-left-inner">
                    {/*<!--侧边栏顶部-->*/}
                    <div className="xh-sidebar-top xh-sidebar-arrow">
                        <a href="javascript:;" className="xh-sidebar-hide">
                            <img src={big_arrow_close} onClick={()=>{clickleftnav({change:'close'})}} />
                        </a>
                    </div>
                    <Tabs onChange={(value)=>props.onTagChange(value)}>
                        <TabPane tab="数据查询" key="1">
                            {/*<!--侧边栏列表-->*/}
                            <ul className="xh-sidebar-wrap">
                                <OpenAndClose title="关键词查询" show={true} render={true}>
                                    <TheKeyWordQuery renderList={renderList} {...props} key={props.keywordsReset}/>
                                </OpenAndClose>

                                <OpenAndClose title="条件筛选">
                                    <TheConditionsForScreening {...props} key={props.screeningReset} renderListDataSelf={renderListDataSelf}/>
                                </OpenAndClose>

                                <OpenAndClose title="我的筛选">
                                    <TheScreening {...props} key={props.myScreeningReset} getlocalItem={getlocalItem}/>
                                </OpenAndClose>

                            </ul>
                        </TabPane>
                        <TabPane tab="数据分析" key="2">
                            <div className="xh-sidebar-drug-details">
                                <ul>
                                    <li>
                                        <a href="javascript:;" className="active">整体分析</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">药品分析</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">企业分析</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">品种分析</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">治疗分类分析</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">城市分析</a>
                                    </li>
                                </ul>
                            </div>
                        </TabPane>
                    </Tabs>
                </div>
            )
        } else if(render == 'registeredtoacceptdetail') {
            return (
                <div className="xh-container-left">
                    <div className="xh-container-left-inner">
                        {/*<!--侧边栏顶部-->*/}
                        <div className="xh-sidebar-top xh-sidebar-arrow">
                            <a href="javascript:;" className="xh-sidebar-hide">
                                <img src={big_arrow_close} onClick={()=>{clickleftnav({change:'close'})}} />
                            </a>
                        </div>
                        {/*<!--侧边栏列表-->*/}
                        <div className="xh-sidebar-drug-details">
                            <h2>目录</h2>
                            <ul>
                                <li>
                                    <a href="javascript:;" className="active">药品基本信息</a>
                                </li>
                                <li>
                                    <a href="javascript:;">受理信息</a>
                                </li>
                                <li>
                                    <a href="javascript:;">状态时间轴</a>
                                </li>
                                <li>
                                    <a href="javascript:;">产品简介</a>
                                </li>
                                <li>
                                    <a href="javascript:;">临床试验</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        } else if(render == 'RegisteredtoacceptdetailStatistical') {
            return (
                <div className="xh-container-left">
                    <div className="xh-container-left-inner">
                        <div className="xh-sidebar-top xh-sidebar-arrow">
                            <a href="javascript:;" className="xh-sidebar-hide">
                                <img src={big_arrow_close} onClick={()=>{clickleftnav({change:'close'})}} />
                            </a>
                        </div>
                        <div className="xh-sidebar-drug-details">
                            <h2>目录</h2>
                            <ul>
                                <li>
                                    <a href="javascript:;">整体数据分析</a>
                                </li>
                                <li>
                                    <a href="javascript:;" className="active">品种分析</a>
                                </li>
                                <li>
                                    <a href="javascript:;">企业分析</a>
                                </li>
                                <li>
                                    <a href="javascript:;">治疗领域分析</a>
                                </li>
                                <li>
                                    <a href="javascript:;">申请类型分析</a>
                                </li>
                                <li>
                                    <a href="javascript:;">注册分类分析</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        } else if(render == 'marketsales-nbsj') {
            const renderList = [
                {key:'drug_name',placeholder:'中英文药品名称/商品名'},
                {key:'company',placeholder:'企业名称'},
                {key:'brand_name',placeholder:'商品名'},
            ];

            const renderListDataSelf = [
                {title:'研发状态',queryUrl:'http://qy2.drugsea.cn/b/drugreg/cn/list/drug_type',key:'drug_type'},
                {title:'药品类型',queryUrl:'http://qy2.drugsea.cn/b/drugreg/cn/list/listing_date',key:'listing_date'},
                {title:'申请类型',queryUrl:'http://qy2.drugsea.cn/b/drugreg/cn/list/state_yibao',key:'state_yibao'},
                {title:'办理类型',queryUrl:'http://qy2.drugsea.cn/b/drugreg/cn/list/state_jiyao',key:'state_jiyao'},
                {title:'审评结论',queryUrl:'http://qy2.drugsea.cn/b/drugreg/cn/list/new_drug_type',key:'new_drug_type'},
                {title:'特殊品种',queryUrl:'http://qy2.drugsea.cn/b/drugreg/cn/list/special_condition',key:'special_condition'},
                {title:'受理日期',queryUrl:'http://qy2.drugsea.cn/b/drugreg/cn/list/special_condition',key:'special_condition'},
                {title:'状态日期',queryUrl:'http://qy2.drugsea.cn/b/drugreg/cn/list/special_condition',key:'special_condition'},
                {title:'申报类型',queryUrl:'http://qy2.drugsea.cn/b/drugreg/cn/list/special_condition',key:'special_condition'},
                {title:'注册分类',queryUrl:'http://qy2.drugsea.cn/b/drugreg/cn/list/special_condition',key:'special_condition'},
                {title:'药品分类',queryUrl:'http://qy2.drugsea.cn/b/drugreg/cn/list/special_condition',key:'special_condition'},
                {title:'省份来源',queryUrl:'http://qy2.drugsea.cn/b/drugreg/cn/list/special_condition',key:'special_condition'},
                {title:'排除备案',queryUrl:'http://qy2.drugsea.cn/b/drugreg/cn/list/special_condition',key:'special_condition'},
                {title:'治疗领域',queryUrl:'http://qy2.drugsea.cn/b/drugreg/cn/list/special_condition',key:'special_condition'},
            ];

            const getlocalItem = 'myScreeningNbsj';

            return(
                <div className="xh-container-left-inner">
                    {/*<!--侧边栏顶部-->*/}
                    <div className="xh-sidebar-top xh-sidebar-arrow">
                        <a href="javascript:;" className="xh-sidebar-hide">
                            <img src={big_arrow_close} onClick={()=>{clickleftnav({change:'close'})}} />
                        </a>
                    </div>
                    {/*<!--侧边栏列表-->*/}
                    <ul className="xh-sidebar-wrap">
                        <OpenAndClose title="关键词查询" show={true} render={true}>
                            <TheKeyWordQuery renderList={renderList} {...props} key={props.keywordsReset}/>
                        </OpenAndClose>

                        <OpenAndClose title="条件筛选">
                            <TheConditionsForScreening {...props} key={props.screeningReset} renderListDataSelf={renderListDataSelf}/>
                        </OpenAndClose>

                        <OpenAndClose title="我的筛选">
                            <TheScreening {...props} key={props.myScreeningReset} getlocalItem={getlocalItem}/>
                        </OpenAndClose>
                    </ul>
                </div>
            )
        } else if(render.match('clinicaltrials')) {

            let renderList;
            let renderListDataSelf;
            let getlocalItem;

            if(render == 'clinicaltrials-qqlcsy') {
                //全球临床试验
                renderList = [
                    {key:'title',placeholder:'标题 Title Acronym'},
                    {key:'interventions',placeholder:'相关药物 Conditions'},
                    {key:'study_sponsor',placeholder:'试验单位 Sponsor'},
                    {key:'identifier',placeholder:'登记号 RCT IDS'},
                ];

                renderListDataSelf = [
                    {title:'招募状态',queryUrl:'http://api2.drugsea.cn/us/ct/list/ct_status',key:'ct_status'},
                    {title:'临床阶段',queryUrl:'http://api2.drugsea.cn/us/ct/list/study_phase',key:'study_phase'},
                    {title:'研究结果',queryUrl:'http://api2.drugsea.cn/us/ct/list/has_result',key:'has_result'},
                    {title:'研究类型',queryUrl:'http://api2.drugsea.cn/us/ct/list/study_type',key:'study_type'},
                    {title:'时间筛选',key:['first_received_date','last_updated_date'],render:'datepicker'}
                ];

                getlocalItem = 'myScreeningQqlcsy';

            } else if(render == 'clinicaltrials-zglcsy') {
                //中国临床试验
                renderList = [
                    {key:'title',placeholder:'标题'},
                    {key:'drug_name',placeholder:'相关药物'},
                    {key:'study_sponsor',placeholder:'试验单位'},
                    {key:'indication',placeholder:'indication'},
                    {key:'register_num',placeholder:'登记号'},
                ];

                renderListDataSelf = [
                    {title:'招募状态',queryUrl:'http://qy2.drugsea.cn/c/cde/ct/list/ct_status',key:'ct_status'},
                    {title:'临床阶段',queryUrl:'http://qy2.drugsea.cn/c/cde/ct/list/study_phase',key:'study_phase'},
                    {title:'药品类型',queryUrl:'http://qy2.drugsea.cn/c/cde/ct/list/drug_type',key:'drug_type'},
                    {title:'研究类型',queryUrl:'http://qy2.drugsea.cn/c/cde/ct/list/study_type',key:'study_type'},
                    {title:'受理日期',key:['announce_date','first_subject_in_date'],render:'datepicker'},
                ];

                getlocalItem = 'myScreeningZglcsy';
            }


            return (
                <div className="xh-container-left-inner">
                    {/*<!--侧边栏顶部-->*/}
                    <div className="xh-sidebar-top xh-sidebar-arrow">
                        <a href="javascript:;" className="xh-sidebar-hide">
                            <img src={big_arrow_close} onClick={()=>{clickleftnav({change:'close'})}} />
                        </a>
                    </div>
                    {/*<!--侧边栏列表-->*/}
                    <ul className="xh-sidebar-wrap">
                        <OpenAndClose title="关键词查询" show={true} render={true}>
                            <TheKeyWordQuery renderList={renderList} {...props} key={props.keywordsReset}/>
                        </OpenAndClose>

                        <OpenAndClose title="一键搜索">
                            <TheSelectQuery {...props} key={props.toSelectReset} />
                        </OpenAndClose>

                        <OpenAndClose title="条件筛选">
                            <TheConditionsForScreening {...props} key={props.screeningReset} renderListDataSelf={renderListDataSelf}/>
                        </OpenAndClose>

                        <OpenAndClose title="我的筛选">
                            <TheScreening {...props} key={props.myScreeningReset} getlocalItem={getlocalItem}/>
                        </OpenAndClose>
                    </ul>
                </div>
            )
        }
    },
    'priceadd':(x) => {

        if(!x)return '0';
        let a = x.toString();
        let index = a.indexOf('.');
        let fl;
        if(index>=0){
            fl = a.split('.')[1];
        };
        let b=parseInt(x).toString();
        let len=b.length;
        if(len<=3){return a;}
        let r=len%3;
        return ((r>0?b.slice(0,r)+","+b.slice(r,len).match(/\d{3}/g).join(","):b.slice(r,len).match(/\d{3}/g).join(","))||'0')
            +(index>=0?('.'+fl):'');

    },
    'isJsonEmpty':(data)=> {
      //判断json是否为空
        if(!data) {
            return false;
        }
        let isEmpty = true;
        for(var i in data) {
            if(data[i]) {
                isEmpty = false;
            }
        }
        return isEmpty;
    },
    'YYMMDD':(data) => {
        return changTime(data*1000);
    }
}

const formatdata = (params) => {
    let data = params.data;
    let type = params.type;
    if(formatType[type]) {
        return formatType[type](data);
    }

}


export default formatdata;
