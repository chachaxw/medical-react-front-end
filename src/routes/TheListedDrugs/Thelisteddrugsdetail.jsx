import React from 'react';
import {connect} from 'dva';
import ThelisteddrugsdetailContent from 'components/ThelisteddrugsdetailContent/ThelisteddrugsdetailContent';

const Thelisteddrugsdetail = ({location, dispatch, thelisteddrugsdetail}) => {
    const props = {
        ...thelisteddrugsdetail,
        jumpUrl(payload) {
            dispatch(payload);
        },
        queryfloatdata(payload) {
            dispatch({
                type:'thelisteddrugsdetail/queryfloatdata',
                payload:payload
            })
        }
    }

    return (
        <ThelisteddrugsdetailContent {...props}/>
    );

};

function mapStateToProps({ thelisteddrugsdetail }) {
    return { thelisteddrugsdetail };
}

export default connect(mapStateToProps)(Thelisteddrugsdetail);
