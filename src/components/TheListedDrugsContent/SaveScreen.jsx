import './style.css';
import React, { PropTypes , Component } from 'react';
import { Modal , Input} from 'antd';
import {routerRedux} from 'dva/router';
import axios from 'axios';
import { message } from 'antd';
import useful from 'useful';

message.config({
    top: 50,
    duration: 2,
});

class SaveScreen extends Component {

    state = {
        visible: false,
        confirmLoading:false
    }

    handleOk() {
        const input = this.refs.input && this.refs.input.value || '';
        this.saveScreening({
            title:input
        });
    }

    handleCancel() {
        this.setState({
            visible: false
        });
    }

    showModal() {
        this.setState({
            visible: true
        })
    }

    deleteLs(payload) {
        //// 单选
        // const querydata = this.props.querydata;
        // const attr = payload.attr;
        // let newQueryData = {};
        // for(let i in querydata) {
        //     if(i!=attr) {
        //         newQueryData[i] = querydata[i]
        //     }
        // }
        // this.props.doSearchFn(newQueryData);

        //多选
        const querydata = this.props.querydata;
        const attr = payload.attr;
        const index = payload.index;
        const from = payload.from;
        let newQueryData = {};//新的querydata
        if(index || index == 0) {
            //多选的话要根据索引index来删除
            for(let i in querydata) {
                if(i!=attr) {
                    newQueryData[i] = querydata[i]
                } else if(i==attr) {
                    let mapls = querydata[i];
                    let newmap = [];
                    mapls.map((data,i)=>{
                        if(index!=i) {
                            newmap.push(data);
                        }
                    });
                    newQueryData[i] = newmap;
                }
            }
        }else {
            //单选直接根据attr来删除
            for(let i in querydata) {
                if(i!=attr) {
                    newQueryData[i] = querydata[i]
                }
            }
        }



        this.props.doSearchFn(newQueryData);

        if(querydata.from == 'toSelect') {
            const time = new Date().getTime();
            this.props.updateStateLeftNav({
                toSelectReset:time+3
            });
        }
    }

    querySave(params) {

        const self = this;
        axios({
            method: 'post',
            url: "http://api2.drugsea.cn/mysearch",
            data:JSON.stringify(params)
        }).then(function (response) {
            const data = response && response.data;
            if(data && data.api_status == 'success') {
                message.success('保存成功！');

                const time = new Date().getTime();
                self.props.updateStateLeftNav({
                    myScreeningReset:time+3
                });

                self.setState({
                    visible: false
                });
            } else {
                message.error('保存失败！');
            }
        }).catch(function (error) {
            return error;
        });

    }

    saveScreening(params) {
        const DsUserInfo = useful.getCookie('DsUserInfo') || '';
        const objectDsUserInfo = DsUserInfo && JSON.parse(DsUserInfo) || {};

        const querydata = this.props.querydata;
        const title = params.title;
        let db;
        let dataput = {};

        if(this.props.render == 'zgss') {
            db = 'cnProduct';
        } else if(this.props.render == 'mgss') {
            db = 'cnProduct';
        } else if(this.props.render == 'omss') {
            db = 'cnProduct';
        } else if(this.props.render == 'rbss') {
            db = 'cnProduct';
        }

        dataput.db = db;
        dataput.title = title;
        dataput.search_condition = querydata;
        dataput.user = objectDsUserInfo.usrename;
        this.querySave(dataput);
    }

    render() {
        const querydata = this.props.querydata;
        const self = this;
        let list;
        let listdata = [];

            for(let attr in querydata) {
                if(attr!='from' && querydata[attr]) {
                    if(typeof(querydata[attr]) == 'object') {
                        if(querydata[attr].length) {
                            listdata.push({
                                attr:attr,
                                data:querydata[attr],
                                from:querydata['from']
                            });
                        }
                    } else {
                        listdata.push({
                            attr:attr,
                            data:querydata[attr],
                            from:querydata['from']
                        });
                    }
                }
            }

            // // 单选
            // list = listdata.map((data) => {
            //     return (
            //         <li className="xh-fl" onClick={()=>{self.deleteLs({
            //             attr:data.attr
            //         })}}>{data.data}</li>
            //     )
            // });

            list = listdata.map((data,index) => {
                //querydata里的数据格式分为两类 一类为数组key:[,,] 一类为字符串key:'value'

                if(data && data.data && typeof(data.data) == 'object'){
                    let smalllist = data.data && data.data.map((d,i)=>{
                            return (
                                <li className="xh-fl" onClick={()=>{self.deleteLs({
                                    attr:data.attr,
                                    index:i,
                                    from:data.from
                                })}}>{d}</li>
                            )
                        });

                    return smalllist
                } else {
                    return (
                        <li className="xh-fl" onClick={()=>{self.deleteLs({
                            attr:data.attr,
                        })}}>{data.data}</li>
                    )
                }


            });


        return (
            <div className="xh-fl xh-screen-left">
                {/*<!--筛选条件-->*/}
                <ul className="xh-fl xh-screen-btn-wrap">
                    {list}
                </ul>
                {/*<!--保存按钮-->*/}
                {querydata && listdata.length?<a href="javascript:;" className="xh-fl xh-btn xh-preservation-btn" onClick={()=>{this.showModal()}}>保存筛选</a>:""}
                <Modal title="添加到我的收藏"
                       visible={this.state.visible}
                       onOk={()=>this.handleOk()}
                       confirmLoading={this.state.confirmLoading}
                       onCancel={()=>this.handleCancel()}
                >
                    <p>
                        名称：
                        <input placeholder="名称" ref="input"/>
                    </p>
                </Modal>
            </div>
        )
    }
}


export default SaveScreen;

SaveScreen.propTypes = {};
