import React from 'react';
import {connect} from 'dva';

import OpenimgContent from 'components/Common/openImg/openimg';
const OpenImg = ({location, dispatch, spin}) => {
    const props = {
        ...spin,
        updateState(payload) {
            dispatch({
                type:'spin/updateState',
                payload:payload
            })
        }
    }
    return (
        <OpenimgContent {...props} />
    );

};

function mapStateToProps({ spin }) {
    return { spin };
}

export default connect(mapStateToProps)(OpenImg);
