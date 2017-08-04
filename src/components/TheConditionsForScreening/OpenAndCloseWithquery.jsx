import './style.css';
import React, { PropTypes , Component } from 'react';
import classnames from 'classnames';

class OpenAndCloseWithquery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show:false,
            render:false
        }
    }

    search() {
        const form = this.props.form;
        const doSearchFn = this.props.doSearchFn;
        form.validateFields((err, values) => {
            if (!err) {
                const payload = Object.assign({},values);
                payload.from = 'keywords';
                doSearchFn(payload);
            }
        });
    }

    changeClose() {
        const show = this.state.show;
        this.setState({
            show:!show,
            render:true
        });
    }

    render() {
        // const { getFieldDecorator } = this.props.form;
        // const renderList = this.props.renderList || [];
        // const listin = renderList.map((data) => {
        //     const key = data.key;
        //     return (
        //         <li>
        //             <FormItem>
        //                 {getFieldDecorator(key, {
        //                 })(
        //
        //                     <Input prefix={<Icon type="search" style={{ fontSize: 13 , color: "#b1b1b1"}} />} placeholder={data.placeholder} />
        //
        //                 )}
        //             </FormItem>
        //         </li>
        //     )
        // });
        const datasource = this.props.datasource;
        const style = this.state.show?{display:'block'}:{display:'none'};
        const self = this;
        const classnamels = classnames({'xh-sidebar-list-2 active':self.state.show,'xh-sidebar-list-2':!self.state.show});
        return (

                <li className={classnamels}>
                    <a href="javascript:;" onClick={()=>this.changeClose()}>{datasource.title}</a>
                    {/*<!--复选框 已隐藏-->*/}
                    <div style={style}>
                        {this.state.render?this.props.children:''}
                    </div>
                </li>

        )
    }
}

export default OpenAndCloseWithquery;

OpenAndCloseWithquery.propTypes = {};
