
/*
 *   需要传参 url 为图片或者pdf的地址
 *   visible 为是否展示
 *   handleClose:为关闭的函数
 * */
import React, {PropTypes, Component} from 'react';
import {Table} from 'antd';
import {Link} from 'dva/router';
import './style.css';

export default class OpenUrl extends Component {

    hide(e) {
        const target = e.target;
        if(target.className.match("showImg")) {
            this.props.handleClose();
        }
    }

    render() {
        console.log('OpenUrl render');
        const url = this.props.url;
        const visible = this.props.visible || false;
        const handleClose = this.props.handleClose;
        const Column = this.props.Column;
        const dataSource = this.props.dataSource;
        const re = /\.pdf/g;

        let renderHTML;
        if(Column) {
            renderHTML =  (<div className="showImgWrap">
                            <div className="tablewrap">
                                <Table columns={Column} dataSource={dataSource} />
                            </div>
                          </div>)
        } else if(re.test(url)) {
            renderHTML = (
                <div className="showImgWrap">
                    <div className="fenge">----------审核pdf文件----------</div>
                    <div className="height-i">
                        <iframe width="800" height="400" src={url} />
                    </div>
                    <div className="guanbi" onClick={()=>{handleClose && handleClose()}}>关闭</div>
                </div>
            );
        } else {
            renderHTML = (
                <div className="showImgWrap">
                    <div className="fenge">----------审核图片----------</div>
                    <div className="height-i">
                        <img src={url}/>
                    </div>
                    <div className="guanbi" onClick={()=>{handleClose && handleClose()}}>关闭</div>
                </div>
            );
        }

        let classname = {};

        if(visible) {
            classname = 'showImg showImg-active';
        } else {
            classname = 'showImg';
        }

        return (
            <div className={classname} onClick={(e)=>this.hide(e)}>
                {renderHTML}
            </div>
        )
    }
}
