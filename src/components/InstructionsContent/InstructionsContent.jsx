import './style.css';
import React, { PropTypes , Component } from 'react';
import {routerRedux} from 'dva/router';
import { Pagination , Table } from 'antd';
import classnames from 'classnames';
import formatdata from 'formatdata';

class InstructionsContent extends Component {
    gotodetail() {
        this.props.jumpUrl(routerRedux.push({
            pathname:'medicalretrieval/indexdetail',
            query:{
                somequery:'xxxx',
                from:'indexdetail'
            }
        }))
    }

    onChange(params) {
        const payload = {
            offset:params
        }

        this.props.renderOnchangeGet(payload);
    }

    render() {

        const props = this.props;

        let columns = [{
            title:'药品名称／成分',
            key:'ba231se',
            render(data) {
                return (
                    <span>
						<p className="xh-proportion-p">硫酸氢氯呲格雷片</p>
						<b className="xh-color-999 xh-proportion-b">Clo[idoqre</b>
					</span>
                )
            }
        },{
            title:'商品名',
            key:'list4123ed',
            render(data) {
                return (
                    <span>
						波立维
					</span>
                )
            }
        },{
            title:'企业',
            key:'32131mat',
            render(data) {
                return (
                    <span>
						江苏恒瑞医药股份有限公司
					</span>
                )
            }
        },{
            title:'批准文号／申请号',
            key:'m321at',
            render(data) {
                return (
                    <span>
						国药准字H112222
					</span>
                )
            }
        },{
            title:'批准地区／国家',
            key:'sas',
            render(data) {
                return (
                    <span>
                        中国
					</span>
                )
            }
        },{
            title:'查看',
            key:'see',
            render(data) {
                return (
                    <span>
						查看
					</span>
                )
            }
        }];
        return (
            <div className="IndexSearchContent">
                <div className="xh-container-right-wrap">
                    {/*/!*<!--筛选部分-->*!/*/}
                    <div className="xh-clearfix xh-screen-wrap">
                        {/*<SaveScreen {...props} />*/}
                    </div>

                    <div className="xh-content-list-wrap xh-lsted-drug-page">
                        {/*<!--列表部分-->*/}
                        <div className="xh-content-list-wrap xh-global-clinical-list">
                            <Table dataSource={this.props.content} columns={columns} pagination={false} onRowClick={(record, index)=>this.gotodetail({record, index})}/>
                        </div>
                        {/*<!--分页部分-->*/}
                        <div className="xh-paging">
                            <Pagination defaultCurrent={1} current={this.props.offset || 1} total={this.props.tnum} onChange={(params)=>this.onChange(params)} />
                        </div>
                    </div>

                </div>
            </div>
        )

    }
}


export default InstructionsContent;

InstructionsContent.propTypes = {};
