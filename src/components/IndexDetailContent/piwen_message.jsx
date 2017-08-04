import './style.css';
import React, { PropTypes , Component } from 'react';
import tj1 from 'public/img/tj1.png';
import structure from 'public/img/structure.jpg';

class drug_name extends Component {

    render() {
        const content = this.props.content && this.props.content[0] || {};
        return (
            <div className="xh-details-show-each">
                <h4>批文信息</h4>
                <div className="xh-clearfix xh-details-key">
                    <div className="xh-details-dl">
                        <dl>
                            <dt>药品名称：</dt>
                            <dd></dd>
                        </dl>
                        <dl>
                            <dt>活性成分：</dt>
                            <dd></dd>
                        </dl>
                        <dl>
                            <dt>英文名：</dt>
                            <dd></dd>
                        </dl>
                        <dl>
                            <dt>商品名：</dt>
                            <dd></dd>
                        </dl>
                        <dl>
                            <dt>剂型：</dt>
                            <dd></dd>
                        </dl>
                        <dl>
                            <dt>规格：</dt>
                            <dd></dd>
                        </dl>
                        <dl>
                            <dt>生产企业：</dt>
                            <dd>
                                <a href="javascript:;" className="xh-color-666">江苏恒瑞医药股份有限公司</a>
                            </dd>
                        </dl>
                    </div>
                    <div className="xh-details-dl">
                        <dl>
                            <dt>产品类型：</dt>
                            <dd></dd>
                        </dl>
                        <dl>
                            <dt>批准文号：</dt>
                            <dd>
                                国药准字H11111
                                <span className="xh-relative">
                                    <a href="javascript:;">查看研发历程</a>
                                    {/*<!--弹框  已隐藏-->*/}
                                    <div className="xh-details-key-li-bomb-box xh-details-key-a-bomb-box">
                                        <div className="xh-details-bomb-box-dl">
                                            <dl>
                                                <dt>2016-1-1 文号变更为：</dt>
                                                <dd></dd>
                                            </dl>
                                            <dl>
                                                <dt>2016-1-1 初始文号：</dt>
                                                <dd>111111</dd>
                                            </dl>
                                        </div>
                                        <i className="xh-details-key-li-bomb-box-close"></i>
                                    </div>
                                </span>
                            </dd>
                        </dl>
                        <dl>
                            <dt>批准日期：</dt>
                            <dd></dd>
                        </dl>
                        <dl>
                            <dt>历史批文：</dt>
                            <dd></dd>
                        </dl>
                        <dl>
                            <dt>首次批准日期：</dt>
                            <dd>
                                国药准字H222222
                                <span className="xh-relative">
                                    <a href="javascript:;">查看文号历程</a>
                                    {/*<!--弹框  已隐藏-->*/}
                                    <div className="xh-details-key-li-bomb-box xh-details-key-a-bomb-box">
                                        <div className="xh-details-bomb-box-dl">
                                            <dl>
                                                <dt>2016-1-1 文号变更为：</dt>
                                                <dd></dd>
                                            </dl>
                                            <dl>
                                                <dt>2016-1-1 初始文号：</dt>
                                                <dd>111111</dd>
                                            </dl>
                                        </div>
                                        <i className="xh-details-key-li-bomb-box-close"></i>
                                    </div>
                                </span>
                            </dd>
                        </dl>
                        <dl>
                            <dt>同规格厂家数：</dt>
                            <dd><a href="javascript:;">10</a></dd>
                        </dl>
                        <dl>
                            <dt>同品种厂家数：</dt>
                            <dd><a href="javascript:;">15</a></dd>
                        </dl>
                    </div>
                </div>
            </div>
        )

    }
}


export default drug_name;

drug_name.propTypes = {};