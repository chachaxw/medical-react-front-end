import './style.css';
import React, { PropTypes , Component } from 'react';
import tj1 from 'public/img/tj1.png';
import structure from 'public/img/structure.jpg';

class agent_message extends Component {

    render() {
        const content = this.props.content;
        return (
            <div className="xh-details-show-each" id="agent_message">
                <h4>招商代理信息</h4>
                <div className="xh-clearfix xh-details-key">
                    <table className="xh-bid-data-table" width="100%" cellpadding="0" border="0">
                        <thead>
                        <tr>
                            <th>地区</th>
                            <th>代理企业</th>
                            <th>联系人</th>
                            <th>联系电话</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>全国</td>
                            <td>康哲药业</td>
                            <td>王总</td>
                            <td>010-11111111</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )

    }
}


export default agent_message;

agent_message.propTypes = {};