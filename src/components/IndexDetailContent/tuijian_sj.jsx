import './style.css';
import React, { PropTypes , Component } from 'react';
import tj1 from 'public/img/tj1.png';
import structure from 'public/img/structure.jpg';

class tuijian_sj extends Component {

    render() {
        const content = this.props.content && this.props.content[0] || {};
        return (
            <div className="xh-details-show-each">
                <h4>推荐参比制剂</h4>
                <div className="xh-clearfix xh-details-key">
                    <table className="xh-bid-data-table xh-bid-data-table-9-1" width="100%" cellpadding="0" border="0">
                        <thead>
                        <tr>
                            <th>申请号/批准号</th>
                            <th>活性成分</th>
                            <th>商品名</th>
                            <th>剂型</th>
                            <th>规格</th>
                            <th>企业</th>
                            <th>上市日期</th>
                            <th>上市国家</th>
                            <th className="xh-text-left xh-pl-12">推荐理由</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><a href="javascript:;" className="xh-color-666">BLA111111</a></td>
                            <td>adalimumab</td>
                            <td>humira</td>
                            <td>injection</td>
                            <td>10mg</td>
                            <td>pfizer</td>
                            <td className="xh-color-b6">2011-1-1</td>
                            <td>美国</td>
                            <td className="xh-text-left xh-pl-12">原研</td>
                        </tr>
                        <tr>
                            <td><a href="javascript:;" className="xh-color-666">BLA111111</a></td>
                            <td>adalimumab</td>
                            <td>humira</td>
                            <td>injection</td>
                            <td>10mg</td>
                            <td>pfizer</td>
                            <td className="xh-color-b6">2011-1-1</td>
                            <td>美国</td>
                            <td className="xh-text-left xh-pl-12">日本参比制剂</td>
                        </tr>
                        <tr>
                            <td><a href="javascript:;" className="xh-color-666">BLA111111</a></td>
                            <td>adalimumab</td>
                            <td>humira</td>
                            <td>injection</td>
                            <td>10mg</td>
                            <td>pfizer</td>
                            <td className="xh-color-b6">2011-1-1</td>
                            <td>美国</td>
                            <td className="xh-text-left xh-pl-12">原研，美国参比制剂</td>
                        </tr>
                        <tr>
                            <td><a href="javascript:;" className="xh-color-666">BLA111111</a></td>
                            <td>adalimumab</td>
                            <td>humira</td>
                            <td>injection</td>
                            <td>10mg</td>
                            <td>pfizer</td>
                            <td className="xh-color-b6">2011-1-1</td>
                            <td>美国</td>
                            <td className="xh-text-left xh-pl-12">CEDA推荐，企业备案</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )

    }
}


export default tuijian_sj;

tuijian_sj.propTypes = {};