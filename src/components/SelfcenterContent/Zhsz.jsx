import React , { PropTypes ,Component } from 'react';
class Zhsz extends Component {

    render() {

        const objectDsUserInfo = this.props.objectDsUserInfo || {};

        return (
            <div className="xh-container-right-wrap xh-container-drug-details">
                <div className="xh-details-show xh-pt-36">
                    <div className="xh-details-show-each">
                        <h4>帐号信息</h4>
                        <div className="xh-clearfix xh-details-key xh-mt-24">
                            <div className="xh-details-dl xh-width-1-1">
                                <dl>
                                    <dt>微信：</dt>
                                    <dd className="xh-relative">
                                        {objectDsUserInfo.nickname?objectDsUserInfo.nickname:<a href="javascript:;" className="xh-btn xh-binding-btn">绑定</a>}
                                        <div className="xh-binding-eject">
                                            <img src="../img/q-coder.png" />
                                                <p>打开微信，扫描上方二维码，绑定账号</p>
                                                <a href="javascript:;" className="xh-details-key-li-bomb-box-close-1"></a>
                                        </div>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>手机号：</dt>
                                    <dd>{objectDsUserInfo.phone || '未知'}</dd>
                                </dl>
                                <dl>
                                    <dt>邮箱：</dt>
                                    <dd>{objectDsUserInfo.email || '未知'}</dd>
                                </dl>
                                <dl>
                                    <dt>姓名：</dt>
                                    <dd>{objectDsUserInfo.name || '未知'}</dd>
                                </dl>
                                <dl>
                                    <dt>单位：</dt>
                                    <dd>{objectDsUserInfo.company || '未知'}</dd>
                                </dl>
                                <dl>
                                    <dt>职务：</dt>
                                    <dd>{objectDsUserInfo.position || '未知'}</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className="xh-text-center">
                        <a href="javascript:;" className="xh-keep-btn">保存修改</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Zhsz;

Zhsz.propTypes = {};