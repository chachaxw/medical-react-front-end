import React from 'react';
import {connect} from 'dva';
import InstructionsContent from 'components/InstructionsContent/InstructionsContent';

const Instructions = ({location, dispatch, instructions}) => {
    const props = {
        ...instructions,
        jumpUrl(payload) {
            dispatch(payload);
        },
        updateState(payload) {
            dispatch({
                type:"instructions/updateState",
                payload:payload
            });
        },
        renderList(payload) {
            dispatch({
                type:"instructions/renderList",
                payload:payload
            });
        },
        renderOnchangeGet(payload) {
            dispatch({
                type:"instructions/renderOnchangeGet",
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
        <InstructionsContent {...props}/>
    );

};

function mapStateToProps({ instructions }) {
    return { instructions };
}

export default connect(mapStateToProps)(Instructions);
