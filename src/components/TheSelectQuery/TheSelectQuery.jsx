import './style.css';
import React, { PropTypes , Component } from 'react';
import { Form, Icon, Input, Button, Checkbox , Radio} from 'antd';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
class TheSelectQuery extends Component {

    componentDidMount() {
        this.props.renderTheSelect({
            url:this.props.url,
            offsetSelect:0
        });
    }

    onChangeFn(data) {

        const form = this.props.form;
        // const TheSelectContent = this.props.TheSelectContent || [];
        const self = this;
        setTimeout(() => {
            const value = form.getFieldsValue();
            const query = value && value.key;
            const queryOb = Object.assign({},query);

            let newpayload = {...queryOb};

            const doSearchFn = this.props.doSearchFn;
            newpayload.from = 'toSelect';
            doSearchFn(newpayload);

        },10);

    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const TheSelectContent = this.props.TheSelectContent || [];
        const onChange = (data) => this.onChangeFn(data);
        const selectShowMore = this.props.SelectShowMore;
        if(!TheSelectContent || !TheSelectContent.length) {
            return (
                <span style={{paddingLeft:"15px"}}>
                    暂无
                </span>
            )
        }

        const group = TheSelectContent.map((data,index)=>{
            if(selectShowMore) {
                return (
                    <Radio value={data['search_condition']}>
                        <span>
                            {data['title']}
                        </span>
                    </Radio>
                )
            }else {
                if(index<4) {
                    return (
                        <Radio value={data['search_condition']}>
                        <span>
                            {data['title']}
                        </span>
                        </Radio>
                    )
                }
            }

        });

        return (
            <div className="xh-sidebar-checkbox-wrap">
                {TheSelectContent && TheSelectContent.length?(
                        <FormItem>
                            {getFieldDecorator('key')(
                                <RadioGroup onChange={()=>onChange()} >
                                    {group}
                                </RadioGroup>
                            )}
                        </FormItem>
                    ):"查询中..."}
                {this.props.SelectShowMore?<div className="morels" onClick={()=>{this.props.updateState({SelectShowMore:false})}}>收起></div>:<div className="morels" onClick={()=>{this.props.updateState({SelectShowMore:true})}}>更多></div>}
            </div>
        )


        // return (
        //     <div className="xh-sidebar-query-selects">
        //         <Form>
        //             {listin}
        //         </Form>
        //     </div>
        // )

    }
}

const returndata = Form.create()(TheSelectQuery);


export default returndata;

TheSelectQuery.propTypes = {};
