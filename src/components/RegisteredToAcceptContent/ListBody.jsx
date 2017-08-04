import './style.css';
import React, { PropTypes , Component } from 'react';
import {routerRedux} from 'dva/router';
class ListBody extends Component {

    gotodetail(payload) {
        this.props.jumpUrl(routerRedux.push({
            pathname:'medicalretrieval/indexdetail',
            query:{
                somequery:'xxxx',
                from:'thelisteddrugsdetail'
            }
        }));
    }

    render() {
        const datasource = this.props.datasource;
        if(this.props.browsing == 'ApprovalNumber') {
            return (
                <li className="xh-proportion xh-content-list-heard-6" onClick={()=>this.gotodetail()}>
                    <span>{datasource.slh}</span>
                    <span>
                    {datasource.drug_name}<br/>
                        {datasource.drug_name_en}
                    </span>
                    <span>{datasource.enterprise}</span>
                    <span>{datasource.conclusion}</span>
                    <span>{datasource.transact_status}</span>
                    <span>{datasource.status_start_date}</span>
                </li>
            )
        } else if(this.props.browsing == 'medicines') {
            return (
                <li className="xh-proportion xh-content-list-heard-7" onClick={()=>this.gotodetail()}>
                    <span>
                        {datasource.drug_name}<br/>
                        {datasource.drug_name_en}
                    </span>
                    <span>{datasource.apply_listing_num}</span>
                    <span>{datasource.apply_ctc_num}</span>
                    <span>{datasource.apply_new_drug_num}</span>
                    <span>{datasource.apply_anda_num}</span>
                    <span>{datasource.apply_import_num}</span>
                    <span>{datasource.apply_tnum}</span>
                </li>
            )
        } else if(this.props.browsing == 'enterprise') {
            return (
                <li className="xh-proportion" onClick={()=>this.gotodetail()}>
                    <span>{datasource.enterprise}</span>
                    <span>{datasource.apply_listing_num}</span>
                    <span>{datasource.apply_ctc_num}</span>
                    <span>{datasource.apply_new_drug_num}</span>
                    <span>{datasource.apply_anda_num}</span>
                    <span>{datasource.apply_import_num}</span>
                    <span>{datasource.apply_tnum}</span>
                </li>
            )
        }


    }
}


export default ListBody;

ListBody.propTypes = {};
