import React from 'react';
import {connect} from 'dva';
import IndexContent from 'components/IndexContent/IndexContent';

const Index = ({location, dispatch, index}) => {
    const props = {
        ...index,
        jumpUrl(payload) {
            dispatch(payload);
        },
        requestto(payload) {
            dispatch({
                type:'index/requestto',
                payload:payload
            })
        }
    }

    return (
        <IndexContent {...props}/>
    );

};

function mapStateToProps({ index }) {
    return { index };
}

export default connect(mapStateToProps)(Index);
