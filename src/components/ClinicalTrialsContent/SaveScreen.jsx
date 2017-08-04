import './style.css';
import React, { PropTypes , Component } from 'react';
import {routerRedux} from 'dva/router';
import { message } from 'antd';
message.config({
    top: 50,
    duration: 2,
});

class SaveScreen extends Component {

    deleteLs(payload) {
        const querydata = this.props.querydata;
        const attr = payload.attr;
        let newQueryData = {};
        for(let i in querydata) {
            if(i!=attr) {
                newQueryData[i] = querydata[i]
            }
        }
        this.props.doSearchFn(newQueryData);
    }

    saveScreening() {
        const querydata = this.props.querydata;
        let screen;

        if(this.props.render == 'qqlcsy') {
            screen = 'myScreeningQqlcsy';
        } else {
            screen = 'myScreeningZglcsy';
        }

        let myScreening = localStorage.getItem(screen) || '';

        if(myScreening) {
            myScreening = JSON.parse(myScreening);
        }else {
            myScreening = [];
        }

        myScreening.push(querydata);
        myScreening = JSON.stringify(myScreening);

        localStorage.setItem(screen,myScreening);
        message.success('保存成功');

        const time = new Date().getTime();
        this.props.updateStateLeftNav({
            myScreeningReset:time+3
        });

    }

    render() {
        const querydata = this.props.querydata;
        const self = this;
        let list;
        let listdata = [];
        if(querydata && querydata.from == "screening") {

            for(let attr in querydata) {
                if(attr!='from' && querydata[attr]) {
                    listdata.push({
                        attr:attr,
                        data:querydata[attr]
                    });
                }
            }

            list = listdata.map((data) => {
                return (
                    <li className="xh-fl" onClick={()=>{self.deleteLs({
                        attr:data.attr
                    })}}>{data.data}</li>
                )
            });
        }

        return (
            <div className="xh-fl xh-screen-left">
                {/*<!--筛选条件-->*/}
                <ul className="xh-fl xh-screen-btn-wrap">
                    {list}
                </ul>
                {/*<!--保存按钮-->*/}
                {querydata && querydata.from == "screening"?<a href="javascript:;" className="xh-fl xh-btn xh-preservation-btn" onClick={()=>{this.saveScreening()}}>保存筛选</a>:""}
            </div>
        )
    }
}


export default SaveScreen;

SaveScreen.propTypes = {};
