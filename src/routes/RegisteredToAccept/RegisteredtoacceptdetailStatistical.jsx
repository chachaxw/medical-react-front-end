import React from 'react';
import {connect} from 'dva';
import RegisteredtoacceptdetailStatisticalContent from 'components/RegisteredtoacceptdetailStatisticalContent/RegisteredtoacceptdetailStatisticalContent';

const RegisteredtoacceptdetailStatistical = ({location, dispatch, registeredtoacceptdetailStatistical}) => {
    const props = {
        ...registeredtoacceptdetailStatistical,
        jumpUrl(payload) {
            dispatch(payload);
        }
    }

    return (
        <RegisteredtoacceptdetailStatisticalContent {...props}/>
    );

};

function mapStateToProps({ registeredtoacceptdetailStatistical }) {
    return { registeredtoacceptdetailStatistical };
}

export default connect(mapStateToProps)(RegisteredtoacceptdetailStatistical);
