import React, { PropTypes , Component } from 'react';
import Xssypjk from './Xssypjk';
import Xlcssjc from './Xlcssjc';
class Content extends Component {

    render() {
        if(this.props.lefttype == 'xssypjk') {
            return (
                <Xssypjk {...this.props} />
            )
        } else if(this.props.lefttype == 'xlcssjc') {
            return (
                <Xlcssjc {...this.props} />
            )
        } else if(this.props.lefttype == 'zyxyjc') {

        } else if(this.props.lefttype == 'zgzcss') {

        } else if(this.props.lefttype == 'xbdjc') {

        } else if(this.props.lefttype == 'ypzz') {

        } else if(this.props.lefttype == 'zcsszz') {

        } else if(this.props.lefttype == 'zbdtzz') {

        }

    }
}


export default Content;

Content.propTypes = {};