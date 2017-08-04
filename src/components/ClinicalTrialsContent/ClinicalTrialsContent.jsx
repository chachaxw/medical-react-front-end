import './style.css';
import React, { PropTypes , Component } from 'react';
import { Table , Pagination } from 'antd';
import SaveScreen from './SaveScreen';
import classnames from 'classnames';
import formatdata from 'formatdata';

class ClinicalTrialsContent extends Component {
    onChange(params) {
        const payload = {
            offset:params,
            browsing:this.props.browsing,
            url:this.props.url,
            render:this.props.render
        }
        this.props.renderOnchangeGet(payload);
    }

    render() {
        const props = this.props;
        let columns;
        if(this.props.render == 'qqlcsy') {

            if(this.props.browsing == 'ApprovalNumber') {
                columns = [{
                    title:'标题',
                    dataIndex:'title',
                    key:'title',
                    width:"300px",
                    render(data) {
                        return (
                            <span>
                            {data || '/'}
                        </span>
                        )
                    }
                },{
                    title:'相关药物',
                    dataIndex:'identifier',
                    key:'identifier',
                    render(data) {
                        return (
                            <span>
                        {data || '/'}
                    </span>
                        )
                    }
                },{
                    title:'阶段',
                    dataIndex:'study_phase',
                    key:'study_phase',
                    render(data) {
                        return (
                            <span>
                        {data || '/'}
                    </span>
                        )
                    }
                },{
                    title:'状态',
                    dataIndex:'ct_status',
                    key:'ct_status',
                    render(data) {
                        return (
                            <span>
                            {data || '/'}
                        </span>
                        )
                    }
                },{
                    title:'登记日期',
                    key:'first_received_date',
                    dataIndex:'first_received_date',
                    render(data) {
                        return (
                            <span>
                            {data || '/'}
                        </span>
                        )
                    }
                }];
            } else {
                columns = [{
                    title:'药品名称',
                    dataIndex:'intervention',
                    key:'intervention',
                    width:"300px",
                    render(data) {
                        return (
                            <span>
                            {data || '/'}
                        </span>
                        )
                    }
                },{
                    title:'已完成',
                    dataIndex:'completed_num',
                    key:'completed_num',
                    render(data) {
                        return (
                            <span>
                        {data || '0'}
                    </span>
                        )
                    }
                },{
                    title:'招募中',
                    dataIndex:'recruiting_num',
                    key:'recruiting_num',
                    render(data) {
                        return (
                            <span>
                        {data || '0'}
                    </span>
                        )
                    }
                },{
                    title:'未招募',
                    dataIndex:'not_recruiting_num',
                    key:'not_recruiting_num',
                    render(data) {
                        return (
                            <span>
                            {data || '0'}
                        </span>
                        )
                    }
                },{
                    title:'总计',
                    key:'total_num',
                    dataIndex:'total_num',
                    render(data) {
                        return (
                            <span>
                            {data || '0'}
                        </span>
                        )
                    }
                }];
            }

        } else if(this.props.render == 'zglcsy') {
            if(this.props.browsing == 'ApprovalNumber') {
                columns = [{
                    title:'标题',
                    dataIndex:'title',
                    key:'title',
                    width:"300px",
                    render(data) {
                        return (
                            <span>
                        {data || '/'}
                    </span>
                        )
                    }
                },{
                    title:'相关药物',
                    dataIndex:'drug_name',
                    key:'drug_name',
                    render(data) {
                        return (
                            <span>
                        {data || '/'}
                    </span>
                        )
                    }
                },{
                    title:'申报方',
                    dataIndex:'study_sponsor',
                    key:'study_sponsor',
                    width:"300px",
                    render(data) {
                        return (
                            <span>
                        {data || '/'}
                    </span>
                        )
                    }
                },{
                    title:'适应症',
                    dataIndex:'sales_sum',
                    key:'sales_sum6',
                    render(data) {
                        return (
                            <span>
                        {data || '/'}
                    </span>
                        )
                    }
                }];
            } else {
                columns = [{
                    title:'药品名称',
                    dataIndex:'drug_name',
                    key:'drug_name',
                    width:"300px",
                    render(data) {
                        return (
                            <span>
                            {data || '/'}
                        </span>
                        )
                    }
                },{
                    title:'已完成',
                    dataIndex:'completed_num',
                    key:'completed_num',
                    render(data) {
                        return (
                            <span>
                        {data || '0'}
                    </span>
                        )
                    }
                },{
                    title:'招募中',
                    dataIndex:'recruiting_num',
                    key:'recruiting_num',
                    render(data) {
                        return (
                            <span>
                        {data || '0'}
                    </span>
                        )
                    }
                },{
                    title:'未招募',
                    dataIndex:'not_recruiting_num',
                    key:'not_recruiting_num',
                    render(data) {
                        return (
                            <span>
                            {data || '0'}
                        </span>
                        )
                    }
                },{
                    title:'总计',
                    key:'total_num',
                    dataIndex:'total_num',
                    render(data) {
                        return (
                            <span>
                            {data || '0'}
                        </span>
                        )
                    }
                }];
            }
        }

        //控制浏览方式选择的显示隐藏
        const ulClassname = classnames({'xh-box-s xh-box-s-act':props.selectOpen,'xh-box-s':!props.selectOpen});

        //控制当前浏览方式的文案
        const selectText = formatdata({
            type:'selectTextReg',
            data:{browsing:this.props.browsing}
        });

        return (
            <div className="ClinicalTrialsContent">
                <div className="xh-container-right-wrap">
                    {/*<!--筛选部分-->*/}
                    <div className="xh-clearfix xh-screen-wrap">
                        <SaveScreen {...props} />
                        <div className="xh-fr xh-screen-right">
                            {/*<!--模拟美化select表单部分-->*/}
                            <div className="xh-fl xh-select-wrap">
                                <div className="xh-select" onClick={()=>{this.props.updateState({selectOpen:!props.selectOpen})}}>
                                    {selectText}
                                </div>
                                <ul className={ulClassname}>
                                    <li onClick={() => this.props.renderOnchangeBrowsing({browsing:'ApprovalNumber',offset:1,selectOpen:!props.selectOpen,render:props.render})}>按批文浏览</li>
                                    <li onClick={() => this.props.renderOnchangeBrowsing({browsing:'medicines',offset:1,selectOpen:!props.selectOpen,render:props.render})}>按药名浏览</li>
                                </ul>
                                {/*<!--获取选择的值-->*/}
                                <input type="hidden" name="" value="" id="" />
                            </div>
                            <a href="javascript:;" className="xh-fl xh-btn xh-preservation-btn">导出</a>
                        </div>

                    </div>

                    {/*<!--列表部分-->*/}
                    <div className="xh-content-list-wrap xh-global-clinical-list">
                        <Table dataSource={this.props.content} columns={columns} pagination={false}/>
                    </div>
                    {/*<!--分页部分-->*/}
                    <div className="xh-paging">
                        <Pagination defaultCurrent={1} current={this.props.offset || 1} total={this.props.tnum} onChange={(params)=>this.onChange(params)} />
                    </div>

                </div>
            </div>
        )

    }
}


export default ClinicalTrialsContent;

ClinicalTrialsContent.propTypes = {};
