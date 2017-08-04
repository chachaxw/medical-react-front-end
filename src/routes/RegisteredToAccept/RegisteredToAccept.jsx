import React from 'react';
import {connect} from 'dva';
import RegisteredToAcceptContent from 'components/RegisteredToAcceptContent/RegisteredToAcceptContent';

const RegisteredToAccept = ({location, dispatch, registeredtoaccept}) => {

    const props = {
        ...registeredtoaccept,
        jumpUrl(payload) {
            dispatch(payload);
        },
        updateState(payload) {
            dispatch({
                type:"registeredtoaccept/updateState",
                payload:payload
            });
        },
        renderList(payload) {
            dispatch({
                type:"registeredtoaccept/renderList",
                payload:payload
            });
        },
        renderOnchangeGet(payload) {
            dispatch({
                type:"registeredtoaccept/renderOnchangeGet",
                payload:payload
            });
        },
        renderOnchangeBrowsing(payload) {
            dispatch({
                type:"registeredtoaccept/renderOnchangeBrowsing",
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
        <RegisteredToAcceptContent {...props}/>
    );

};

function mapStateToProps({ registeredtoaccept }) {
    return { registeredtoaccept };
}

export default connect(mapStateToProps)(RegisteredToAccept);
