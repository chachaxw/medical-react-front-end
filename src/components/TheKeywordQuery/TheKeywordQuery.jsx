import './style.css';
import React, { PropTypes , Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import formatdata from 'formatdata';
const FormItem = Form.Item;

class TheKeyWordQueryls extends Component {

    search() {
        const form = this.props.form;
        const self = this;
        const doSearchFn = this.props.doSearchFn;
        const updateState = this.props.updateState;
        form.validateFields((err, values) => {
            if (!err) {
                const payload = Object.assign({},values);
                const queryData = self.props.querydata;
                const queryDataOb = Object.assign({},queryData);
                let newpayload = {...queryDataOb,...payload};
                newpayload.from = 'keywords';
                updateState({keywordsquery:payload});
                doSearchFn(newpayload);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const renderList = this.props.renderList || [];
        const listin = renderList.map((data) => {
            const key = data.key;
            return (
                <li>
                    <FormItem>
                        {getFieldDecorator(key)(

                                <Input prefix={<Icon type="search" style={{ fontSize: 13 , color: "#b1b1b1"}} />} placeholder={data.placeholder} />

                        )}
                    </FormItem>
                </li>
            )
        });
        return (
            <div className="xh-sidebar-query-criteria">
                <ul>
                    <Form>
                        {listin}
                        <FormItem>
                            <div className="xh-side-search-btn">
                                <a href="javascript:;" onClick={()=>{this.search()}}>查询</a>
                            </div>
                        </FormItem>
                    </Form>
                </ul>
            </div>
        )

    }
}

const Returndata = Form.create(
    {
        onFieldsChange(props, changedFields) {
            props.onChange(changedFields);
        },
        mapPropsToFields(props) {
            // console.log(props,'props');
            return {
                ...props
            };
        },
        onValuesChange(_, values) {
            // console.log(values);
        }
    }
)(TheKeyWordQueryls);


class TheKeyWordQuery extends Component {

    handleFormChange = (changedFields) => {
        // console.log(changedFields,'changedFields');
        // this.setState({
        //     fields: { ...this.state.fields, ...changedFields },
        // });
    }

    render() {
        const queryData = this.props.querydata;
        const queryDateObj = Object.assign({},queryData);
        //把｛key：value｝形式转换成｛key：｛value：value｝｝形式
        const fields = formatdata({
            type:'formatFormValue',
            data:queryDateObj
        });

        return (
            <div>
                <Returndata {...fields} {...this.props} onChange={this.handleFormChange} />
            </div>
        );
    }
}


export default TheKeyWordQuery;

TheKeyWordQuery.propTypes = {};
