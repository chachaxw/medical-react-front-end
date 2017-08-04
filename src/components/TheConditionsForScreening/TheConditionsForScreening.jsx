import './style.css';
import React, { PropTypes , Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import OpenAndCloseWithquery from './OpenAndCloseWithquery';
import RadioCheck from './RadioCheck';

class TheConditionsForScreening extends Component {

    render() {

        const renderListDataSelf = this.props.renderListDataSelf;

        const props = this.props;
        const renderList = renderListDataSelf.map((data) => {
            return (
                <OpenAndCloseWithquery datasource={data} {...props} key={data.key}>
                    <RadioCheck datasource={data} {...props} key={data.key}/>
                </OpenAndCloseWithquery>
            )
        });

        return (
            <Form>
                <ul className="xh-sidebar-list-wrap height-ls">
                    {renderList}
                </ul>
            </Form>
        )

    }
}

const returndata = Form.create()(TheConditionsForScreening);


export default returndata;

TheConditionsForScreening.propTypes = {};
