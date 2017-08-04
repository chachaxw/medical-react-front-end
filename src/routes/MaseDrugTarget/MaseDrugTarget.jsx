import React from 'react';
import {connect} from 'dva';
import MaseDrugTargetContent from 'components/MaseDrugTargetContent/MaseDrugTargetContent';

const MaseDrugTarget = ({location, dispatch, maseDrugTarget}) => {
    const props = {
        ...maseDrugTarget,
        jumpUrl(payload) {
            dispatch(payload);
        },
        updateState(payload) {
            dispatch({
                type:"maseDrugTarget/updateState",
                payload:payload
            });
        },
        renderList(payload) {
            dispatch({
                type:"maseDrugTarget/renderList",
                payload:payload
            });
        },
        renderOnchangeGet(payload) {
            dispatch({
                type:"maseDrugTarget/renderOnchangeGet",
                payload:payload
            });
        },
        doSearchFn(payload) {
            dispatch({
                type:"leftnav/doSearchFn",
                payload:payload
            });
        },
        updateStateLeftNav(payload) {
            dispatch({
                type:'leftnav/updateState',
                payload:payload
            });
        }
    }

    return (
        <MaseDrugTargetContent {...props}/>
    );

};

function mapStateToProps({ maseDrugTarget }) {
    return { maseDrugTarget };
}

export default connect(mapStateToProps)(MaseDrugTarget);
