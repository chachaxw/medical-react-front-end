import './style.css';
import React, { PropTypes , Component } from 'react';
import { message } from 'antd';
import axios from 'axios';
import useful from 'useful';

message.config({
    top: 50,
    duration: 2,
});
class TheScreening extends Component {

    state = {
        list:[]
    }

    queryRender() {
        const self = this;

        axios({
            method: 'post',
            url: self.props.queryurl,
            data:{}
        }).then(function (response) {
            const data = response && response.data;
            if(data && data.api_status == 'success') {
                self.setState({
                    list:data.data
                });
            } else {
                message.error('请求失败！');
            }
        }).catch(function (error) {
            return error;
        });
    }

    delectls(params) {
        const id = params.id;
        const self = this;

        axios({
            method: 'post',
            url: self.props.delectLS+id,
            data:{}
        }).then(function (response) {

            const data = response && response.data;
            if(data && data.api_status == 'success') {

                message.success('删除成功！');
                self.queryRender();

            } else {

                message.error('删除失败！');

            }

        }).catch(function (error) {
            return error;
        });
    }

    componentDidMount() {

        this.queryRender();

    }

    onSearch(payload) {
        message.success('写入成功！');
        this.props.doSearchFn(payload);
    }

    render() {

        const list = this.state.list || [];
        const self = this;
        const renderList = list.map((data,index) => {
            return (
                <span onClick={() => {
                    this.onSearch(data.search_condition)
                }}>
                    {data.title}
                    <span onClick={self.delectls({id:data.id})}> 删除</span>
                </span>
            )
        });

        return (
            <div className="xh-side-key-search xh-side-myscreening">
                {renderList}
            </div>
        )
    }
}


export default TheScreening;

TheScreening.propTypes = {};
