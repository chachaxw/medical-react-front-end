import React from 'react';
import {connect} from 'dva';
import MedicalInsuranceDirectoryContent from 'components/MedicalInsuranceDirectoryContent/MedicalInsuranceDirectoryContent';

const MedicalInsuranceDirectory = ({location, dispatch, medicalInsuranceDirectory}) => {
    const props = {
        ...medicalInsuranceDirectory,
        jumpUrl(payload) {
            dispatch(payload);
        },
        updateState(payload) {
            dispatch({
                type:"medicalInsuranceDirectory/updateState",
                payload:payload
            });
        },
        renderList(payload) {
            dispatch({
                type:"medicalInsuranceDirectory/renderList",
                payload:payload
            });
        },
        renderOnchangeGet(payload) {
            dispatch({
                type:"medicalInsuranceDirectory/renderOnchangeGet",
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
        <MedicalInsuranceDirectoryContent {...props}/>
    );

};

function mapStateToProps({ medicalInsuranceDirectory }) {
    return { medicalInsuranceDirectory };
}

export default connect(mapStateToProps)(MedicalInsuranceDirectory);
