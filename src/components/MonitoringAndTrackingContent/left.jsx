import React, { PropTypes , Component } from 'react';
import OpenAndClose from 'components/openAndClose/openAndClose';
class Left extends Component {

    render() {

        return (
            <ul className="xh-sidebar-wrap">
                <OpenAndClose title="监测系统" show={true} render={true}>
                    <ul className="xh-sidebar-track-ul" style={{display:'block'}} >
                        <li>
                            <a href="javascript:;" className={this.props.lefttype=='xssypjk'?'active':''} onClick={()=>{this.props.updateState({lefttype:'xssypjk'})}} >新上市药品监视</a>
                        </li>
                        <li>
                            <a href="javascript:;" className={this.props.lefttype=='xlcssjc'?'active':''} onClick={()=>{this.props.updateState({lefttype:'xlcssjc'})}} >新临床试验监测</a>
                        </li>
                        <li>
                            <a href="javascript:;" className={this.props.lefttype=='zyxyjc'?'active':''} onClick={()=>{this.props.updateState({lefttype:'zyxyjc'})}}>在研新药监测</a>
                        </li>
                        <li>
                            <a href="javascript:;" className={this.props.lefttype=='zgzcss'?'active':''} onClick={()=>{this.props.updateState({lefttype:'zgzcss'})}}>中国注册受理</a>
                        </li>
                        <li>
                            <a href="javascript:;" className={this.props.lefttype=='xbdjc'?'active':''} onClick={()=>{this.props.updateState({lefttype:'xbdjc'})}}>新靶点监测</a>
                        </li>
                    </ul>
                </OpenAndClose>
                <OpenAndClose title="追踪系统">
                    <ul className="xh-sidebar-track-ul" style={{display:'block'}} >
                        <li>
                            <a href="javascript:;" className={this.props.lefttype=='ypzz'?'active':''} onClick={()=>{this.props.updateState({lefttype:'ypzz'})}}>药品追踪</a>
                        </li>
                        <li>
                            <a href="javascript:;" className={this.props.lefttype=='zcsszz'?'active':''} onClick={()=>{this.props.updateState({lefttype:'zcsszz'})}}>注册受理追踪</a>
                        </li>
                        <li>
                            <a href="javascript:;" className={this.props.lefttype=='zbdtzz'?'active':''} onClick={()=>{this.props.updateState({lefttype:'zbdtzz'})}}>招标动态追踪</a>
                        </li>
                    </ul>
                </OpenAndClose>
            </ul>
        )

    }

}


export default Left;

Left.propTypes = {};