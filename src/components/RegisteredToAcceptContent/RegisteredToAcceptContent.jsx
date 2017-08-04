import './style.css';
import React, { PropTypes , Component } from 'react';
import { Pagination , Table } from 'antd';
import {routerRedux} from 'dva/router';
import classnames from 'classnames';
import formatdata from 'formatdata';
import ListTop from './ListTop';
import ListBody from './ListBody';
import SaveScreen from './SaveScreen';

class RegisteredToAcceptContent extends Component {

    gotodetail(payload) {
        this.props.jumpUrl(routerRedux.push({
            pathname:'medicalretrieval/registeredtoacceptdetail',
            query:{
                somequery:'xxxx',
                from:'monitoringandtrackingdetail'
            }
        }));
    }

    onChange(params) {
        const payload = {
            offset:params,
            browsing:this.props.browsing
        }

        this.props.renderOnchangeGet(payload);
    }

    render() {

        const props = this.props;
        //控制浏览方式选择的显示隐藏
        const ulClassname = classnames({'xh-box-s xh-box-s-act':props.selectOpen,'xh-box-s':!props.selectOpen});

        //控制当前浏览方式的文案
        const selectText = formatdata({
            type:'selectTextReg',
            data:{
                browsing:this.props.browsing
            }
        });

        let columns;
        if(this.props.browsing == 'ApprovalNumber') {
            columns = [{
                title:'受理号',
                key:'slh',
                dataIndex:'slh',
                width:'16%',
                render(data) {
                    return (
                        <span>
                        {data || '/'}
                    </span>
                    )
                }
            },{
                title:'药品名称',
                key:'drug_name',
                width:'16%',
                render(data){
                    return (
                        <span>
                        {data.drug_name}<br/>
                            {data.drug_name_en}
                    </span>
                    )
                }
            },{
                title:'企业',
                key:'enterprise',
                dataIndex:'enterprise',
                width:'16%',
                className:'spancenter-l',
                render(data) {
                    return (
                        <span className='spancenter'>
                        {data || '/'}
                    </span>
                    )
                }
            },{
                title:'平生结论',
                key:'conclusion',
                dataIndex:'conclusion',
                width:'16%',
                className:'spancenter-l',
                render(data) {
                    return (
                        <span className='spancenter'>
                        {data || '/'}
                    </span>
                    )
                }
            },{
                title:'办理状态',
                key:'transact_status',
                dataIndex:'transact_status',
                width:'16%',
                className:'spancenter-l',
                render(data) {
                    return (
                        <span className='spancenter'>
                        {data || '/'}
                    </span>
                    )
                }
            },{
                title:'状态日期',
                key:'status_start_date',
                dataIndex:'status_start_date',
                width:'16%',
                className:'spancenter-l',
                render(data) {
                    return (
                        <span className='spancenter'>
                    {data || '/'}
                </span>
                    )
                }
            }];
        } else if(this.props.browsing == 'medicines') {

            columns = [{
                title:'药品名称',
                key:'drug_name2',
                dataIndex:'drug_name2',
                width:'14%',
                render(data) {
                    return (
                        <span>
                            {data.drug_name}<br/>
                            {data.drug_name_en}
                        </span>
                    )
                }
            },{
                title:'申请生产数',
                key:'apply_listing_num',
                dataIndex:'apply_listing_num',
                width:'14%',
                render(data){
                    return (
                        <span>
                            {data || '/'}
                        </span>
                    )
                }
            },{
                title:'申请临床数',
                key:'apply_ctc_num',
                dataIndex:'apply_ctc_num',
                width:'14%',
                className:'spancenter-l',
                render(data) {
                    return (
                        <span className='spancenter'>
                        {data || '/'}
                    </span>
                    )
                }
            },{
                title:'新药申请',
                key:'apply_new_drug_num',
                dataIndex:'apply_new_drug_num',
                width:'14%',
                className:'spancenter-l',
                render(data) {
                    return (
                        <span className='spancenter'>
                        {data || '/'}
                    </span>
                    )
                }
            },{
                title:'仿制申请',
                key:'apply_anda_num',
                dataIndex:'apply_anda_num',
                width:'14%',
                className:'spancenter-l',
                render(data) {
                    return (
                        <span className='spancenter'>
                        {data || '/'}
                    </span>
                    )
                }
            },{
                title:'进口申请',
                key:'apply_import_num',
                dataIndex:'apply_import_num',
                width:'14%',
                className:'spancenter-l',
                render(data) {
                    return (
                        <span className='spancenter'>
                        {data || '/'}
                    </span>
                    )
                }
            },{
                title:'总申请数',
                key:'apply_tnum',
                dataIndex:'apply_tnum',
                width:'14%',
                className:'spancenter-l',
                render(data) {
                    return (
                        <span className='spancenter'>
                        {data || '/'}
                    </span>
                    )
                }
            }];

        } else if(this.props.browsing == 'enterprise') {

            columns = [{
                title:'企业名称',
                key:'enterprise',
                dataIndex:'enterprise',
                width:'14%',
                render(data) {
                    return (
                        <span>
                        {data || '/'}
                    </span>
                    )
                }
            },{
                title:'申请生产数',
                key:'apply_listing_num',
                dataIndex:'apply_listing_num',
                width:'14%',
                render(data){
                    return (
                        <span>
                            {data || '/'}
                        </span>
                    )
                }
            },{
                title:'申请临床数',
                key:'apply_ctc_num',
                dataIndex:'apply_ctc_num',
                width:'14%',
                className:'spancenter-l',
                render(data) {
                    return (
                        <span className='spancenter'>
                        {data || '/'}
                    </span>
                    )
                }
            },{
                title:'新药申请',
                key:'apply_new_drug_num',
                dataIndex:'apply_new_drug_num',
                width:'14%',
                className:'spancenter-l',
                render(data) {
                    return (
                        <span className='spancenter'>
                        {data || '/'}
                    </span>
                    )
                }
            },{
                title:'仿制申请',
                key:'apply_anda_num',
                dataIndex:'apply_anda_num',
                width:'14%',
                className:'spancenter-l',
                render(data) {
                    return (
                        <span className='spancenter'>
                        {data || '/'}
                    </span>
                    )
                }
            },{
                title:'进口申请',
                key:'apply_import_num',
                dataIndex:'apply_import_num',
                width:'14%',
                className:'spancenter-l',
                render(data) {
                    return (
                        <span className='spancenter'>
                        {data || '/'}
                    </span>
                    )
                }
            },{
                title:'总申请数',
                key:'apply_tnum',
                dataIndex:'apply_tnum',
                width:'14%',
                className:'spancenter-l',
                render(data) {
                    return (
                        <span className='spancenter'>
                        {data || '/'}
                    </span>
                    )
                }
            }];
        }

        return (
            <div className="RegisteredToAcceptContent">
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
                                    <li onClick={() => this.props.renderOnchangeBrowsing({browsing:'ApprovalNumber',offset:'1',selectOpen:!props.selectOpen})}>按批文浏览</li>
                                    <li onClick={() => this.props.renderOnchangeBrowsing({browsing:'medicines',offset:'1',selectOpen:!props.selectOpen})}>按药名浏览</li>
                                    <li onClick={() => this.props.renderOnchangeBrowsing({browsing:'enterprise',offset:'1',selectOpen:!props.selectOpen})}>按企业浏览</li>
                                </ul>
                                {/*<!--获取选择的值-->*/}
                                <input type="hidden" name="" value="" id="" />
                            </div>
                            <a href="javascript:;" className="xh-fl xh-btn xh-preservation-btn">导出</a>
                        </div>
                    </div>
                    {/*<!--列表部分-->*/``}
                    <div className="xh-content-list-wrap xh-lsted-drug-page">
                        {/*<!--列表部分-->*/}
                        <div className="xh-content-list-wrap xh-global-clinical-list">
                            <Table dataSource={this.props.content} columns={columns} pagination={false} onRowClick={(record, index)=>this.gotodetail({record, index})}/>
                        </div>
                        {/*<!--分页部分-->*/}
                        <div className="xh-paging">
                            <Pagination defaultCurrent={1} current={this.props.offset || 1} total={this.props.tnum} onChange={(params)=>this.onChange(params)}/>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}


export default RegisteredToAcceptContent;

RegisteredToAcceptContent.propTypes = {};
