import './style.css';
import React, { PropTypes , Component } from 'react';
import tj1 from 'public/img/tj1.png';
import structure from 'public/img/structure.jpg';

class key_message2 extends Component {

    render() {
        const content = this.props.content && this.props.content[0] || {};
        return (
            <div className="xh-details-show-each">
                <h4>关键信息</h4>
                <div className="xh-details-key">
                    <ul className="xh-clearfix">
                        <li className="xh-width-3-1">是否通过一致性评价：否</li>
                        <li className="xh-width-3-1">是否289目录品种：是 </li>
                        <li className="xh-width-3-1">是否已经备案参比制剂：是，备案信息</li>
                    </ul>
                </div>
            </div>
        )

    }
}


export default key_message2;

key_message2.propTypes = {};