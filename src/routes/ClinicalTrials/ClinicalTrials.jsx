import React from 'react';
import {connect} from 'dva';
import ClinicalTrialsContent from 'components/ClinicalTrialsContent/ClinicalTrialsContent';

const ClinicalTrials = ({location, dispatch, clinicaltrials}) => {
    const props = {
        ...clinicaltrials,
        jumpUrl(payload) {
            dispatch(payload);
        },
        updateState(payload) {
            dispatch({
                type:'clinicaltrials/updateState',
                payload:payload
            })
        },
        renderOnchangeBrowsing(payload) {
            dispatch({
                type:"clinicaltrials/renderOnchangeBrowsing",
                payload:payload
            });
        },
        renderOnchangeGet(payload) {
            dispatch({
                type:"clinicaltrials/renderOnchangeGet",
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
        <ClinicalTrialsContent {...props}/>
    );

};

function mapStateToProps({ clinicaltrials }) {
    return { clinicaltrials };
}

export default connect(mapStateToProps)(ClinicalTrials);
