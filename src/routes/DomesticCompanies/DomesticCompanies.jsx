import React from 'react';
import {connect} from 'dva';
import DomesticCompaniesContent from 'components/DomesticCompaniesContent/DomesticCompaniesContent';

const DomesticCompanies = ({location, dispatch, domesticCompanies}) => {
    const props = {
        ...domesticCompanies,
        jumpUrl(payload) {
            dispatch(payload);
        },
        updateState(payload) {
            dispatch({
                type:"domesticCompanies/updateState",
                payload:payload
            });
        },
        renderList(payload) {
            dispatch({
                type:"domesticCompanies/renderList",
                payload:payload
            });
        },
        renderOnchangeGet(payload) {
            dispatch({
                type:"domesticCompanies/renderOnchangeGet",
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
        <DomesticCompaniesContent {...props}/>
    );

};

function mapStateToProps({ domesticCompanies }) {
    return { domesticCompanies };
}

export default connect(mapStateToProps)(DomesticCompanies);
