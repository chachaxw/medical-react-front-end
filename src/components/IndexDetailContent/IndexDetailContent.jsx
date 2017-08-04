import './style.css';
import React, { PropTypes , Component } from 'react';

import tj1 from 'public/img/tj1.png';
import structure from 'public/img/structure.jpg';

import Drug_name from './drug_name';
import Key_message from './key_message';
import Piwen_message from './piwen_message';
import Active_ingredient from './active_ingredient';
import Newzhongbiao_message from './newzhongbiao_message';
import Clinical_trials from './clinical_trials';
import Instructions from './instructions';
import Agent_message from './agent_message';
import Key_message2 from './key_message2';
import Tuijian_sj from './tuijian_sj';
import Base_message from './base_message';

class IndexDetailContent extends Component {

    render() {
        const content = this.props.content && this.props.content[0] || {};
        const from = this.props.from;
        const render = this.props.render;

        return (
            <div className="IndexSearchContent">
                <div className="xh-container-right-wrap xh-container-drug-details">
                    {/*<!--详情部分-->*/}
                    <div className="xh-details-show">
                        <Drug_name {...this.props} />
                        {/*<!--每个条目-->*/}
                        <div className="xh-details-show-each">
                            <h4 className="xh-relative">药物简介</h4>
                            <div className="xh-clearfix xh-details-key">
                                <p className="xh-component xh-introduce-p">{content.brief_introduction || '暂无'}</p>
                            </div>
                        </div>
                        {/*<!--每个条目-->*/}
                        <div className="xh-details-show-each">
                            <h4>信息基本</h4>
                            <div className="xh-clearfix xh-details-key">
                                <div className="xh-details-dl">
                                    <dl>
                                        <dt>药品名称：</dt>
                                        <dd>{content.drug_name || '/'}</dd>
                                    </dl>
                                    <dl>
                                        <dt>其他名称：</dt>
                                        <dd>{content.other_names || '/'}</dd>
                                    </dl>
                                    <dl>
                                        <dt>活性成份：</dt>
                                        <dd>{content.ingredients || '/'}</dd>
                                    </dl>
                                    <dl>
                                        <dt>原研企业：</dt>
                                        <dd>{content.inovator || '/'}</dd>
                                    </dl>
                                    <dl>
                                        <dt>靶点：</dt>
                                        <dd>{content.target || '/'}</dd>
                                    </dl>
                                </div>
                                <div className="xh-details-dl">
                                    <dl>
                                        <dt>最高研发状态：</dt>
                                        <dd>{content.rd_status || '/'}</dd>
                                    </dl>
                                    <dl>
                                        <dt>最早上市日期：</dt>
                                        <dd>{content.year || '/'}</dd>
                                    </dl>
                                    <dl>
                                        <dt>适应症：</dt>
                                        <dd>{content.indication || '/'}</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        {/*<!--每个条目-->*/}
                        <div className="xh-details-show-each">
                            <h4>化学信息/生物信息</h4>
                            <div className="xh-clearfix xh-details-key xh-relative">
                                <div className="xh-details-dl xh-width-1-1">
                                    <dl>
                                        <dt>ATC号：</dt>
                                        <dd></dd>
                                    </dl>
                                    <dl>
                                        <dt>分子式：</dt>
                                        <dd></dd>
                                    </dl>
                                    <dl>
                                        <dt>分子量：</dt>
                                        <dd></dd>
                                    </dl>
                                    <dl>
                                        <dt>CAS号：</dt>
                                        <dd></dd>
                                    </dl>
                                    <dl>
                                        <dt>研发代码：</dt>
                                        <dd></dd>
                                    </dl>
                                    <dl>
                                        <dt>EphMRA Codes：</dt>
                                        <dd></dd>
                                    </dl>
                                </div>

                                <div className="xh-structure-wrap">
                                    <img src={structure} />
                                    <p>结构式</p>
                                </div>
                            </div>
                        </div>
                        {/*<!--每个条目-->*/}
                        <div className="xh-details-show-each">
                            <h4>中国上市</h4>
                            <div className="xh-clearfix xh-details-key">
                                <table className="xh-bid-data-table xh-china-listing-table" width="100%" cellpadding="0" border="0">
                                    <thead>
                                    <tr>
                                        <th>药品名称</th>
                                        <th>上市批文数量</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {/*<!--每一个tr-->*/}
                                    <tr>
                                        <td>奥美拉唑肠溶胶囊</td>
                                        <td className="xh-blue">50</td>
                                    </tr>
                                    {/*<!--每一个tr-->*/}
                                    <tr>
                                        <td>奥美拉唑肠溶片</td>
                                        <td className="xh-blue">50</td>
                                    </tr>
                                    {/*<!--每一个tr-->*/}
                                    <tr>
                                        <td>注射用奥美拉唑钠</td>
                                        <td className="xh-blue">50</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/*<!--每个条目-->*/}
                        <div className="xh-details-show-each">
                            <h4>欧美上市</h4>
                            <div className="xh-clearfix xh-details-key">
                                <table className="xh-bid-data-table xh-china-listing-table xh-ea-listing-table" width="100%" cellpadding="0" border="0">
                                    <thead>
                                    <tr>
                                        <th>国家</th>
                                        <th>成分</th>
                                        <th>剂型</th>
                                        <th>上市数量</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {/*<!--每一个tr-->*/}
                                    <tr>
                                        <td>美国</td>
                                        <td>奥美拉唑</td>
                                        <td>胶囊</td>
                                        <td className="xh-blue">5</td>
                                    </tr>
                                    {/*<!--每一个tr-->*/}
                                    <tr>
                                        <td>美国</td>
                                        <td>奥美拉唑</td>
                                        <td>片剂</td>
                                        <td className="xh-blue">1</td>
                                    </tr>
                                    {/*<!--每一个tr-->*/}
                                    <tr>
                                        <td>美国</td>
                                        <td>奥美拉唑</td>
                                        <td>注射剂</td>
                                        <td className="xh-blue">1</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/*<!--每个条目-->*/}
                        <div className="xh-details-show-each">
                            <h4>临床试验</h4>
                            <div className="xh-details-key">
                                <ul className="xh-clearfix">
                                    <li>中50国&nbsp;&nbsp;&nbsp;50</li>
                                    <li>全球&nbsp;&nbsp;&nbsp;50</li>
                                </ul>
                            </div>
                        </div>
                        {/*<!--每个条目-->*/}
                        <div className="xh-details-show-each">
                            <h4>中国上市</h4>
                            <div className="xh-clearfix xh-details-key">
                                <table className="xh-bid-data-table xh-china-listing-table" width="100%" cellpadding="0" border="0">
                                    <thead>
                                    <tr>
                                        <th>药品名称</th>
                                        <th>受理号数量</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {/*<!--每一个tr-->*/}
                                    <tr>
                                        <td>奥美拉唑肠溶胶囊</td>
                                        <td className="xh-blue">50</td>
                                    </tr>
                                    {/*<!--每一个tr-->*/}
                                    <tr>
                                        <td>奥美拉唑肠溶片</td>
                                        <td className="xh-blue">50</td>
                                    </tr>
                                    {/*<!--每一个tr-->*/}
                                    <tr>
                                        <td>注射用奥美拉唑钠</td>
                                        <td className="xh-blue">50</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/*<!--每个条目-->*/}
                        <div className="xh-details-show-each">
                            <h4 className="xh-relative">
                                市场销售
                                <div className="xh-details-h4-position">
                                    <span className="xh-blue">国内样本医院</span>
                                    <span>全球销售</span>
                                </div>
                            </h4>
                            <div className="xh-statistical_chart">
                                <div className="xh-statistical_chart-w">
                                    <img src={tj1} />
                                </div>
                                <div className="xh-statistical_chart-text">
                                    <p>单位：人民 </p>
                                    <p>数据来源说</p>
                                </div>
                            </div>
                        </div>
                        {/*<!--每个条目-->*/}
                        <div className="xh-details-show-each">
                            <h4 className="xh-relative">
                                专利信息
                                <div className="xh-details-h4-position">
                                    <span>专利简析</span>
                                    <span className="xh-blue">核心专利</span>
                                    <a href="javascript:;" className="xh-blue xh-details-h4-position-a">查看全部专利&gt;</a>
                                </div>
                            </h4>
                            <div className="xh-clearfix xh-details-key">
                                <table className="xh-bid-data-table" width="100%" cellpadding="0" border="0">
                                    <thead>
                                    <tr>
                                        <th>专利公开号</th>
                                        <th>专利类型</th>
                                        <th>批准日期</th>
                                        <th>到期日期</th>
                                        <th>国家</th>
                                        <th>法律状态</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {/*<!--每一个tr-->*/}
                                    <tr>
                                        <td>11111111111111</td>
                                        <td>化合物专利</td>
                                        <td>2011-1-1</td>
                                        <td>2020-1-1</td>
                                        <td>美国</td>
                                        <td>授权</td>
                                    </tr>
                                    {/*<!--每一个tr-->*/}
                                    <tr>
                                        <td>11111111111111</td>
                                        <td>组合物专利</td>
                                        <td>2011-1-1</td>
                                        <td>2020-1-1</td>
                                        <td>中国</td>
                                        <td>过期</td>
                                    </tr>
                                    {/*<!--每一个tr-->*/}
                                    <tr>
                                        <td>11111111111111</td>
                                        <td>化合物专利</td>
                                        <td>2011-1-1</td>
                                        <td>2020-1-1</td>
                                        <td>美国</td>
                                        <td>授权</td>
                                    </tr>
                                    {/*<!--每一个tr-->*/}
                                    <tr>
                                        <td>11111111111111</td>
                                        <td>组合物专利</td>
                                        <td>2011-1-1</td>
                                        <td>2020-1-1</td>
                                        <td>中国</td>
                                        <td>过期</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}


export default IndexDetailContent;

IndexDetailContent.propTypes = {};
