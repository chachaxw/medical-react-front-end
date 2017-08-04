import React , { PropTypes ,Component } from 'react';
class Gmzf extends Component {

    render() {
        return (
            <div className="xh-container-right-wrap xh-container-drug-details">
                <div className="xh-details-show xh-pt-36">
                    <div className="xh-details-show-each xh-relative">
                        <h4>会员购买</h4>
                        <div className="xh-content-list-wrap xh-personal-center-list-1 xh-mt-24">
                            <div className="xh-content-list-heard xh-proportion xh-clear-border-bottom">
                                <span className="xh-text-left">会员级别</span>
                                <span>数据查询</span>
                                <span>价格</span>
								<span>操作</span>
                            </div>
                            <ul className="xh-content-list-cont">
                                <li className="xh-proportion xh-clear-border-bottom">
                                    <span className="xh-text-left">普通会员</span>
								  	 <span>数据查询</span>
								  	 <span>1000/年</span>
								  	 <span>
								  	 		<a href="javascript:;" className="xh-details-btn active">购买</a>
								  	 	</span>
                                </li>
                                <li className="xh-proportion xh-clear-border-bottom">
                                    <span className="xh-text-left">普通会员</span>
								  	 <span>数据查询</span>
								  	 <span>1000/年</span>
								  	 <span>
								  	 		<a href="javascript:;" className="xh-details-btn active">购买</a>
								  	 	</span>
                                </li>
                                <li className="xh-proportion xh-clear-border-bottom">
                                    <span className="xh-text-left">普通会员</span>
								  	 <span>数据查询</span>
								  	 <span>1000/年</span>
								  	 <span>
								  	 		<a href="javascript:;" className="xh-details-btn active">购买</a>
								  	 	</span>
                                </li>
                            </ul>
                            <div className="xh-binding-eject-1">
                                <div className="xh-pay-pop">
                                    <dl className="xh-clearfix">
                                        <dt>购买产品：</dt>
                                        <dd>高级会员</dd>
                                    </dl>
                                    <dl className="xh-clearfix">
                                        <dt>支付金额：</dt>
                                        <dd>
                                            <a href="javascript:;">1000元</a>
                                        </dd>
                                    </dl>
                                    <dl className="xh-clearfix">
                                        <dt>支付方式：</dt>
                                        <dd>
                                            <a href="javascript:;" className="xh-pay-pop-btn active">支付方式</a>
                                            <a href="javascript:;" className="xh-pay-pop-btn">支付宝方式</a>
                                            <a href="javascript:;" className="xh-pay-pop-btn">其他方式</a>
                                        </dd>
                                    </dl>
                                </div>
                                <img src="../img/q-coder.png" className="xh-mt-36" />
                                    <p className="xh-mt-12">打开微信</p>
                                    <p>扫码支付</p>
                                    <a href="javascript:;" className="xh-details-key-li-bomb-box-close-1"></a>
                            </div>
                        </div>
                    </div>
                    <div className="xh-details-show-each">
                        <div className="xh-clearfix xh-details-key xh-mt-24">
                            <div className="xh-details-dl xh-width-1-1">
                                <dl>
                                    <dt>客服电话：</dt>
                                    <dd>400-400-0000</dd>
                                </dl>
                                <dl>
                                    <dt>客服QQ：</dt>
                                    <dd>400-400-0000</dd>
                                </dl>
                                <dl>
                                    <dt>客服微信：</dt>
                                    <dd>123456</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gmzf;

Gmzf.propTypes = {};