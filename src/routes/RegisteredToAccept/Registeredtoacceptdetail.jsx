import React from 'react';
import {connect} from 'dva';
import RegisteredtoacceptdetailContent from 'components/RegisteredtoacceptdetailContent/RegisteredtoacceptdetailContent';

const Registeredtoacceptdetail = ({location, dispatch, registeredtoacceptdetail}) => {
    const props = {
        ...registeredtoacceptdetail,
        jumpUrl(payload) {
            dispatch(payload);
        }
    }

    return (
        <RegisteredtoacceptdetailContent {...props}/>
    );

};

function mapStateToProps({ registeredtoacceptdetail }) {
    return { registeredtoacceptdetail };
}

export default connect(mapStateToProps)(Registeredtoacceptdetail);
