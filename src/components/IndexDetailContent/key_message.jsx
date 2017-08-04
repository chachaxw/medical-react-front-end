import './style.css';
import React, { PropTypes , Component } from 'react';
import tj1 from 'public/img/tj1.png';
import structure from 'public/img/structure.jpg';

class drug_name extends Component {

    render() {
        const content = this.props.content && this.props.content[0] || {};
        return (
            <div className="xh-details-show-each">
                <h4>关键信息</h4>
                <div className="xh-details-key">
                    <ul className="xh-clearfix xh-relative">
                        <li className="xh-details-key-li">
                            <a href="javascript:;" className="xh-blue">国家医保（ 乙 ）</a>
                            {/*<!--弹框  已隐藏-->*/}
                            <div className="xh-details-key-li-bomb-box">
                                <table width="100%" cellpadding="0" border="0">
                                    <thead>
                                    <tr>
                                        <th>地区</th>
                                        <th>成分</th>
                                        <th>剂型</th>
                                        <th>类型</th>
                                        <th>备注</th>
                                        <th>编号</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {/*<!--每一个tr-->*/}
                                    <tr>
                                        <td>国家</td>
                                        <td>奥美拉唑</td>
                                        <td>口服常释剂</td>
                                        <td>乙类</td>
                                        <td>限二</td>
                                        <td>编号1111</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <i className="xh-details-key-li-bomb-box-close"></i>
                            </div>
                        </li>
                        <li className="xh-details-key-li">
                            <a href="javascript:;" className="xh-blue">增补基药</a>
                            {/*<!--弹框  已隐藏-->*/}
                            <div className="xh-details-key-li-bomb-box xh-details-key-li-bomb-box-nth-2">
                                <table width="100%" cellpadding="0" border="0">
                                    <thead>
                                    <tr>
                                        <th>地区</th>
                                        <th>成分</th>
                                        <th>剂型</th>
                                        <th>类型</th>
                                        <th>备注</th>
                                        <th>编号</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {/*<!--每一个tr-->*/}
                                    <tr>
                                        <td>国家</td>
                                        <td>奥美拉唑</td>
                                        <td>口服常释剂</td>
                                        <td>乙类</td>
                                        <td>限二</td>
                                        <td>编号1111</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <i className="xh-details-key-li-bomb-box-close"></i>
                            </div>
                        </li>
                        <li>低药品目录</li>
                        <li>欧美认证</li>
                        <li>抗生素管理：限制</li>
                    </ul>
                    <ul className="xh-clearfix">
                        <li>已通过一致性评</li>
                        <li>OTC</li>
                        <li>精神</li>
                        <li>麻醉</li>
                        <li>放射</li>
                        <li>首仿</li>
                        <li>中药保护</li>
                    </ul>
                </div>
            </div>
        )

    }
}


export default drug_name;

drug_name.propTypes = {};