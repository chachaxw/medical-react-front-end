import React, { PropTypes , Component } from 'react';
import OpenAndClose from 'components/openAndClose/openAndClose';
class Xssypjk extends Component {

    render() {
        const xssypjk = this.props.xssypjk;

        return (
            <div className="MonitoringAndTrackingContent">
                <div className="xh-container-right">
                    <div className="xh-container-right-wrap">
                        {/*<!--时间部分-->*/}
                        <div className="xh-time-wrap">
                            <h2>今日有3条最新内容</h2>
                            <p>2017年1月15日 星期六</p>
                        </div>
                        {/*<!--筛选部分-->*/}
                        <div className="xh-clearfix xh-screen-wrap">
                            <div className="xh-fl xh-screen-left">
                                {/*<!--模拟美化select表单部分-->*/}
                                <div className="xh-fl xh-select-wrap xh-select-wrap-small">
                                    <div className="xh-select xh-select-small">最近1周</div>
                                    <ul className="xh-box-s">
                                        <li val="0">最近1周</li>
                                        <li val="1">请选择</li>
                                        <li val="2">请选择</li>
                                        <li val="3">请选择</li>
                                    </ul>
                                    {/*<!--获取选择的值-->*/}
                                    <input type="hidden" name="" value="" id="" />
                                </div>
                            </div>
                            <div className="xh-fr xh-screen-right xh-country-group">
                                <span>中国</span>
                                <span>美国</span>
                                <span>欧盟</span>
                                <span className="xh-blue">日本</span>
                            </div>
                        </div>
                        {/*<!--列表部分-->*/}
                        <div className="xh-content-list-wrap xh-new-drug-6-1">
                            {/*<!--列表头部-->*/}
                            <div className="xh-content-list-heard xh-proportion xh-japan-new_drug">
                                <span>批准文号</span>
                                <span className="xh-text-left">药品名称</span>
                                <span>规格</span>
                                <span>生产企业</span>
                                <span>关键信息</span>
                                <span>批准日期</span>
                            </div>
                            {/*<!--列表内容-->*/}
                            <ul className="xh-content-list-cont">
                                <li className="xh-proportion xh-japan-new_drug" onClick={()=>this.gotodetail()}>
                                    <span>国药准字H111111</span>
                                    <span className="xh-text-left">硫酸氢氯呲格雷片<br/>Clopidoqre</span>
                                    <span>5mg</span>
                                    <span>prfizer</span>
                                    <span>首仿，原研专利</span>
                                    <span className="xh-color-b6 xh-absolute-new">2011-1-1</span>
                                </li>
                                <li className="xh-proportion xh-japan-new_drug">
                                    <span>国药准字H111111</span>
                                    <span className="xh-text-left">硫酸氢氯呲格雷片<br/>Clopidoqre</span>
                                    <span>5mg</span>
                                    <span>prfizer</span>
                                    <span>首仿，原研专利</span>
                                    <span className="xh-color-b6 xh-absolute-new">2011-1-1</span>
                                </li>
                                <li className="xh-proportion xh-japan-new_drug">
                                    <span>国药准字H111111</span>
                                    <span className="xh-text-left">硫酸氢氯呲格雷片<br/>Clopidoqre</span>
                                    <span>5mg</span>
                                    <span>prfizer</span>
                                    <span>首仿，原研专利</span>
                                    <span className="xh-color-b6 xh-absolute-new">2011-1-1</span>
                                </li>
                                <li className="xh-proportion xh-japan-new_drug">
                                    <span>国药准字H111111</span>
                                    <span className="xh-text-left">硫酸氢氯呲格雷片<br/>Clopidoqre</span>
                                    <span>5mg</span>
                                    <span>prfizer</span>
                                    <span>首仿，原研专利</span>
                                    <span className="xh-color-b6">2011-1-1</span>
                                </li>
                                <li className="xh-proportion xh-japan-new_drug">
                                    <span>国药准字H111111</span>
                                    <span className="xh-text-left">硫酸氢氯呲格雷片<br/>Clopidoqre</span>
                                    <span>5mg</span>
                                    <span>prfizer</span>
                                    <span>首仿，原研专利</span>
                                    <span className="xh-color-b6">2011-1-1</span>
                                </li>
                                <li className="xh-proportion xh-japan-new_drug">
                                    <span>国药准字H111111</span>
                                    <span className="xh-text-left">硫酸氢氯呲格雷片<br/>Clopidoqre</span>
                                    <span>5mg</span>
                                    <span>prfizer</span>
                                    <span>首仿，原研专利</span>
                                    <span className="xh-color-b6">2011-1-1</span>
                                </li>
                                <li className="xh-proportion xh-japan-new_drug">
                                    <span>国药准字H111111</span>
                                    <span className="xh-text-left">硫酸氢氯呲格雷片<br/>Clopidoqre</span>
                                    <span>5mg</span>
                                    <span>prfizer</span><span>首仿，原研专利</span><span className="xh-color-b6">2011-1-1</span>
                                </li>
                                <li className="xh-proportion xh-japan-new_drug">
                                    <span>国药准字H111111</span>
                                    <span className="xh-text-left">硫酸氢氯呲格雷片<br/>Clopidoqre</span>
                                    <span>5mg</span>
                                    <span>prfizer</span>
                                    <span>首仿，原研专利</span>
                                    <span className="xh-color-b6">2011-1-1</span>
                                </li>
                            </ul>
                            {/*<!--分页部分-->*/}
                            <div className="xh-paging">
                                <a href="javascript:;" className="xh-paging-active">1</a>
                                <a href="javascript:;">2</a>
                                <a href="javascript:;">3</a>
                                <a href="javascript:;">4</a>
                                <a href="javascript:;">5</a>
                                <a href="javascript:;">...</a>
                                <a href="javascript:;">33</a>
                                <a href="javascript:;" className="xh-paging-next">&nbsp;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }

}


export default Xssypjk;

Xssypjk.propTypes = {};