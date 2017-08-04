import './style.css';
import React, { PropTypes , Component } from 'react';
import tj1 from 'public/img/tj1.png';
import structure from 'public/img/structure.jpg';

class base_message extends Component {

    render() {
        const content = this.props.content && this.props.content[0] || {};
        return (
            <div className="xh-details-show-each">
                <h4>信息基本</h4>
                <div className="xh-clearfix xh-details-key">
                    <div className="xh-details-dl">
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
                            <dt>申请类型：</dt>
                            <dd></dd>
                        </dl>
                        <dl>
                            <dt>申请企业：</dt>
                            <dd></dd>
                        </dl>
                        <dl>
                            <dt>市场状态：</dt>
                            <dd>RX</dd>
                        </dl>
                        <dl>
                            <dt>优先审评分类/孤儿药：</dt>
                            <dd></dd>
                        </dl>
                        <dl>
                            <dt>是否参比制剂：</dt>
                            <dd></dd>
                        </dl>
                    </div>
                    <div className="xh-details-dl">
                        <dl>
                            <dt>成分：</dt>
                            <dd></dd>
                        </dl>
                        <dl>
                            <dt>给药途经：</dt>
                            <dd></dd>
                        </dl>
                        <dl>
                            <dt>批准日期：</dt>
                            <dd></dd>
                        </dl>
                        <dl>
                            <dt>申请号：</dt>
                            <dd></dd>
                        </dl>
                        <dl>
                            <dt>持有人：</dt>
                            <dd></dd>
                        </dl>
                        <dl>
                            <dt>化学类型：</dt>
                            <dd></dd>
                        </dl>
                        <dl>
                            <dt>等效代码：</dt>
                            <dd></dd>
                        </dl>
                        <dl>
                            <dt>参比标准：</dt>
                            <dd></dd>
                        </dl>
                    </div>
                </div>
            </div>
        )
    }
}


export default base_message;

base_message.propTypes = {};
