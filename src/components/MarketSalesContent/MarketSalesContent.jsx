import './style.css';
import React, { PropTypes , Component } from 'react';
import classnames from 'classnames';
import {routerRedux} from "dva/router";
import { Table , Pagination } from 'antd';
import Base from './base';
import SaveScreen from './SaveScreen';


import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';

class MarketSalesContent extends Component {

    onChange(params) {
        const payload = {
            offset:params,
            sumBy:this.props.sumBy,
            url:this.props.url
        }

        this.props.renderOnchangeGet(payload);
    }

    gotodetail(payload) {
        this.props.jumpUrl(routerRedux.push({
            pathname:'medicalretrieval/indexdetail',
            query:{
                somequery:'xxxx',
                from:'monitoringandtrackingdetail'
            }
        }))
    }

    render() {
        const show1 = classnames({'xh-container-right-wrap wrap-hidden':(this.props.tagNumber==2),'xh-container-right-wrap':(this.props.tagNumber==1)});
        const show2 = classnames({'xh-container-right-wrap wrap-hidden':(this.props.tagNumber==1),'xh-container-right-wrap':(this.props.tagNumber==2)});
        const props = this.props;
        let columns;
        if(this.props.render == 'ybyy') {
            columns = [{
                title:'药品名称',
                dataIndex:'drug_name',
                key:'drug_name',
                render(data) {
                    return (
                        <span>
                        {data || '/'}
                    </span>
                    )
                }
            },{
                title:'生产企业',
                dataIndex:'drug_name',
                key:'drug_name2',
                render(data) {
                    return (
                        <span>
                        {data || '/'}
                    </span>
                    )
                }
            },{
                title:'年份',
                dataIndex:'drug_name',
                key:'drug_name3',
                render(data) {
                    return (
                        <span>
                        {data || '/'}
                    </span>
                    )
                }
            },{
                title:'销售额',
                dataIndex:'sales_amount',
                key:'sales_amount',
                render(data) {
                    return (
                        <span>
                        {data || '/'}
                    </span>
                    )
                }
            },{
                title:'历年数据图',
                key:'tupian',
                render(data) {
                    return (
                        <a href="javascript:;" className="xh-year-pic"></a>
                    )
                }
            }];
        } else if(this.props.render == 'nbsj') {
            columns = [{
                title:'药品名称',
                dataIndex:'drug_name',
                key:'drug_name',
                render(data) {
                    return (
                        <span>
                        {data || '/'}
                    </span>
                    )
                }
            },{
                title:'生产企业',
                dataIndex:'drug_name',
                key:'drug_name2',
                render(data) {
                    return (
                        <span>
                        {data || '/'}
                    </span>
                    )
                }
            },{
                title:'年份',
                dataIndex:'drug_name',
                key:'drug_name3',
                render(data) {
                    return (
                        <span>
                        {data || '/'}
                    </span>
                    )
                }
            },{
                title:'销售额',
                dataIndex:'sales_sum',
                key:'sales_sum',
                render(data) {
                    return (
                        <span>
                        {data || '/'}
                    </span>
                    )
                }
            },{
                title:'历年数据图',
                key:'tupian',
                render(data) {
                    return (
                        <a href="javascript:;" className="xh-year-pic"></a>
                    )
                }
            }];
        }

        return (
            <div className="MarketSalesContent">
                <div className={show1}>
                    {/*<!--筛选部分-->*/}
                    <div className="xh-clearfix xh-screen-wrap">
                        <SaveScreen {...this.props} />
                    </div>
                    {/*<!--筛选部分-->*/}
                    <div className="xh-clearfix xh-screen-wrap xh-screen-wrap-2">
                        <div className="xh-fl xh-screen-left">
                            {/*<!--筛选条件-->*/}
                            <Base {...this.props} />
                        </div>
                        <div className="xh-fr xh-screen-right">
                            <a href="javascript:;" className="xh-fl xh-btn xh-preservation-btn">导出</a>
                        </div>
                    </div>
                    {/*<!--列表部分-->*/}
                    <div className="xh-content-list-wrap xh-sample-hospital">
                        <Table dataSource={this.props.content} columns={columns} pagination={false}/>
                    </div>
                    {/*<!--分页部分-->*/}
                    <div className="xh-paging">
                        <Pagination defaultCurrent={1} current={this.props.offset || 1} total={this.props.tnum} onChange={(params)=>this.onChange(params)} />
                    </div>
                </div>
                {/*//数据分析部分*/}
                <div className={show2}>
                    <div className="xh-container-right-wrap xh-container-drug-details">
                        {/*<!--每个条目-->*/}
                        <div className="xh-chart-wrap">
                            <div className="xh-clearfix xh-chart-inner">
                                <div className="xh-fl xh-chart-left xh-chart-left-3">
                                </div>
                                <div className="xh-fl xh-chart-right">
                                    <h4 className="xh-chart-right-tit">
                                        <i className="xh-chart-right-tit-icon xh-chart-right-tit-icon-1"></i>
                                        总销售趋势
                                    </h4>
                                    <div>
                                        <img src="../img/tj_5.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xh-chart-wrap">
                            <div className="xh-clearfix xh-chart-inner">
                                <div className="xh-fl xh-chart-left xh-chart-left-2">
                                    <div className="xh-chart-left-inner">
                                        {/*<!--每一个-->*/}
                                        <div className="xh-chart-left-each">
                                            <p>选择时间段</p>
                                            <div className="xh-relative xh-chart-time-ipt">
                                                <input type="text" />
                                                    <i></i>
                                            </div>
                                        </div>
                                        {/*<!--每一个-->*/}
                                        <div className="xh-chart-left-each">
                                            <p>显示排名区间</p>
                                            <div className="xh-relative xh-chart-time-ipt">
                                                <input type="text" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="xh-fl xh-chart-right">
                                    <h4 className="xh-chart-right-tit">
                                        <i className="xh-chart-right-tit-icon xh-chart-right-tit-icon-2"></i>
                                        新增受理号数量排名
                                    </h4>
                                    <ul className="xh-clearfix xh-chart-right-tab">
                                        <li className="xh-fl"><a href="javascript:;" className="active">企业</a></li>
                                        <li className="xh-fl"><a href="javascript:;">药品</a></li>
                                        <li className="xh-fl"><a href="javascript:;">品种</a></li>
                                    </ul>
                                    <div className="xh-chart-ranking">
                                        {/*<!--每一个-->*/}
                                        <ul className="xh-clearfix">
                                            <li></li>
                                            <li></li>
                                            <li>受理号数量</li>
                                            <li>排名</li>
                                        </ul>
                                        {/*<!--每一个-->*/}
                                        <ul className="xh-clearfix">
                                            <li>企业1</li>
                                            <li><span style={{width:"100%"}}></span></li>
                                            <li>100</li>
                                            <li>1</li>
                                        </ul>
                                        {/*<!--每一个-->*/}
                                        <ul className="xh-clearfix">
                                            <li>企业1</li>
                                            <li><span style={{width:"90%"}}></span></li>
                                            <li>90</li>
                                            <li>2</li>
                                        </ul>
                                        {/*<!--每一个-->*/}
                                        <ul className="xh-clearfix">
                                            <li>企业1</li>
                                            <li><span style={{width:"80%"}}></span></li>
                                            <li>80</li>
                                            <li>3</li>
                                        </ul>
                                        {/*<!--每一个-->*/}
                                        <ul className="xh-clearfix">
                                            <li>品种1</li>
                                            <li><span style={{width:"70%"}}></span></li>
                                            <li>70</li>
                                            <li>4</li>
                                        </ul>
                                        {/*<!--每一个-->*/}
                                        <ul className="xh-clearfix">
                                            <li>品种1</li>
                                            <li><span style={{width:"60%"}}></span></li>
                                            <li>60</li>
                                            <li>5</li>
                                        </ul>
                                        {/*<!--每一个-->*/}
                                        <ul className="xh-clearfix">
                                            <li>品种1</li>
                                            <li><span style={{width:"55%"}}></span></li>
                                            <li>55</li>
                                            <li>6</li>
                                        </ul>
                                        {/*<!--每一个-->*/}
                                        <ul className="xh-clearfix">
                                            <li>品种1</li>
                                            <li><span style={{width:"50%"}}></span></li>
                                            <li>50</li>
                                            <li>7</li>
                                        </ul>
                                        {/*<!--每一个-->*/}
                                        <ul className="xh-clearfix">
                                            <li>品种1</li>
                                            <li><span style={{width:"56%"}}></span></li>
                                            <li>56</li>
                                            <li>8</li>
                                        </ul>
                                        {/*<!--每一个-->*/}
                                        <ul className="xh-clearfix">
                                            <li>品种1</li>
                                            <li><span style={{width:"40%"}}></span></li>
                                            <li>40</li>
                                            <li>9</li>
                                        </ul>
                                        {/*<!--每一个-->*/}
                                        <ul className="xh-clearfix">
                                            <li>品种1</li>
                                            <li><span style={{width:"35%"}}></span></li>
                                            <li>35</li>
                                            <li>10</li>
                                        </ul>
                                        {/*<!--每一个-->*/}
                                        <ul className="xh-clearfix">
                                            <li>品种1</li>
                                            <li><span style={{width:"30%"}}></span></li>
                                            <li>30</li>
                                            <li>11</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}


export default MarketSalesContent;

MarketSalesContent.propTypes = {};
