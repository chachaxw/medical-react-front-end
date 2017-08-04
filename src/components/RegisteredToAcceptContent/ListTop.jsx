import './style.css';
import React, { PropTypes , Component } from 'react';
import {routerRedux} from 'dva/router';
import formatdata from 'formatdata';

class ListTop extends Component {

    gotodetail(payload) {
        this.props.jumpUrl(routerRedux.push({
            pathname:'medicalretrieval/indexdetail',
            query:{
                somequery:'xxxx',
                from:'thelisteddrugsdetail'
            }
        }));
    }

    render() {

        const header = formatdata({
            type:'registeredheader',
            data:this.props.browsing
        });

        return (
            <div>
                {header}
            </div>

        )

    }
}


export default ListTop;

ListTop.propTypes = {};
