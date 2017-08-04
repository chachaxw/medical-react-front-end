import React from 'react';
import {connect} from 'dva';
import LeftNavContent from 'components/LeftNavContent/LeftNavContent';

const LeftNav = ({location, dispatch , clickleftnav ,leftnav }) => {

    const props = {
        ...leftnav,
        updateState(payload) {
            dispatch({
                type:'leftnav/updateState',
                payload:payload
            });
        },
        doSearchFn(payload) {
            dispatch({
                type:'leftnav/doSearchFn',
                payload:payload
            });
        },
        renderTheSelect(payload) {
            dispatch({
                type:'leftnav/renderTheSelect',
                payload:payload
            });
        },
        onTagChange(payload) {
            //样本医院tag切换
            dispatch({
                type:'marketsales/updateState',
                payload:{
                    tagNumber:payload
                }
            });
        },
    }

    return (
        <LeftNavContent {...props} />
    );

};

function mapStateToProps({ leftnav }) {
    return { leftnav };
}

export default connect(mapStateToProps)(LeftNav);
