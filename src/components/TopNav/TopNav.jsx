import React, {PropTypes, Component} from 'react';
import formatdata from "formatdata";
import './style.css';
import { Link } from "dva/router";
import logo from 'public/img/logo.png';
export default class TopNav extends Component {


    render() {
        console.log(this.props.navactive,'navactive');
        return (
            <div className="navwrap">
                <div className="xh-clearfix xh-nav-wrap">
                    {/*<!--左侧logo和导航-->*/}
                    <div className="xh-fl xh-nav">
                        {/*<!--logo-->*/}
                        <div className="xh-fl xh-logo">
                            <a href="javascript:;">
                                <img src={logo} />
                            </a>
                        </div>
                        {/*<!--导航菜单-->*/}
                        <ul className="xh-fl xh-nav-menu">
                            <li className={this.props.navactive == 'index'?"xh-nav-each active":'xh-nav-each'}>
                                <Link to="/medicalretrieval/index">首页</Link>
                            </li>
                            <li className={this.props.navactive == 'monitoringandtracking'?"xh-nav-each active":'xh-nav-each'}>
                                <Link to="/medicalretrieval/monitoringandtracking">监测追踪</Link>
                            </li>
                            <li className={this.props.navactive == 'thelisteddrugs'?"xh-nav-each active":'xh-nav-each'} onClick={()=>{const ls1 = this.refs.ls1;ls1.style.display = 'none';}} onMouseOver={()=>{const ls1 = this.refs.ls1;ls1.style.display = 'block';}} onMouseLeave={()=>{const ls1 = this.refs.ls1;ls1.style.display = 'none';}}>
                                <a href="javascript:;" className="xh-nav-menu-arrow" >{this.props.thelisteddrugsText || '上市药品'}</a>
                                {/*<!--下拉菜单-->*/}
                                <ul className="xh-nav-drop-down" ref="ls1">
                                    <li>
                                        <Link to={{pathname:'/medicalretrieval/thelisteddrugs',query:{"thelisteddrugsText":"中国上市","render":'zgss'}}}>中国上市</Link>
                                    </li>
                                    <li>
                                        <Link to={{pathname:'/medicalretrieval/thelisteddrugs',query:{"thelisteddrugsText":"欧盟上市","render":'omss'}}}>欧盟上市</Link>
                                    </li>
                                    <li>
                                        <Link to={{pathname:'/medicalretrieval/thelisteddrugs',query:{"thelisteddrugsText":"美国上市","render":'mgss'}}}>美国上市</Link>
                                    </li>
                                    <li>
                                        <Link to={{pathname:'/medicalretrieval/thelisteddrugs',query:{"thelisteddrugsText":"日本上市","render":'rbss'}}}>日本上市</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className={this.props.navactive == 'registeredtoaccept'?"xh-nav-each active":'xh-nav-each'} onClick={()=>{const ls2 = this.refs.ls2;ls2.style.display = 'none';}} onMouseOver={()=>{const ls2 = this.refs.ls2;ls2.style.display = 'block';}} onMouseLeave={()=>{const ls2 = this.refs.ls2;ls2.style.display = 'none';}}>
                                <a href="javascript:;" className="xh-nav-menu-arrow">{this.props.registeredtoacceptText || '国内注册受理'}</a>
                                {/*<!--下拉菜单-->*/}
                                <ul className="xh-nav-drop-down" ref="ls2">
                                    <li>
                                        <Link to={{pathname:'/medicalretrieval/registeredtoaccept',query:{"registeredtoacceptText":"国内注册受理",render:'gnzcss'}}}>国内注册受理</Link>
                                    </li>
                                    <li>
                                        <Link to={{pathname:'/medicalretrieval/RegisteredtoacceptdetailStatistical',query:{"registeredtoacceptText":"注册受理统计",render:'zcsltj'}}}>注册受理统计</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className={this.props.navactive == 'marketsales'?"xh-nav-each active":'xh-nav-each'} onClick={()=>{const ls3 = this.refs.ls3;ls3.style.display = 'none';}} onMouseOver={()=>{const ls3 = this.refs.ls3;ls3.style.display = 'block';}} onMouseLeave={()=>{const ls3 = this.refs.ls3;ls3.style.display = 'none';}}>
                                <a href="javascript:;" className="xh-nav-menu-arrow">{this.props.marketsalesText || '市场销售'}</a>
                                {/*<!--下拉菜单-->*/}
                                <ul className="xh-nav-drop-down" ref="ls3">
                                    <li>
                                        <Link to={{pathname:'/medicalretrieval/marketsales',query:{"marketsalesText":"样本医院","render":'ybyy'}}}>样本医院</Link>
                                    </li>
                                    <li>
                                        <Link to={{pathname:'/medicalretrieval/marketsales',query:{"marketsalesText":"年报数据","render":'nbsj'}}}>年报数据</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className={this.props.navactive == 'more'?"xh-nav-each active":'xh-nav-each'} onClick={()=>{const ls4 = this.refs.ls4;ls4.style.display = 'none';}} onMouseOver={()=>{const ls4 = this.refs.ls4;ls4.style.display = 'block';}} onMouseLeave={()=>{const ls4 = this.refs.ls4;ls4.style.display = 'none';}}>
                                <a href="javascript:;" className="xh-nav-menu-arrow" >{this.props.moreText || '更多'}</a>
                                {/*<!--下拉菜单-->*/}
                                <ul className="xh-nav-drop-down xh-nav-drop-down-sp xh-nav-drop-down-sp-li" ref="ls4">

                                    <li>
                                        <Link to={{pathname:'/medicalretrieval/clinicaltrials',query:{"moreText":"中国临床","render":'zglcsy'}}}>中国临床</Link>
                                    </li>

                                    <li>
                                        <Link to={{pathname:'/medicalretrieval/drugbid',query:{"moreText":"药品招标","render":'yyzb'}}}>药品招标</Link>
                                    </li>

                                    <li>
                                        <Link to={{pathname:'/medicalretrieval/medicalInsuranceDirectory',query:{"moreText":"医保目录","render":'ybml'}}}>医保目录</Link>
                                    </li>

                                    <li>
                                        <Link to={{pathname:'/medicalretrieval/instructions',query:{"moreText":"药品说明书","render":'ypsms'}}}>药品说明</Link>
                                    </li>

                                    <li>
                                        <Link to={{pathname:'/medicalretrieval/domesticCompanies',query:{"moreText":"国内企业","render":'gnqy'}}}>国内企业</Link>
                                    </li>

                                    <li>
                                        <Link to={{pathname:'/medicalretrieval/clinicaltrials',query:{"moreText":"全球临床","render":'qqlcsy'}}}>全球临床</Link>
                                    </li>

                                    <li>
                                    </li>

                                    <li>
                                        <Link to={{pathname:'/medicalretrieval/maseDrugTarget',query:{"moreText":"基本药物","render":'jbypml'}}}>基本药物</Link>
                                    </li>

                                    <li>
                                    </li>
                                    <li>
                                    </li>
                                    <li>
                                    </li>
                                    <li>
                                    </li>

                                    <li>
                                        <a href="javascript:;">低价药品</a>
                                    </li>


                                </ul>
                            </li>
                        </ul>
                    </div>
                    {/*<!--右侧元素-->*/}
                    <div className="xh-fr xh-nav-right">
                        <Link to={{pathname:'/selfcenter'}} className={this.props.navactive=='selfcenter'?'activealink':''}>
                            <span>
                                个人中心
                                <i className={this.props.navactive=='selfcenter'?'xh-personal-center-btn-active':'xh-personal-center-btn'}></i>
                            </span>
                        </Link>
                        <a href="javascript:;">
                            帮助
                            <i className="xh-help-btn"></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

TopNav.propTypes = {};
