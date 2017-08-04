import './style.css';
import React, { PropTypes , Component } from 'react';
import tj1 from 'public/img/tj1.png';
import structure from 'public/img/structure.jpg';

class newzhongbiao_message extends Component {

    render() {
        const content = this.props.content;
        return (
            <div className="xh-details-show-each" id={this.props.id || 'newzhongbiao_message'}>
                <h4 className="xh-relative">
                    最新中标数据
                    <a href="javascript:;">查看全部&gt;</a>
                </h4>
                <div className="xh-clearfix xh-details-key">
                    <table className="xh-bid-data-table" width="100%" cellpadding="0" border="0">
                        <thead>
                        <tr>
                            <th>药品名称</th>
                            <th>规格</th>
                            <th>转换比</th>
                            <th>包装</th>
                            <th>企业</th>
                            <th>地区</th>
                            <th>价格</th>
                            <th>日期</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>阿达木单抗注射液</td>
                            <td>10mg</td>
                            <td>1</td>
                            <td>支</td>
                            <td>艾伯维</td>
                            <td>北京</td>
                            <td>100.00</td>
                            <td>2011-1-1</td>
                        </tr>
                        <tr>
                            <td>阿达木单抗注射液</td>
                            <td>10mg</td>
                            <td>1</td>
                            <td>支</td>
                            <td>艾伯维</td>
                            <td>北京</td>
                            <td>100.00</td>
                            <td>2011-1-1</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )

    }
}


export default newzhongbiao_message;

newzhongbiao_message.propTypes = {};
