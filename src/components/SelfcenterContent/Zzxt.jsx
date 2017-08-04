import React , { PropTypes ,Component } from 'react';
class Zzxt extends Component {

    render() {
        const  zzxt = this.props.zzxt || {};
        const type = zzxt.type || '';
        const queryData = zzxt.queryData || {};

        const type2 = zzxt && zzxt.queryData && zzxt.queryData.type || '';
        const data = zzxt && zzxt.data || [];
        const self = this;
        let bodyin;

        if(type == 'ypzz') {
            bodyin = (
                <div className="xh-content-list-wrap xh-personal-center-list">
                    <div className="xh-content-list-heard xh-proportion">
                        <span className="xh-text-left">通用名</span>
                        <span>临床试验</span>
                        <span>医学进展</span>
                        <span>其他</span>
                        <span>操作</span>
                    </div>
                    <ul className="xh-content-list-cont">
                        <li className="xh-proportion">
                            <span className="xh-text-left">硫酸氢氯呲格雷片</span>
                            <span>
                                <a href="javascript:;" className="xh-details-btn">取消追踪</a>
                            </span>
                            <span>
						  	 	<a href="javascript:;" className="xh-details-btn active">追踪</a>
                            </span>
                            <span>
						  	 	<a href="javascript:;" className="xh-details-btn">取消追踪</a>
						  	</span>
                            <span>
						  	 	<a href="javascript:;" className="xh-details-btn">操作</a>
						  	</span>
                        </li>
                        <li className="xh-proportion">
                            <span className="xh-text-left">硫酸氢氯呲格雷片</span>
                            <span>
                                <a href="javascript:;" className="xh-details-btn">取消追踪</a>
                            </span>
                            <span>
						  	 	<a href="javascript:;" className="xh-details-btn active">追踪</a>
                            </span>
                            <span>
						  	 	<a href="javascript:;" className="xh-details-btn">取消追踪</a>
						  	</span>
                            <span>
						  	 	<a href="javascript:;" className="xh-details-btn">操作</a>
						  	</span>
                        </li>
                        <li className="xh-proportion">
                            <span className="xh-text-left">硫酸氢氯呲格雷片</span>
                            <span>
                                <a href="javascript:;" className="xh-details-btn">取消追踪</a>
                            </span>
                            <span>
						  	 	<a href="javascript:;" className="xh-details-btn active">追踪</a>
                            </span>
                            <span>
						  	 	<a href="javascript:;" className="xh-details-btn">取消追踪</a>
						  	</span>
                            <span>
						  	 	<a href="javascript:;" className="xh-details-btn">操作</a>
						  	</span>
                        </li>
                        <li className="xh-proportion">
                            <span className="xh-text-left">硫酸氢氯呲格雷片</span>
                            <span>
                                <a href="javascript:;" className="xh-details-btn">取消追踪</a>
                            </span>
                            <span>
						  	 	<a href="javascript:;" className="xh-details-btn active">追踪</a>
                            </span>
                            <span>
						  	 	<a href="javascript:;" className="xh-details-btn">取消追踪</a>
						  	</span>
                            <span>
						  	 	<a href="javascript:;" className="xh-details-btn">操作</a>
						  	</span>
                        </li>
                        <li className="xh-proportion">
                            <span className="xh-text-left">硫酸氢氯呲格雷片</span>
                            <span>
                                <a href="javascript:;" className="xh-details-btn">取消追踪</a>
                            </span>
                            <span>
						  	 	<a href="javascript:;" className="xh-details-btn active">追踪</a>
                            </span>
                            <span>
						  	 	<a href="javascript:;" className="xh-details-btn">取消追踪</a>
						  	</span>
                            <span>
						  	 	<a href="javascript:;" className="xh-details-btn">操作</a>
						  	</span>
                        </li>
                        <li className="xh-proportion">
                            <span className="xh-text-left">硫酸氢氯呲格雷片</span>
                            <span>
                                <a href="javascript:;" className="xh-details-btn">取消追踪</a>
                            </span>
                            <span>
						  	 	<a href="javascript:;" className="xh-details-btn active">追踪</a>
                            </span>
                            <span>
						  	 	<a href="javascript:;" className="xh-details-btn">取消追踪</a>
						  	</span>
                            <span>
						  	 	<a href="javascript:;" className="xh-details-btn">操作</a>
						  	</span>
                        </li>
                    </ul>
                </div>
            )
        } else if(type == 'zcsl') {
            let bodyinin;
            if(type2 == 'slh') {

                const list = data.map((d) => {

                    const note = d.note;
                    const noteparse = note && JSON.parse(note) || {};
                    const drug_name = noteparse.drug_name;
                    const enterprise = noteparse.enterprise;

                    return (
                        <li className="xh-proportion">
                            <span className="xh-text-left">{d.item || '/'}</span>
                            <span>{drug_name || '/'}</span>
                            <span>{enterprise || '/'}</span>
                            <span>
                                <a href="javascript:;" className="xh-details-btn" onClick={()=>{self.props.deleteZC({type:'slh',item:d.item,subscribe:0,zzxyquery:{type:type,queryData:queryData}})}}>删除</a>
                            </span>
                        </li>
                    )
                });

                bodyinin = (
                    <div className="xh-content-list-wrap xh-personal-center-list-1">
                        <div className="xh-content-list-heard xh-proportion">
                            <span className="xh-text-left">受理号</span>
						    <span>药品名称</span>
						    <span>企业</span>
						    <span>操作</span>
                        </div>
                        <ul className="xh-content-list-cont">
                            {list}
                        </ul>
                    </div>
                )
            } else if(type2 == 'enterprise') {

                const list = data.map((d) => {

                    const item = d.item;

                    return (
                        <li className="xh-proportion">
                            <span>{item || '/'}</span>
                            <span>
                                <a href="javascript:;" className="xh-details-btn" onClick={()=>{self.props.deleteZC({type:'enterprise',item:d.item,subscribe:0,zzxyquery:{type:type,queryData:queryData}})}}>删除</a>
                            </span>
                        </li>
                    )
                });

                bodyinin = (
                    <div className="xh-content-list-wrap xh-personal-center-list-2">
                        <div className="xh-content-list-heard xh-proportion">
                            <span className="xh-text-left">企业</span>
						    <span>操作</span>
                        </div>
                        <ul className="xh-content-list-cont">
                            {list}
                        </ul>
                    </div>
                )
            } else if(type2 == 'drug_name') {
                const list = data.map((d) => {

                    const item = d.item;

                    return (
                        <li className="xh-proportion">
                            <span>{item || '/'}</span>
                            <span>
                                    <a href="javascript:;" className="xh-details-btn" onClick={()=>{self.props.deleteZC({type:'enterprise',item:d.item,subscribe:0,zzxyquery:{type:type,queryData:queryData}})}}>删除</a>
                                </span>
                        </li>
                    )
                });
                bodyinin = (
                    <div className="xh-content-list-wrap xh-personal-center-list-2">
                        <div className="xh-content-list-heard xh-proportion">
                            <span className="xh-text-left">企业</span>
                            <span>操作</span>
                        </div>
                        <ul className="xh-content-list-cont">
                            {list}
                        </ul>
                    </div>
                )
            } else if(type2 == 'psbg') {
                bodyinin = (
                    <ul className="xh-personal-center-ul">
                        <li>
                            <span>审评报告</span>
                            <span>
								<a href="javascript:;">
									<i className="xh-toggle xh-toggle-off"></i>
									关闭
								</a>
							</span>
                            <span>关闭后，将不再接受审评报告</span>
                        </li>
                        <li>
                            <span>审评报告</span>
                            <span>
								<a href="javascript:;">
									<i className="xh-toggle xh-toggle-on"></i>
									打开
								</a>
							</span>
                            <span>关闭后，将不再接受审评报告</span>
                        </li>
                    </ul>
                )
            }

            bodyin = (
                <div>
                    <div className="xh-clearfix xh-personal-center-screen xh-personal-center-screen-2">
                        <ul className="xh-fr">
                            <li className="xh-fl">
                                <a href="javascript:;" onClick={() => {
                                    this.props.zzxtFn({
                                        type:'zcsl',
                                        queryData:{
                                            type:'slh',
                                            offset:0
                                        }
                                    });
                                }} className={type2=='slh'?'active':''}>受理号</a>
                            </li>
                            <li className="xh-fl">
                                <a href="javascript:;" onClick={() => {
                                    this.props.zzxtFn({
                                        type:'zcsl',
                                        queryData:{
                                            type:'enterprise',
                                            offset:0
                                        }
                                    });
                                }} className={type2=='enterprise'?'active':''}>企业</a>
                            </li>
                            <li className="xh-fl">
                                <a href="javascript:;" onClick={() => {
                                    this.props.zzxtFn({
                                        type:'zcsl',
                                        queryData:{
                                            type:'drug_name',
                                            offset:0
                                        }
                                    });
                                }} className={type2=='drug_name'?'active':''}>药品名称</a>
                            </li>
                            <li className="xh-fl">
                                <a href="javascript:;" onClick={() => {
                                    this.props.zzxtFn({
                                        type:'zcsl',
                                        queryData:{
                                            type:'psbg',
                                            offset:0
                                        }
                                    });
                                }} className={type2=='psbg'?'active':''}>审评报告</a>
                            </li>
                        </ul>
                    </div>
                    {bodyinin}
                </div>
            )
        } else if(type == 'zbdt') {
            let dataarr = [];
            for(let attr in data) {
                dataarr.push({
                    city:attr,
                    subscribe:data[attr] || 0
                });
            }

            const list = dataarr.map((data)=>{
                return (
                    <li className="xh-proportion">
                        <span>{data.city || '/'}</span>
                        <span>
                            {data.subscribe == 1?<a href="javascript:;" className="xh-mw-a xh-details-btn" onClick={()=>{()=>{self.props.zzAndEsc({city:data.city,subscribe:data.subscribe,zzxyquery:{type:type,queryData:queryData}})}}}>取消</a>:<a href="javascript:;" className="xh-mw-a xh-details-btn active">追踪</a>}
                        </span>
                    </li>
                )
            });

            bodyin = (
                <div className="xh-content-list-wrap xh-personal-center-list-2">
                    <div className="xh-content-list-heard xh-proportion">
                        <span className="xh-text-left">地区</span>
                        <span>操作</span>
                    </div>
                    <ul className="xh-content-list-cont">
                        <li className="xh-proportion">
                            <span>北京</span>
                            <span>
                                <a href="javascript:;" className="xh-mw-a xh-details-btn active">追踪</a>
                            </span>
                        </li>
                        <li className="xh-proportion">
                            <span>北京</span>
                            <span>
                                <a href="javascript:;" className="xh-mw-a xh-details-btn active">追踪</a>
                            </span>
                        </li>
                        <li className="xh-proportion">
                            <span>北京</span>
                            <span>
                                <a href="javascript:;" className="xh-mw-a xh-details-btn active">追踪</a>
                            </span>
                        </li>
                        <li className="xh-proportion">
                            <span>北京</span>
                            <span>
                                <a href="javascript:;" className="xh-mw-a xh-details-btn active">追踪</a>
                            </span>
                        </li>
                        <li className="xh-proportion">
                            <span>北京</span>
                            <span>
                                <a href="javascript:;" className="xh-mw-a xh-details-btn active">追踪</a>
                            </span>
                        </li>
                        <li className="xh-proportion">
                            <span>北京</span>
                            <span>
                                <a href="javascript:;" className="xh-mw-a xh-details-btn active">追踪</a>
                            </span>
                        </li>
                    </ul>
                </div>
            )
        }



        return (
            <div className="xh-container-right-wrap">
                {/*<!--筛选部分-->*/}
                <div className="xh-personal-center-screen">
                    {/*<!--筛选条件-->*/}
                    <ul className="xh-clearfix">
                        <li className="xh-fl">
                            <a href="javascript:;" className={type=='ypzz'?"active":""} onClick={()=>{
                                this.props.zzxtFn({
                                    type:'ypzz',
                                    queryData:{
                                        offset:0
                                    }
                                });
                            }}>药品追踪</a>
                        </li>
                        <li className="xh-fl">
                            <a href="javascript:;" className={type=='zcsl'?"active":""} onClick={()=>{
                                this.props.zzxtFn({
                                    type:'zcsl',
                                    queryData:{
                                        type:'slh',
                                        offset:0
                                    }
                                });
                            }}>注册受理追踪</a>
                        </li>
                        <li className="xh-fl">
                            <a href="javascript:;" className={type=='zbdt'?"active":""} onClick={()=>{
                                this.props.zzxtFn({
                                    type:'zbdt',
                                    queryData:{
                                        offset:0
                                    }
                                });
                            }}>招标动态追踪</a>
                        </li>
                    </ul>
                </div>
                {bodyin}
            </div>
        )
    }
}

export default Zzxt;

Zzxt.propTypes = {};