import React,{Component} from 'react';
import Spin from './Spin';
import OpenImg from './OpenImg';
export default class AppCommon extends Component {
    render() {
        return (
            <div style={{"height":"100%"}}>
                <Spin/>
                <OpenImg/>
                {this.props.children}
            </div>
        )

    }
}