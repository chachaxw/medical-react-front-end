import './style.css';
import React, { PropTypes , Component } from 'react';
import tj1 from 'public/img/tj1.png';
import structure from 'public/img/structure.jpg';

class active_ingredient extends Component {

    render() {
        const content = this.props.content && this.props.content[0] || {};
        return (
            <div className="xh-details-show-each">
                <h4 className="xh-relative">
                    活性成分：奥美拉唑
                    <a href="javascript:;">查看详情&gt;</a>
                </h4>
                <div className="xh-clearfix xh-details-key">
                    <p className="xh-component">活性成分简介活性成分简介活性成分简介活性成分简介</p>
                </div>
            </div>
        )

    }
}


export default active_ingredient;

active_ingredient.propTypes = {};


