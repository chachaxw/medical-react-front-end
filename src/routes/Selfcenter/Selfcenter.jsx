import React from 'react';
import {connect} from 'dva';
import SelfcenterContent from 'components/SelfcenterContent/SelfcenterContent';

const Selfcenter = ({location, dispatch, selfcenter}) => {
    const props = {
        ...selfcenter,
        jumpUrl(payload) {
            dispatch(payload);
        },
        getUserInfo(payload) {
            dispatch({
                type:"usercenter/getUserInfo",
                payload:payload
            });
        },
        updateState(payload) {
            dispatch({
                type:"selfcenter/updateState",
                payload:payload
            });
        },
        zzxtFn(payload) {
            dispatch({
                type:"selfcenter/zzxtFn",
                payload:payload
            });
        },
        deleteZC(payload) {
            dispatch({
                type:"selfcenter/deleteZC",
                payload:payload
            });
        },
        zzAndEsc(payload) {
            dispatch({
                type:"selfcenter/zzAndEsc",
                payload:payload
            });
        }
    }

    return (
        <SelfcenterContent {...props}/>
    );

};

function mapStateToProps({ selfcenter }) {
    return { selfcenter };
}

export default connect(mapStateToProps)(Selfcenter);
