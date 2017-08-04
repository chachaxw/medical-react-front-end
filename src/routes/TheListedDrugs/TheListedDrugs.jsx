import React from 'react';
import {connect} from 'dva';
import TheListedDrugsContent from 'components/TheListedDrugsContent/TheListedDrugsContent';

const TheListedDrugs = ({location, dispatch, thelisteddrugs}) => {
    const props = {
        ...thelisteddrugs,
        jumpUrl(payload) {
            dispatch(payload);
        },
        updateState(payload) {
            dispatch({
                type:"thelisteddrugs/updateState",
                payload:payload
            });
        },
        queryToGetNewContent(payload) {
            dispatch({
                type:"thelisteddrugs/queryToGetNewContent",
                payload:payload
            });
        },
        renderMore(payload) {
            dispatch({
                type:"thelisteddrugs/renderMore",
                payload:payload
            });
        },
        renderList(payload) {
            dispatch({
                type:"thelisteddrugs/renderList",
                payload:payload
            });
        },
        renderOnchangeGet(payload) {
            dispatch({
                type:"thelisteddrugs/renderOnchangeGet",
                payload:payload
            });
        },
        onUPDOWNChange(payload) {
            dispatch({
                type:"thelisteddrugs/onUPDOWNChange",
                payload:payload
            });
        },
        renderOnchangeBrowsing(payload) {
            dispatch({
                type:"thelisteddrugs/renderOnchangeBrowsing",
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
        <TheListedDrugsContent {...props}/>
    );

};

function mapStateToProps({ thelisteddrugs }) {
    return { thelisteddrugs };
}

export default connect(mapStateToProps)(TheListedDrugs);
