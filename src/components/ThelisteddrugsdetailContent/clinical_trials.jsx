import './style.css';
import React, { PropTypes , Component } from 'react';
import tj1 from 'public/img/tj1.png';
import structure from 'public/img/structure.jpg';

class clinical_trials extends Component {

    render() {
        const content = this.props.content;
        return (
            <div className="xh-details-show-each" id="clinical_trials">
                <h4>相关临床试验</h4>
                <div className="xh-clearfix xh-details-key">
                    <table className="xh-bid-data-table" width="100%" cellpadding="0" border="0">
                        <thead>
                        <tr>
                            <th>标题</th>
                            <th>申办方</th>
                            <th>状态</th>
                            <th>登记日期</th>
                            <th>登记号</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <a href="javascript:;" className="xh-color-666">瑞格列奈二甲双胍片人体生物等效性	研究</a>
                            </td>
                            <td>江苏哼瑞医药股份有限公司</td>
                            <td>招募中</td>
                            <td className="xh-color-b6">2011-1-1</td>
                            <td className="xh-color-b6">NTC111111</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="javascript:;" className="xh-color-666">瑞格列奈二甲双胍片人体生物等效性	研究</a>
                            </td>
                            <td>江苏哼瑞医药股份有限公司</td>
                            <td>招募中</td>
                            <td className="xh-color-b6">2011-1-1</td>
                            <td className="xh-color-b6">NTC111111</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )

    }
}


export default clinical_trials;

clinical_trials.propTypes = {};