import React from 'react';
import {connect} from 'dva';
import LoginContent from 'components/LoginContent/LoginContent';

const Login = ({location, dispatch, login}) => {
    const props = {
        ...login,
        updateState(payload) {
            dispatch({
                type:'login/updateState',
                payload:payload
            })
        }
    }

    return (
        <LoginContent {...props} />
    );

};

function mapStateToProps({ login }) {
    return { login };
}

export default connect(mapStateToProps)(Login);
