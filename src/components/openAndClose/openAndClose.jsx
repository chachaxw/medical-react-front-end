import './style.css';
import React, { PropTypes , Component } from 'react';
import classnames from 'classnames';

class OpenAndClose extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show:this.props.show || false,
            render:this.props.render || false
        }
    }

    updateState(payload) {
        this.setState({
            show:payload && payload.show,
            render:true
        });
    }

    render() {

        const self = this;
        const liClassname = classnames({'xh-sidebar-list':!self.state.show,'xh-sidebar-list active':self.state.show});
        const style = this.state.show?{display:'block'}:{display:'none'};
        return (
            <li className={liClassname}>
                <a href="javascript:;" className="xh-sidebar-list-a" onClick={()=>{this.updateState({show:!self.state.show})}}>{this.props.title}</a>
                {this.state.render?(
                    <div style={style}>
                        {this.props.children}
                    </div>):""}

            </li>
        )

    }
}


export default OpenAndClose;

OpenAndClose.propTypes = {};
