
/*
 *   需要传参 url 为图片或者pdf的地址
 *   visible 为是否展示
 *   handleClose:为关闭的函数
 * */
import React, {PropTypes, Component} from 'react';
import './style.css';
import classnames from 'classnames';

export default class OpenImg extends Component {

    render() {
        const classname = classnames({'normalfloat':!this.props.showimg,'normalfloat active':this.props.showimg});
        let render;
        if(this.props.url && this.props.url.match('.pdf')) {
            render = (
                <iframe src={this.props.url} style={{width:'100%',height:'100%'}}>
                </iframe>
            )
        } else {
            render = (<div className="body-img-fls">
                        <img src={this.props.url} />
                    </div>
            )
        }

        return (
            <div className={classname}>
                <div className='normalfloatWrap'>
                    <div className="title-ls">图片预览</div>
                    {render}
                    <div className="bottom-img-fls">
                        <div className="close-img-wrap" onClick={()=>this.props.updateState({showimg:false})}>关闭</div>
                    </div>
                </div>
            </div>
        )
    }
}
