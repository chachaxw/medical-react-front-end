import React,{Component} from 'react';
import TopNav from './topNav';

export default class App extends Component {
    render() {

        return (
            <div style={{"height":"100%"}}>
                <TopNav />
                <div style={{paddingTop:'80px'}}>
                    {this.props.children}
                </div>
            </div>
        )

    }
}