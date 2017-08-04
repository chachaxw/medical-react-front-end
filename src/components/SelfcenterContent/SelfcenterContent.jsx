import './style.css';
import React, { PropTypes , Component } from 'react';
import personal_center_icon from 'public/img/personal_center_icon.png';
import big_arrow_close from 'public/img/big_arrow_close.png';
import useful from 'useful';
import Zzxt from './Zzxt';
import Zhsz from './Zhsz';
import Gmzf from './Gmzf';

class SelfcenterContent extends Component {

    render() {

        const DsUserInfo = useful.getCookie('DsUserInfo') || '';
        const objectDsUserInfo = DsUserInfo && JSON.parse(DsUserInfo) || {};

        let bodyin;
        if(this.props.tagin == 'jcxt') {
            bodyin = (<div>暂无</div>);
        } else if(this.props.tagin == 'zzxt') {
            bodyin = (<Zzxt {...this.props} objectDsUserInfo={objectDsUserInfo} />);
        } else if(this.props.tagin == 'zhsz') {
            bodyin = (<Zhsz {...this.props} objectDsUserInfo={objectDsUserInfo} />);
        } else if(this.props.tagin == 'gmzf') {
            bodyin = (<Gmzf {...this.props} objectDsUserInfo={objectDsUserInfo} />);
        }

        return (
            <div className="SelfcenterContent">
                {/*<!--banner部分-->*/}
                <div className="xh-personal-center">
                    <div className="xh-personal-center-inner">
                        <ul className="xh-text-center">
                            <li>
                                <img src={objectDsUserInfo.headimgurl} />
                            </li>
                            <li>{objectDsUserInfo.usrename}</li>
                            <li>{objectDsUserInfo.group_title}</li>
                            <li>{objectDsUserInfo.uid}</li>
                        </ul>
                    </div>
                </div>
                {/*<!--内容部分-->*/}
                <div className="xh-container">
                    {/*<!--左侧-->*/}
                    <div className="xh-container-left">
                        <div className="xh-container-left-inner">
                            {/*<!--侧边栏顶部-->*/}
                            <div className="xh-sidebar-top xh-sidebar-arrow">
                                <a href="javascript:;" className="xh-sidebar-hide">
                                    <img src={big_arrow_close} />
                                </a>
                            </div>
                            {/*<!--侧边栏列表-->*/}
                            <div className="xh-sidebar-drug-details">
                                <ul className="xh-mt-24">
                                    <li>
                                        <a href="javascript:;" className={this.props.tagin=='jcxt'?"active":""} onClick={()=>{
                                            this.props.updateState({tagin:'jcxt'});
                                        }}>监测系统管理</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" className={this.props.tagin=='zzxt'?"active":""} onClick={()=>{
                                            this.props.updateState({tagin:'zzxt'});
                                            this.props.zzxtFn({
                                                type:'ypzz',
                                                queryData:{
                                                    offset:0
                                                }
                                            });
                                        }}>追踪系统管理</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" className={this.props.tagin=='zhsz'?"active":""} onClick={()=>{this.props.updateState({tagin:'zhsz'})}}>帐号设置</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" className={this.props.tagin=='gmzf'?"active":""} onClick={()=>{this.props.updateState({tagin:'gmzf'})}}>购买支付</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/*<!--右侧-->*/}
                    <div className="xh-container-right">

                        {bodyin}

                    </div>
                </div>
            </div>
        )

    }
}


export default SelfcenterContent;

SelfcenterContent.propTypes = {};
