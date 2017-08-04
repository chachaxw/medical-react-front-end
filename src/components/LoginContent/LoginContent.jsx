import './style.css';
import React, { PropTypes , Component } from 'react';
import formatdata from 'formatdata';
import qCoder from 'public/img/q-coder.png'
import classnames from 'classnames';
class LoginContent extends Component {

    render() {
        const reayclass = classnames({'xh-wrap':this.props.render == 'wechat','xh-wrap hidden':this.props.render == 'phone'});
        const reayclass2 = classnames({'xh-wrap':this.props.render == 'phone','xh-wrap hidden':this.props.render == 'wechat'});

        return (
            <div className="LoginContent">

                <div className={reayclass}>
                    <div className="xh-login-absolute">
                        <div className="xh-login-box xh-login-wechat">
                            <h2>微信登录</h2>
                            <div className="xh-wechat-code">
                                <p>微信扫描 直接登录</p>
                                <iframe  scrolling="no" src="https://open.weixin.qq.com/connect/qrconnect?appid=wx6aa3282df56c0037&amp;scope=snsapi_login&amp;redirect_uri=http://db.drugsea.cn/wechat/loggin.php&amp;state=260aa2f72ece11756285aeadd384fbc534&amp;login_type=jssdk&amp;style=black&amp;href=https://www.xanda.cn/css/wx.css?id=2fd2" frameborder="0"></iframe>
                                <p className="xh-mt-24">打开微信，扫码上方二维码，直接注册登录</p>
                            </div>
                            <div className="xh-login-box-mode" onClick={()=>{this.props.updateState({render:'phone'})}}>
                                <p>手机登录</p>
                            </div>
                            <a href="javascript:;" class="xh-login-box-close"></a>
                        </div>
                    </div>
                </div>

                <div className={reayclass2}>
                    <div className="xh-login-absolute">
                        <div className="xh-login-box xh-login-phone">
                            <div className="xh-phone-form">
                                <div className="xh-phone-form-each">
                                    <span>手机号码</span>
                                    <input type="text" placeholder="请输入手机号码" />
                                        <a href="javascript:;">获取验证码</a>
                                </div>
                                <div className="xh-mt-12 xh-phone-form-each">
                                    <span>验证码</span>
                                    <input type="password" placeholder="请输入验证码" />
                                </div>
                                <div className="xh-phone-form-btn">
                                    <a href="javascript:;" className="xh-phone-btn">查 询</a>
                                </div>
                            </div>
                            <div className="xh-login-box-mode" onClick={()=>{this.props.updateState({render:'wechat'})}}>
                                <p>微信登录</p>
                            </div>
                            <a href="javascript:;" className="xh-login-box-close"></a>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


export default LoginContent;

LoginContent.propTypes = {};
