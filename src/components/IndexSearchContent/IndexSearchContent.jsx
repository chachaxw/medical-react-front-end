import './style.css';
import React, { PropTypes , Component } from 'react';
import {routerRedux} from 'dva/router';
import { Pagination , Table } from 'antd';
import classnames from 'classnames';
import formatdata from 'formatdata';
import SaveScreen from './SaveScreen';

class IndexSearchContent extends Component {
    gotodetail({record, index}) {
    	console.log(record.id, index,'xxxx');
        this.props.jumpUrl(routerRedux.push({
            pathname:'medicalretrieval/indexdetail',
            query:{
                searchId:record.id,
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
			title:'基本情况',
			key:'base',
			width:'710px',
			render(data) {
				return (
					<span>
						<p className="xh-proportion-p">{data.drug_name || ''}<br/>{data.drug_name_en || ''}</p>
						<b className="xh-color-999 xh-proportion-b">{data.brief_introduction || ''}</b>
					</span>
				)
			}
		},{
			title:'上市',
			key:'listed',
			render(data) {
				return (
					<span>
						<p className="xh-list-p">中国：{data.china_drug_num || '0'}</p>
						<p className="xh-list-p">美国：{data.usa_drug_num || '0'}</p>
						<p className="xh-list-p">
							欧盟：
							<b className="xh-blue">{data.eu_drug_num || '0'}</b>
						</p>
						<p className="xh-list-p">
							日本：
							<b className="xh-blue">{data.jp_drug_num || '0'}</b>
						</p>
					</span>
				)
            }
		},{
			title:'临床试验',
			key:'mat',
			render(data) {
				return (
					<span>
						<p className="xh-list-p">
							中国：
							<b className="xh-blue">{data.china_ct_num || '0'}</b>
						</p>
						<p className="xh-list-p">
							全球：
							<b className="xh-blue">{data.global_ct_num || '0'}</b>
						</p>
					</span>
				)
            }
		}];
        return (
            <div className="IndexSearchContent">
                <div className="xh-container-right-wrap">
                    {/*<!--筛选部分-->*/}
                    <div className="xh-clearfix xh-screen-wrap">
						<SaveScreen {...props} />
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


export default IndexSearchContent;

IndexSearchContent.propTypes = {};
