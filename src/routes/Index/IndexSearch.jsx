import React from 'react';
import {connect} from 'dva';
import IndexSearchContent from 'components/IndexSearchContent/IndexSearchContent';

const IndexSearch = ({location, dispatch, indexsearch}) => {
    const props = {
        ...indexsearch,
        jumpUrl(payload) {
            dispatch(payload);
        },
        updateState(payload) {
            dispatch({
                type:"indexsearch/updateState",
                payload:payload
            });
        },
        renderList(payload) {
            dispatch({
                type:"indexsearch/renderList",
                payload:payload
            });
        },
        renderOnchangeGet(payload) {
            dispatch({
                type:"indexsearch/renderOnchangeGet",
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
        <IndexSearchContent {...props}/>
    );

};

function mapStateToProps({ indexsearch }) {
    return { indexsearch };
}

export default connect(mapStateToProps)(IndexSearch);
