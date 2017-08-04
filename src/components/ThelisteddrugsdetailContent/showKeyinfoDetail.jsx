import './style.css';
import React, { PropTypes , Component } from 'react';
import { Table } from 'antd';

class ShowKeyinfoDetail extends Component {



    render() {
        const style = this.props.style || {};
        let classNamess;
        if(this.props.id == 'gjyb') {
            classNamess = 'xh-blue'
        }else if(this.props.id == 'zbjy') {
            classNamess = 'xh-blue zbjy'
        }
        return (
            <li className="xh-details-key-li">
                <a href="javascript:;" className={classNamess}>{this.props.title}</a>
            </li>
        )

    }
}


export default ShowKeyinfoDetail;

ShowKeyinfoDetail.propTypes = {};