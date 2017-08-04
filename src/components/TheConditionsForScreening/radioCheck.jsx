import './style.css';
import React, { PropTypes , Component } from 'react';
import { Form , Radio , Checkbox } from 'antd';
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;

import axios from 'axios';
import qs from 'qs';

const FormItem = Form.Item;

class RadioCheck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content:[]
        }
    }

    onCheck() {
        const self = this;
        setTimeout(() => {
            const form = this.props.form;
            const doSearchFn = this.props.doSearchFn;
            const values = form.getFieldsValue();
            console.log(values,'values');
            const payload = Object.assign({},values);

            const queryData = self.props.querydata;
            const queryDataOb = Object.assign({},queryData);
            let newpayload = {...queryDataOb,...payload};

            newpayload.from = 'screening';
            doSearchFn(newpayload);
        },10);
    }

    onChange() {
        setTimeout(() => {
            const form = this.props.form;
            const doSearchFn = this.props.doSearchFn;
            const values = form.getFieldsValue();
            const payload = Object.assign({},values);
            payload.from = 'screening';
            doSearchFn(payload);
        },10);
    }

    queryRadioData(url,options) {
        const self = this;
        axios({
            method: 'get',
            url: url,
            params:options.data
        }).then(function (response) {
            const data = response && response.data;
            if(data && data.code == '208') {
                localStorage.clear();
                window.location.hash = '';
            }else if(data && data.api_status == 'success') {
                const content = data.content || [];
                self.setState({
                    content:content
                })
            }

        }).catch(function (error) {
            return error;
        });
    }

    componentDidMount() {
        const datasource = this.props.datasource;
        const queryUrl = datasource.queryUrl;
        const keywordsquery = this.props.keywordsquery;
        this.queryRadioData(queryUrl,{
            data:{...keywordsquery}
        });
    }

    render() {

        const { getFieldDecorator } = this.props.form;
        const content = this.state.content || [];
        const datasource = this.props.datasource;
        const key = datasource.key;
        const self = this;

        if(datasource.useCheckbox) {

            let option = [];
            content.map((data)=>{
                const kuhao = data['ct'] || data['sales_sum'];
                option.push({
                    label:`${data[key] || '空'}(${kuhao})`,
                    value:data[key] || '空',
                    // checked:true
                })
            });

            const value = self.props.querydata && self.props.querydata[key]

            return (
                <div className="xh-sidebar-checkbox-wrap">
                    {content && content.length?(
                            <FormItem>
                                {getFieldDecorator(key,{
                                    valuePropName: 'checked',
                                })(
                                    <CheckboxGroup options={option} {...self.props} value={value} onChange={()=>self.onCheck()} />
                                )}
                            </FormItem>
                        ):"查询中..."}
                </div>
            )

        }

        const group = content.map((data)=>{
            const kuhao = data['ct'] || data['sales_sum'];
            return (
                <Radio value={data[key]}>
                    <span>
                        {data[key]}({kuhao})
                    </span>
                </Radio>
            )
        });




        return (
            <div className="xh-sidebar-checkbox-wrap">
                {content && content.length?(
                    <FormItem>
                        {getFieldDecorator(key)(
                            <RadioGroup onChange={()=>self.onChange()}>
                                {group}
                            </RadioGroup>
                        )}
                    </FormItem>
                    ):"查询中..."}
            </div>
        )

    }
}

export default RadioCheck;

RadioCheck.propTypes = {};
