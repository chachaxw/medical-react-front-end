import React from 'react';
import {connect} from 'dva';
import MonitoringAndTrackingContent from 'components/MonitoringAndTrackingContent/MonitoringAndTrackingContent';

const MonitoringAndTracking = ({location, dispatch, monitoringandtracking}) => {
    const props = {
        ...monitoringandtracking,
        jumpUrl(payload) {
            dispatch(payload);
        },
        updateState(payload) {
            dispatch({
                type:'monitoringandtracking/updateState',
                payload:payload
            })
        }
    }

    return (
        <MonitoringAndTrackingContent {...props}/>
    );

};

function mapStateToProps({ monitoringandtracking }) {
    return { monitoringandtracking };
}

export default connect(mapStateToProps)(MonitoringAndTracking);
