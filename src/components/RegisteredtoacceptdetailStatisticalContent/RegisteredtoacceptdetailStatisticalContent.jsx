import './style.css';
import React, { PropTypes , Component } from 'react';
import tj_4 from 'public/img/tj_4.png';
import tj_3 from 'public/img/tj_3.png';

class RegisteredtoacceptdetailStatisticalContent extends Component {

    render() {
        return (
            <div className="RegisteredtoacceptdetailStatisticalContent">
                <div className="xh-container-right-wrap xh-container-drug-details">
                    <div className="xh-screen-wrap">
                        <div className="xh-clearfix">
                            <div className="xh-fl xh-relative">
                                <input type="text" placeholder="查找品种" className="xh-chart-tit-ipt" />
                                    <i class="xh-chart-icon"></i>
                            </div>
                            <h1 className="xh-fl xh-details-tit">硫酸氢氯呲格雷片</h1>
                        </div>
                    </div>
                    <div className="xh-chart-wrap">
                        <div className="xh-clearfix xh-chart-inner">
                            <div className="xh-fl xh-chart-left xh-chart-left-3">
                                <div className="xh-chart-left-inner">
                                    <div className="xh-chart-left-each">
                                        <p>选择时间段</p>
                                        <div className="xh-relative xh-chart-time-ipt">
                                            <input type="text" />
                                                <i></i>
                                        </div>
                                    </div>
                                    <div className="xh-chart-left-each">
                                        <p>日期格式</p>
                                        <ul className="xh-clearfix">
                                            <li className="xh-fl"><a href="javascript:;" className="active">按年份</a></li>
                                            <li className="xh-fl"><a href="javascript:;">按月份</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="xh-fl xh-chart-right">
                                <h4 className="xh-chart-right-tit">
                                    <i class="xh-chart-right-tit-icon xh-chart-right-tit-icon-4"></i>
                                    申报趋势分析
                                </h4>
                                <div>
                                    <img src={tj_3} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xh-chart-wrap">
                        <div className="xh-clearfix xh-chart-inner">
                            <div className="xh-fl xh-chart-left xh-chart-left-4">
                                <div className="xh-chart-left-inner">
                                    <div className="xh-chart-left-each">
                                        <p>选择时间段</p>
                                        <div className="xh-relative xh-chart-time-ipt">
                                            <input type="text" />
                                                <i></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xh-fl xh-chart-right">
                                <h4 className="xh-chart-right-tit">
                                    <i class="xh-chart-right-tit-icon xh-chart-right-tit-icon-3"></i>
                                    新增受理号分布
                                </h4>
                                <ul className="xh-clearfix xh-chart-right-tab">
                                    <li className="xh-fl"><a href="javascript:;" className="active">申请类型分布</a></li>
                                    <li className="xh-fl"><a href="javascript:;">申报类型分布</a></li>
                                </ul>
                                <div>
                                    <img src={tj_4} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default RegisteredtoacceptdetailStatisticalContent;

RegisteredtoacceptdetailStatisticalContent.propTypes = {};
