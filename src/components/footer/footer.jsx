import './style.css';
import React, {PropTypes, Component} from 'react';

class Footer extends Component {

    render() {

        return (
            <div className="xh-index-footer">
                <p>药海数据</p>
                <ul>
                    <li><a href="javascript:;">使用帮助</a></li>
                    <li><a href="javascript:;">关于我们</a></li>
                    <li><a href="javascript:;">加入我们</a></li>
                    <li><a href="javascript:;">联系我们</a></li>
                </ul>
                <p className="m-b">浙ICP备11022812号-2</p>
            </div>
        )
    }
}


export default Footer;

Footer.propTypes = {};
