import './style.css';
import React, { PropTypes , Component } from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'dva/router';

import tj1 from 'public/img/tj1.png';
import structure from 'public/img/structure.jpg';

import Drug_name from './drug_name';
import Key_message from './key_message';
import Piwen_message from './piwen_message';
import Active_ingredient from './active_ingredient';
import Newzhongbiao_message from './newzhongbiao_message';
import Clinical_trials from './clinical_trials';
import Instructions from './instructions';
import Agent_message from './agent_message';
import Key_message2 from './key_message2';
import Tuijian_sj from './tuijian_sj';
import Base_message from './base_message';

class ThelisteddrugsdetailContent extends Component {

    render() {
        const content = this.props.content;
        const from = this.props.from;
        const render = this.props.render;
        if(from == 'thelisteddrugsdetail') {
            if(render == 'zgss') {
                return (
                    <div className="drugsContent">

                        <div className="mt-ls">
                            <Breadcrumb>
                                <Breadcrumb.Item>
                                    <Link to={{pathname:'/medicalretrieval/thelisteddrugs',query:{"thelisteddrugsText":"中国上市","render":'zgss',backfrom:'detail'}}}>中国上市列表页</Link>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    中国上市详情页
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </div>


                        <div className="xh-container-right-wrap xh-container-drug-details">
                            <Drug_name {...this.props} />
                            <Key_message {...this.props} />
                            <Piwen_message {...this.props} />
                            <Active_ingredient {...this.props} />
                            <Newzhongbiao_message {...this.props} />
                            <Clinical_trials {...this.props} />
                            <Instructions {...this.props} />
                            <Agent_message {...this.props} />
                            <Key_message2 {...this.props} />
                            <Tuijian_sj {...this.props} />
                        </div>
                    </div>
                )
            } else if(render == 'mgss') {
                return (
                    <div className="drugsContent">
                        <div className="mt-ls">
                            <Breadcrumb>
                                <Breadcrumb.Item>
                                    <Link to={{pathname:'/medicalretrieval/thelisteddrugs',query:{"thelisteddrugsText":"美国上市","render":'mgss',backfrom:'detail'}}}>中国上市列表页</Link>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    美国上市详情页
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        <div className="xh-container-right-wrap xh-container-drug-details">
                            <Base_message {...this.props} />
                            <Newzhongbiao_message {...this.props} id="zhongbiao"/>
                            <Active_ingredient {...this.props} />
                            <Newzhongbiao_message {...this.props} id="zlxx"/>
                            <Instructions {...this.props} />
                        </div>
                    </div>
                )
            } else if(render == 'omss') {
                return (
                    <div className="drugsContent">
                        <div className="mt-ls">
                            <Breadcrumb>
                                <Breadcrumb.Item>
                                    <Link to={{pathname:'/medicalretrieval/thelisteddrugs',query:{"thelisteddrugsText":"欧盟上市","render":'omss',backfrom:'detail'}}}>中国上市列表页</Link>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    欧盟上市详情页
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        <div className="xh-container-right-wrap xh-container-drug-details">
                            <Base_message {...this.props} />
                            <Active_ingredient {...this.props} />
                            <Instructions {...this.props} />
                        </div>
                    </div>
                )
            } else if(render == 'rbss') {
                return null;
            }

        }else {
            return null;
        }


    }
}


export default ThelisteddrugsdetailContent;

ThelisteddrugsdetailContent.propTypes = {};
