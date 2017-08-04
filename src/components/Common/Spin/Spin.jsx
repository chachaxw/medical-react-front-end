import React, {PropTypes, Component} from 'react';
import {Link} from 'dva/router';
import './style.css';
import { Spin } from 'antd';

class SpinWrap extends Component {
    render() {
        let className = this.props.loading?"fixed-wrap_shkjs32832 fixed-wrap_shkjs32832_act":"fixed-wrap_shkjs32832";
        return (
            <div className={className}>
                <div className="vertical-c-modal">
                    <Spin spinning={this.props.loading} size="large" delay={800}></Spin>
                </div>
            </div>
        )

    }
}

export default SpinWrap;