import React from 'react';
import {connect} from 'dva';
import IndexDetailContent from 'components/IndexDetailContent/IndexDetailContent';

const IndexDetail = ({location, dispatch, indexdetail}) => {
    const props = {
        ...indexdetail,
        jumpUrl(payload) {
            dispatch(payload);
        }
    }

    return (
        <IndexDetailContent {...props}/>
    );

};

function mapStateToProps({ indexdetail }) {
    return { indexdetail };
}

export default connect(mapStateToProps)(IndexDetail);
