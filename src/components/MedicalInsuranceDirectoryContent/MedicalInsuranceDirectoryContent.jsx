import './style.css';
import React, { PropTypes , Component } from 'react';
import {routerRedux} from 'dva/router';
import { Pagination , Table } from 'antd';
import classnames from 'classnames';
import formatdata from 'formatdata';
import SaveScreen from './SaveScreen';

class MedicalInsuranceDirectoryContent extends Component {
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
            title:'地区',
            key:'12das12｀',
            render(data) {
                return (
                    <span>
						<p className="xh-proportion-p">奥美拉唑<br/>Omeperazole</p>
					</span>
                )
            }
        },{
            title:'编号',
            key:'listaed',
            render(data) {
                return (
                    <span>
						<p className="xh-list-p">中国：未上市</p>
						<p className="xh-list-p">美国：未上市</p>
						<p className="xh-list-p">
							欧盟：
							<b className="xh-blue">5</b>
						</p>
						<p className="xh-list-p">
							日本：
							<b className="xh-blue">1</b>
						</p>
					</span>
                )
            }
        },{
            title:'分类',
            key:'madd131t',
            render(data) {
                return (
                    <span>
						<p className="xh-list-p">
							中国：
							<b className="xh-blue">30</b>
						</p>
						<p className="xh-list-p">
							全球：
							<b className="xh-blue">10</b>
						</p>
					</span>
                )
            }
        },{
            title:'成分',
            key:'ma23at',
            render(data) {
                return (
                    <span>
						<p className="xh-list-p">
							中国：
							<b className="xh-blue">30</b>
						</p>
						<p className="xh-list-p">
							全球：
							<b className="xh-blue">10</b>
						</p>
					</span>
                )
            }
        },{
            title:'剂型',
            key:'maefdt',
            render(data) {
                return (
                    <span>
						分
					</span>
                )
            }
        },{
            title:'医保类型',
            key:'ma3s21t',
            render(data) {
                return (
                    <span>
						但千万
                    </span>
                )
            }
        },{
            title:'备注',
            key:'31ad23',
            render(data) {
                return (
                    <span>
						当前的
					</span>
                )
            }
        }];
        return (
            <div className="IndexSearchContent">
                <div className="xh-container-right-wrap">
                    {/*<!--筛选部分-->*/}
                    <div className="xh-clearfix xh-screen-wrap">
                        <SaveScreen {...props} dontsave={true}/>
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


export default MedicalInsuranceDirectoryContent;

MedicalInsuranceDirectoryContent.propTypes = {};
