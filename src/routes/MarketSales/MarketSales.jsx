import React from 'react';
import {connect} from 'dva';
import MarketSalesContent from 'components/MarketSalesContent/MarketSalesContent';

const MarketSales = ({location, dispatch, marketsales}) => {
    const props = {
        ...marketsales,
        jumpUrl(payload) {
            dispatch(payload);
        },
        updateState(payload) {
            dispatch({
                type:'marketsales/updateState',
                payload:payload
            });
        },
        renderOnchangeGet(payload) {
            dispatch({
                type:'marketsales/renderOnchangeGet',
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
        <MarketSalesContent {...props} />
    );

};

function mapStateToProps({ marketsales }) {
    return { marketsales };
}

export default connect(mapStateToProps)(MarketSales);
