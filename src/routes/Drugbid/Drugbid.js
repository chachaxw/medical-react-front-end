import React from 'react';
import {connect} from 'dva';
import DrugbidContent from 'components/DrugbidContent/DrugbidContent';

const Drugbid = ({location, dispatch, drugbid}) => {
    const props = {
        ...drugbid,
        jumpUrl(payload) {
            dispatch(payload);
        },
        updateState(payload) {
            dispatch({
                type:"drugbid/updateState",
                payload:payload
            });
        },
        renderList(payload) {
            dispatch({
                type:"drugbid/renderList",
                payload:payload
            });
        },
        renderOnchangeGet(payload) {
            dispatch({
                type:"drugbid/renderOnchangeGet",
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
        <DrugbidContent {...props}/>
    );

};

function mapStateToProps({ drugbid }) {
    return { drugbid };
}

export default connect(mapStateToProps)(Drugbid);
