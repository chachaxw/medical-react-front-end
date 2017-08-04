import React from 'react';
import {connect} from 'dva';
import TopNavContent from 'components/TopNav/TopNav';

const TopNav = ({location, dispatch , topnav }) => {

    const props = {
            ...topnav
    }

    return (
        <TopNavContent {...props} />
    );

};

function mapStateToProps({ topnav }) {
    return { topnav };
}

export default connect(mapStateToProps)(TopNav);
