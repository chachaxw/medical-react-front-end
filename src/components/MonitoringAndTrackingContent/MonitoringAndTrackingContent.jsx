import './style.css';
import React, { PropTypes , Component } from 'react';
import {routerRedux} from "dva/router";

import LeftNavAndRightContent from 'components/LeftNavAndRightContent/LeftNavAndRightContent';
import Content from './content';
import Left from './left';
class MonitoringAndTrackingContent extends Component {

    render() {

        return (
            <LeftNavAndRightContent>
                <Left {...this.props} />
                <Content {...this.props} />
            </LeftNavAndRightContent>
        )

    }
}


export default MonitoringAndTrackingContent;

MonitoringAndTrackingContent.propTypes = {};
