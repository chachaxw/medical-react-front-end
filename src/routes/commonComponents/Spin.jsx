import React from 'react';
import {connect} from 'dva';

import Spin from 'components/Common/Spin/Spin';
const SpinWrap = ({location, dispatch, spin}) => {

    return (
        <Spin {...spin} />
    );

};

function mapStateToProps({ spin }) {
    return { spin };
}

export default connect(mapStateToProps)(SpinWrap);
