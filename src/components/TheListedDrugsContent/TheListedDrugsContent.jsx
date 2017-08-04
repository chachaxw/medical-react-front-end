import './style.css';
import React, { PropTypes , Component } from 'react';
import { Pagination , Table , Badge, Menu, Dropdown, Icon } from 'antd';
import {routerRedux} from 'dva/router';
import classnames from 'classnames';
import formatdata from 'formatdata';
import SaveScreen from './SaveScreen';
import List from './list';
import downtrans from 'public/img/downtrans.png';


class TheListedDrugsContent extends Component {

    updatels () {
        let fenye = document.getElementById('fenyels');
        let lils = fenye.getElementsByTagName('li');

        let qianyiye;
        let houyiye;

        for(let i=0;i<lils.length;i++) {
            if(lils[i].title == '上一页') {
                qianyiye = lils[i];
            } else if(lils[i].title == '下一页') {
                houyiye = lils[i];
            }
        }

        const offset = this.props.offset || 1;
        const tnum = this.props.tnum;
        const length = this.props.length;
        const last = Math.ceil(tnum/length);
        qianyiye.style.visibility = 'visible';
        houyiye.style.visibility = 'visible';

        if((offset == 0 || offset == 1) && offset == last) {
            console.log(qianyiye,houyiye,'houyiyehouyiye');
            qianyiye.style.visibility = 'hidden';
            houyiye.style.visibility = 'hidden';
        } else if(offset == 0 || offset == 1) {
            qianyiye.style.visibility = 'hidden'
        } else if(offset == last) {
            houyiye.style.visibility = 'hidden';
        }
    }

    componentDidUpdate() {
        this.updatels();
    }

    onChange(params) {
        let payload;
        if(this.props.order_by) {
            payload = {
                order_by:this.props.order_by,
                direction:this.props.direction,
                offset:params,
                browsing:this.props.browsing,
                render:this.props.render
            }
        } else {
            payload = {
                offset:params,
                browsing:this.props.browsing,
                render:this.props.render
            }
        }

        this.props.renderOnchangeGet(payload);
    }

    rendermore(params) {
        this.props.renderMore(params);
    }

    onUPDOWNChange(params) {
        //"DESC ASC"
        const order_by = this.props.order_by;
        const direction = this.props.direction;

        if(params.order_by == order_by) {
            params.direction = direction=='DESC'?"ASC":'DESC';
        }else {
            params.direction = 'ASC'
        }
        const payload = {
            ...params,
            offset:this.props.offset,
            browsing:this.props.browsing,
            render:this.props.render
        }
        //direction
        this.props.onUPDOWNChange(payload);

    }

    queryToGetNewChild(params) {

        if(!params) {
            return;
        }
        console.log(params.num);
        if(params.num == 0) {
            return;
        }

        const id = params.id;
        const content = this.props.content;
        const render = this.props.render;
        let url;
        if(render == 'zgss') {
            url = 'http://api2.drugsea.cn/product/cn/list';
        } else if(render == 'mgss') {
            url = 'http://api3.drugsea.cn/fda_drugs/list';
        } else if(render == 'omss') {
            url = 'http://api3.drugsea.cn/ema_drugs/list';
        } else if(render == 'rbss') {
            url = 'http://api3.drugsea.cn/jp_drugs/list';
        }

        params.url = url;

        let newContent = Object.assign([],content);

        if(params.open && params.keyID == this.props.keyID) {
                newContent.map((data) => {
                    if(data.id == id) {
                        data.open = !params.open;
                    }
                });

              this.props.updateState({
                  content:newContent
              });
        } else {
            params.offset = 0;
            this.props.queryToGetNewContent({...params});
        }
    }

    gotodetail(payload) {
        const props = this.props;
        let any = {};

        if(this.props.render == 'rbss') {
            return;
        }

        if(this.props.render == 'zgss') {
            any['auth_num'] = payload.record.auth_num;
        } else if(this.props.render == 'mgss') {
            any['uid'] = payload.record.uid;
        } else if(this.props.render == 'omss') {
            any['id'] = payload.record.id;
        } else if(this.props.render == 'rbss') {
            any['id'] = payload.record.id;
        }

        this.props.jumpUrl(routerRedux.push({
            pathname:'medicalretrieval/thelisteddrugsdetail',
            query:{
                ...any,
                render:props.render,
                from:'thelisteddrugsdetail'
            }
        }));
    }

    render() {

        if(!this.props.renderTable) {
            return (
                <div></div>
            )
        }

        let columns = [];
        let expandedRowRender;
        const props = this.props;
        const self = this;
        const content = this.props.content;
        //控制浏览方式选择的显示隐藏
        const ulClassname = classnames({'xh-box-s xh-box-s-act':props.selectOpen,'xh-box-s':!props.selectOpen});

        //控制当前浏览方式的文案
        const selectText = formatdata({
            type:'selectText',
            data:this.props
        });

        const selectText1 = formatdata({
            type:'selectText',
            data:{
                render:props.render,
                browsing:'ApprovalNumber'
            }
        });

        const selectText2 = formatdata({
            type:'selectText',
            data:{
                render:props.render,
                browsing:'medicines'
            }
        });

        const selectText3 = formatdata({
            type:'selectText',
            data:{
                render:props.render,
                browsing:'enterprise'
            }
        });

        if(this.props.browsing == 'ApprovalNumber') {
            if(this.props.render == 'zgss') {

                expandedRowRender = false;

                columns = [{
                    title:'批准文号',
                    key:'auth_num',
                    dataIndex:'auth_num',
                    drowdown:props.order_by == 'auth_num'?props.direction == 'ASC'?"up":"down":"down",
                    width:'18%',
                    titleClick(data) {
                        // order_by 指定字段
                        // direction 指定方向
                        self.onUPDOWNChange({order_by:'auth_num'})
                    },
                    render(data) {
                        return (
                            <span>
                            {data || '/'}
                        </span>
                        )
                    }
                },{
                    title:'药品名称',
                    key:'drug_name',
                    width:'18%',
                    drowdown:props.order_by == 'drug_name'?props.direction == 'ASC'?"up":"down":"down",
                    titleClick(data) {
                        // order_by 指定字段
                        // direction 指定方向
                        self.onUPDOWNChange({order_by:'drug_name'})
                    },
                    render(data) {
                        return (
                            <span>
                                {data.drug_name}<br/>
                                {data.drug_name_en}
                            </span>
                        )
                    }
                },{
                    title:'规格',
                    key:'specification',
                    dataIndex:'specification',
                    drowdown:props.order_by == 'specification'?props.direction == 'ASC'?"up":"down":"down",
                    width:'18%',
                    // className:'spancenter-l',
                    titleClick(data) {
                        // order_by 指定字段
                        // direction 指定方向
                        self.onUPDOWNChange({order_by:'specification'})
                    },
                    // className='spancenter'
                    render(data) {
                        return (
                            <span >
                                {data || '/'}
                            </span>
                        )
                    }
                },{
                    title:'生产企业',
                    key:'manufacture',
                    // dataIndex:'manufacture',
                    drowdown:props.order_by == 'manufacture'?props.direction == 'ASC'?"up":"down":"down",
                    width:'18%',
                    // className:'spancenter-l',
                    titleClick(data) {
                        // order_by 指定字段
                        // direction 指定方向
                        self.onUPDOWNChange({order_by:'manufacture'})
                    },
                    render(data) {
                        // className='spancenter'
                        if(data.manufacture == data.manufacture_en) {
                            return (
                                <span>
                                    {data.manufacture || '/'}
                                </span>
                            )
                        }

                        return (
                            <span>
                                {data.manufacture || '/'}<br/>
                                {data.manufacture_en || '/'}
                            </span>
                        )
                    }
                },{
                    title:'关键信息',
                    key:'key_info',
                    dataIndex:'key_info',
                    width:'18%',
                    // className:'spancenter-l',
                    // className='spancenter'
                    render(data) {
                        return (
                            <span>
                                {data || '/'}
                            </span>
                        )
                    }
                },{
                    title:'详情',
                    key:'detaills',
                    width:'10%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className='spancenter cursor' onClick={()=>{self.gotodetail({record:data})}}>
                                查看详情
                            </span>
                        )
                    }
                }];
            } else if(this.props.render == 'mgss') {

                expandedRowRender = false;

                columns = [{
                    title:'申请号',
                    key:'ApplNo',
                    dataIndex:'ApplNo',
                    width:'14%',
                    drowdown:props.order_by == 'ApplNo'?props.direction == 'ASC'?"up":"down":"down",
                    titleClick(data) {
                        // order_by 指定字段
                        // direction 指定方向
                        self.onUPDOWNChange({order_by:'ApplNo'})
                    },
                    render(data) {
                        return (
                            <span>
                                {data || '/'}
                            </span>
                        )
                    }
                },{
                    title:'药品名称',
                    key:'drug_name',
                    width:'14%',
                    className:'spancenter-l',
                    drowdown:props.order_by == 'drug_name'?props.direction == 'ASC'?"up":"down":"down",
                    titleClick(data) {
                        // order_by 指定字段
                        // direction 指定方向
                        self.onUPDOWNChange({order_by:'drug_name'})
                    },
                    render(data){
                        return (
                            <span className="spancenter">
                                {data.drug_name}<br/>
                                {data.drug_name_en}
                            </span>
                        )
                    }
                },{
                    title:'商品名',
                    key:'brand_name',
                    dataIndex:'brand_name',
                    width:'14%',
                    className:'spancenter-l',
                    drowdown:props.order_by == 'brand_name'?props.direction == 'ASC'?"up":"down":"down",
                    titleClick(data) {
                        // order_by 指定字段
                        // direction 指定方向
                        self.onUPDOWNChange({order_by:'brand_name'})
                    },
                    render(data) {
                        return (
                            <span className="spancenter">
                                {data || '/'}
                            </span>
                        )
                    }
                },{
                    title:'剂型',
                    key:'ApplyType',
                    dataIndex:'ApplyType',
                    width:'14%',
                    className:'spancenter-l',
                    drowdown:props.order_by == 'ApplyType'?props.direction == 'ASC'?"up":"down":"down",
                    titleClick(data) {
                        // order_by 指定字段
                        // direction 指定方向
                        self.onUPDOWNChange({order_by:'ApplyType'})
                    },
                    render(data) {
                        return (
                            <span className="spancenter">
                                {data || '/'}
                            </span>
                        )
                    }
                },{
                    title:'规格',
                    key:'2',
                    dataIndex:'2',
                    width:'14%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className="spancenter">
                                {data || '/'}
                            </span>
                        )
                    }
                },{
                    title:'企业',
                    key:'company',
                    dataIndex:'company',
                    width:'14%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className="spancenter">
                                {data || '/'}
                            </span>
                        )
                    }
                },{
                    title:'批准日期',
                    key:'ActionDate',
                    dataIndex:'ActionDate',
                    width:'14%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className="spancenter">
                                {data || '/'}
                            </span>
                        )
                    }
                }];
            } else if(this.props.render == 'omss') {

                expandedRowRender = false;

                columns = [{
                    title:'产品编码',
                    key:'product_number',
                    dataIndex:'product_number',
                    width:'20%',
                    render(data) {
                        return (
                            <span >
                                {data || '/'}
                            </span>
                        )
                    }
                },{
                    title:'活性成分',
                    key:'active_substance',
                    dataIndex:'active_substance',
                    width:'20%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className="spancenter">
                                {data || '/'}
                            </span>
                        )
                    }
                },{
                    title:'商品名',
                    key:'brand_name',
                    dataIndex:'brand_name',
                    width:'20%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className="spancenter">
                                {data || '/'}
                            </span>
                        )
                    }
                },{
                    title:'企业/上市许可人',
                    key:'manufacture',
                    dataIndex:'manufacture',
                    width:'20%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className="spancenter">
                                {data || '/'}
                            </span>
                        )
                    }
                },{
                    title:'批准日期',
                    key:'authorisation_date',
                    dataIndex:'authorisation_date',
                    width:'20%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className="spancenter">
                                {data || '/'}
                            </span>
                        )
                    }
                }];
            } else if(this.props.render == 'rbss') {

                expandedRowRender = false;

                columns = [{
                    title:'日本/英文商标名',
                    key:'sales_name',
                    width:'17%',
                    render(data) {
                        return (
                            <span>
                                {data.sales_name || '/'}<br/>
                                {data.sales_name_en || '/'}
                            </span>
                        )
                    }
                },{
                    title:'英文通用名',
                    key:'drug_name_en',
                    width:'17%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className='spancenter'>
                                {data.drug_name || '/'}<br/>
                                {data.drug_name_en || '/'}
                            </span>
                        )
                    }
                },{
                    title:'企业/上市许可人',
                    key:'manufacture',
                    width:'17%',
                    className:'spancenter-l',
                    render(data) {
                        if(data.manufacture == data.manufacture_en) {
                            return (
                                <span>
                                    {data.manufacture || '/'}
                                </span>
                            )
                        }
                        return (
                            <span className='spancenter'>
                                {data.manufacture || '/'}<br/>
                                {data.manufacture_en || '/'}
                            </span>
                        )
                    }
                },
                    {
                    title:'申请类型',
                    key:'manufacssture',
                    dataIndex:'masnufascture',
                    width:'12%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className='spancenter'>
                                {data || '/'}
                            </span>
                        )
                    }
                },
                    {
                    title:'批准日期',
                    key:'approve_date',
                    dataIndex:'approve_date',
                    width:'12%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className='spancenter'>
                                {data || '/'}
                            </span>
                        )
                    }
                },{
                    title:'说明书',
                    key:'smss',
                    width:'12%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className='spancenter'>
                                <a target="_blank" href={data.package_insert_HTML}>PDF格式</a><br/>
                                <a target="_blank" href={data.package_insert_PDF}>HTML格式</a>
                            </span>
                        )
                    }
                },{
                    title:'IF文件',
                    key:'interview_form_PDF',
                    width:'12%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className='spancenter'>
                                <a target="_blank" href={data.interview_form_PDF}>查看</a>
                            </span>
                        )
                    }
                }];
            }


        } else if(this.props.browsing == 'medicines') {

            if(this.props.render == 'zgss') {
                expandedRowRender = [{
                    title:'批准文号',
                    key:'auth_num',
                    dataIndex:'auth_num',
                    width:'20%',
                    render(data) {
                        return (
                            <span>
                            {data || '/'}
                        </span>
                        )
                    }
                },{
                    title:'药品名称',
                    key:'drug_name',
                    width:'20%',
                    render(data) {
                        return (
                            <span>
                                {data.drug_name}<br/>
                                {data.drug_name_en}
                            </span>
                        )
                    }
                },{
                    title:'规格',
                    key:'specification',
                    dataIndex:'specification',
                    width:'20%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className='spancenter'>
                                {data || '/'}
                            </span>
                        )
                    }
                },{
                    title:'生产企业',
                    key:'manufacture',
                    dataIndex:'manufacture',
                    width:'20%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className='spancenter'>
                                {data || '/'}
                            </span>
                        )
                    }
                },{
                    title:'关键信息',
                    key:'key_info',
                    dataIndex:'key_info',
                    width:'20%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className='spancenter'>
                                {data || '/'}
                            </span>
                        )
                    }
                }];

                columns = [{
                    title:'药品名称',
                    key:'drug_name',
                    width:'20%',
                    render(data) {
                        return (
                            <span>
                            {data.drug_name}<br/>
                                {data.drug_name_en}
                            </span>
                        )
                    }
                },{
                    title:'最早上市批文',
                    key:'first_auth_num',
                    dataIndex:'first_auth_num',
                    width:'50%',
                    render(data) {
                        return (
                            <span>
                                {data || '/'}
                            </span>
                        )
                    }
                },{
                    title:'国产批文数',
                    key:'gc_piwen_num',
                    width:'10%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className="spancenter" onClick={()=>{self.queryToGetNewChild({num:data.gc_piwen_num,id:data.id,querykey:{drug_name:data.drug_name,source:"G",exact:1,offset:data.offset || 0},open:data.open,content:content,keyID:'f1'})}}>
                                {data.gc_piwen_num || '0'}

                                {data.open && self.props.keyID == 'f1'?<img className="downimg" src={downtrans} />:''}

                            </span>
                        )
                    }
                },{
                    title:'进口批文数',
                    key:'jc_piwen_num',
                    width:'10%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className="spancenter" onClick={()=>{self.queryToGetNewChild({num:data.jc_piwen_num,id:data.id,querykey:{drug_name:data.drug_name,source:"J",exact:1,offset:data.offset || 0},open:data.open,content:content,keyID:'f2'})}}>
                                {data.jc_piwen_num || '0'}

                                {data.open && self.props.keyID == 'f2'?<img className="downimg" src={downtrans} />:''}

                            </span>
                        )
                    }
                },{
                    title:'总计',
                    key:'piwen_tnum',
                    width:'10%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className="spancenter" onClick={()=>{self.queryToGetNewChild({num:data.piwen_tnum,id:data.id,querykey:{drug_name:data.drug_name,exact:1,offset:data.offset || 0},open:data.open,content:content,keyID:'f3'})}}>
                                {data.piwen_tnum || '0'}
                                {data.open && self.props.keyID == 'f3'?<img className="downimg" src={downtrans} />:''}

                            </span>
                        )
                    }
                }];
            } else if(this.props.render == 'mgss') {
                expandedRowRender = [{
                    title:'申请号',
                    key:'ApplNo',
                    dataIndex:'ApplNo',
                    width:'14%',
                    render(data) {
                        return (
                            <span>
                                {data || '/'}
                            </span>
                        )
                    }
                },{
                    title:'药品名称',
                        key:'drug_name',
                        width:'14%',
                        className:'spancenter-l',
                        render(data){
                        return (
                            <span className="spancenter">
                                {data.drug_name}<br/>
                                {data.drug_name_en}
                            </span>
                        )
                    }
                },{
                    title:'商品名',
                        key:'brand_name',
                        dataIndex:'brand_name',
                        width:'14%',
                        className:'spancenter-l',
                        render(data) {
                        return (
                            <span className="spancenter">
                                {data || '/'}
                            </span>
                        )
                    }
                },{
                    title:'剂型',
                        key:'ApplyType',
                        dataIndex:'ApplyType',
                        width:'14%',
                        className:'spancenter-l',
                        render(data) {
                        return (
                            <span className="spancenter">
                                {data || '/'}
                            </span>
                        )
                    }
                },{
                    title:'规格',
                        key:'2',
                        dataIndex:'2',
                        width:'14%',
                        className:'spancenter-l',
                        render(data) {
                        return (
                            <span className="spancenter">
                                {data || '/'}
                            </span>
                        )
                    }
                },{
                    title:'企业',
                        key:'company',
                        dataIndex:'company',
                        width:'14%',
                        className:'spancenter-l',
                        render(data) {
                        return (
                            <span className="spancenter">
                                {data || '/'}
                            </span>
                        )
                    }
                },{
                    title:'批准日期',
                        key:'ActionDate',
                        dataIndex:'ActionDate',
                        width:'14%',
                        className:'spancenter-l',
                        render(data) {
                        return (
                            <span className="spancenter">
                                {data || '/'}
                            </span>
                        )
                    }
                }];

                columns = [{
                    title:'活性成分',
                    key:'drug_name',
                    dataIndex:'drug_name',
                    width:'55%',
                    render(data) {
                        return (
                            <span>
                                {data || '/'}
                            </span>
                        )
                    }
                },{
                    title:'原研申请号',
                    key:'generic_num',
                    className:'spancenter-l',
                    width:'15%',
                    render(data) {
                        return (
                            <span className='spancenter' onClick={()=>{self.queryToGetNewChild({num:data.generic_num,id:data.id,querykey:{drug_name:data.drug_name,InnovatorOrGeneric:'innovator',exact:1,offset:data.offset || 0},open:data.open,content:content,keyID:'f8'})}}>
                                {data.generic_num || '/'}
                                {data.open && self.props.keyID == 'f8'?<img className="downimg" src={downtrans} />:''}

                            </span>
                        )
                    }
                },{
                    title:'仿制申请号',
                    key:'innovator_num',
                    width:'15%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className='spancenter' onClick={()=>{self.queryToGetNewChild({num:data.innovator_num,id:data.id,querykey:{drug_name:data.drug_name,InnovatorOrGeneric:'generic',exact:1,offset:data.offset || 0},open:data.open,content:content,keyID:'f9'})}}>
                                {data.innovator_num || '/'}
                                {data.open && self.props.keyID == 'f9'?<img className="downimg" src={downtrans} />:''}

                            </span>
                        )
                    }
                },{
                    title:'总计',
                    key:'total_num',
                    width:'15%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className='spancenter' onClick={()=>{self.queryToGetNewChild({num:data.total_num,id:data.id,querykey:{drug_name:data.drug_name,InnovatorOrGeneric:['innovator','generic'],exact:1,offset:data.offset || 0},open:data.open,content:content,keyID:'f10'})}}>
                                {data.total_num || '/'}
                                {data.open && self.props.keyID == 'f10'?<img className="downimg" src={downtrans} />:''}

                            </span>
                        )
                    }
                }];
            } else if(this.props.render == 'omss') {
                expandedRowRender = [{
                    title:'产品编码',
                    key:'product_number',
                    dataIndex:'product_number',
                    width:'20%',
                    render(data) {
                        return (
                            <span >
                                {data || '/'}
                            </span>
                        )
                    }
                },{
                    title:'活性成分',
                    key:'active_substance',
                    dataIndex:'active_substance',
                    width:'20%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className="spancenter">
                                {data || '/'}
                            </span>
                        )
                    }
                },{
                    title:'商品名',
                    key:'brand_name',
                    dataIndex:'brand_name',
                    width:'20%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className="spancenter">
                                {data || '/'}
                            </span>
                        )
                    }
                },{
                    title:'企业/上市许可人',
                    key:'manufacture',
                    dataIndex:'manufacture',
                    width:'20%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className="spancenter">
                                {data || '/'}
                            </span>
                        )
                    }
                },{
                    title:'批准日期',
                    key:'authorisation_date',
                    dataIndex:'authorisation_date',
                    width:'20%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className="spancenter">
                                {data || '/'}
                            </span>
                        )
                    }
                }];

                columns = [{
                    title:'活性成分',
                    key:'active_substance',
                    width:'85%',
                    render(data) {
                        return (
                            <span>
                                {data.active_substance || '/'}
                            </span>
                        )
                    }
                },{
                    title:'批准数量',
                    key:'total_num',
                    className:'spancenter-l',
                    width:'14%',
                    render(data) {
                        return (
                            <span className="spancenter" onClick={()=>{self.queryToGetNewChild({num:data.total_num,id:data.id,querykey:{active_substance:data.active_substance,status:'Authorised',exact:1,offset:data.offset || 0},open:data.open,content:content,keyID:'f101'})}}>
                                {data.total_num || '/'}
                                {data.open && self.props.keyID == 'f101'?<img className="downimg" src={downtrans} />:''}

                            </span>
                        )
                    }
                }];
            } else if(this.props.render == 'rbss') {
                //暂无
                expandedRowRender = false;
            }

        } else if(this.props.browsing == 'enterprise') {

            if(this.props.render == 'zgss') {
                expandedRowRender = [{
                    title:'批准文号',
                    key:'auth_num',
                    dataIndex:'auth_num',
                    width:'20%',
                    render(data) {
                        return (
                            <span>
                            {data || '/'}
                        </span>
                        )
                    }
                },{
                    title:'药品名称',
                    key:'drug_name',
                    width:'20%',
                    render(data) {
                        return (
                            <span>
                                {data.drug_name}<br/>
                                {data.drug_name_en}
                            </span>
                        )
                    }
                },{
                    title:'规格',
                    key:'specification',
                    dataIndex:'specification',
                    width:'20%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className='spancenter'>
                                {data || '/'}
                            </span>
                        )
                    }
                },{
                    title:'生产企业',
                    key:'manufacture',
                    dataIndex:'manufacture',
                    width:'20%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className='spancenter'>
                                {data || '/'}
                            </span>
                        )
                    }
                },{
                    title:'关键信息',
                    key:'key_info',
                    dataIndex:'key_info',
                    width:'20%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className='spancenter'>
                                {data || '/'}
                            </span>
                        )
                    }
                }];

                columns = [{
                    title:'企业名称',
                    key:'manufacture',
                    width:'47%',
                    render(data) {
                        if(data.manufacture == data.manufacture_en) {
                            return (
                                <span>
                                    {data.manufacture || '/'}
                                </span>
                            )
                        }
                        return (
                            <span>
                                {data.manufacture}<br/>{data.manufacture_en}
                            </span>
                        )
                    }
                },{
                    title:'化药批文数',
                    key:'chem_piwen_num',
                    width:'13%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className='spancenter-l' onClick={()=>{self.queryToGetNewChild({num:data.chem_piwen_num,id:data.id,querykey:{manufacture:data.manufacture,drug_type:'化学药品',exact:1,offset:data.offset || 0},open:data.open,content:content,keyID:'f4'})}}>
                                {data.chem_piwen_num || '0'}
                                {data.open && self.props.keyID == 'f4'?<img className="downimg" src={downtrans} />:''}

                            </span>
                        )
                    }
                },{
                    title:'中药批文数',
                    key:'tcm_piwen_num',
                    className:'spancenter-l',
                    width:'13%',
                    render(data) {
                        return (
                            <span className='spancenter-l' onClick={()=>{self.queryToGetNewChild({num:data.tcm_piwen_num,id:data.id,querykey:{manufacture:data.manufacture,drug_type:'中药',exact:1,offset:data.offset || 0},open:data.open,content:content,keyID:'f5'})}}>
                                {data.tcm_piwen_num || '0'}
                                {data.open && self.props.keyID == 'f5'?<img className="downimg" src={downtrans} />:''}

                            </span>
                        )
                    }
                },{
                    title:'生物药批文数',
                    key:'bio_piwen_num',
                    className:'spancenter-l',
                    width:'13%',
                    render(data) {
                        return (
                            <span className='spancenter-l' onClick={()=>{self.queryToGetNewChild({num:data.bio_piwen_num,id:data.id,querykey:{manufacture:data.manufacture,drug_type:'生物制品',exact:1,offset:data.offset || 0},open:data.open,content:content,keyID:'f6'})}}>
                                {data.bio_piwen_num || '0'}
                                {data.open && self.props.keyID == 'f6'?<img className="downimg" src={downtrans} />:''}

                            </span>
                        )
                    }
                },{
                    title:'总计',
                    key:'piwen_tnum',
                    className:'spancenter-l',
                    width:'13%',
                    render(data) {
                        return (
                            <span className='spancenter-l' onClick={()=>{self.queryToGetNewChild({num:data.piwen_tnum,id:data.id,querykey:{manufacture:data.manufacture,exact:1,offset:data.offset || 0},open:data.open,content:content,keyID:'f7'})}}>
                                {data.piwen_tnum || '0'}
                                {data.open && self.props.keyID == 'f7'?<img className="downimg" src={downtrans} />:''}

                            </span>
                        )
                    }
                }]
            } else if(this.props.render == 'mgss') {
                expandedRowRender = [{
                    title:'申请号',
                    key:'ApplNo',
                    dataIndex:'ApplNo',
                    width:'14%',
                    render(data) {
                        return (
                            <span>
                                {data || '/'}
                            </span>
                        )
                    }
                },{
                    title:'药品名称',
                    key:'drug_name',
                    width:'14%',
                    className:'spancenter-l',
                    render(data){
                        return (
                            <span className="spancenter">
                                {data.drug_name}<br/>
                                {data.drug_name_en}
                            </span>
                        )
                    }
                },{
                    title:'商品名',
                    key:'brand_name',
                    dataIndex:'brand_name',
                    width:'14%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className="spancenter">
                                {data || '/'}
                            </span>
                        )
                    }
                },{
                    title:'剂型',
                    key:'ApplyType',
                    dataIndex:'ApplyType',
                    width:'14%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className="spancenter">
                                {data || '/'}
                            </span>
                        )
                    }
                },{
                    title:'规格',
                    key:'2',
                    dataIndex:'2',
                    width:'14%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className="spancenter">
                                {data || '/'}
                            </span>
                        )
                    }
                },{
                    title:'企业',
                    key:'company',
                    dataIndex:'company',
                    width:'14%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className="spancenter">
                                {data || '/'}
                            </span>
                        )
                    }
                },{
                    title:'批准日期',
                    key:'ActionDate',
                    dataIndex:'ActionDate',
                    width:'14%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className="spancenter">
                                {data || '/'}
                            </span>
                        )
                    }
                }];

                columns = [{
                    title:'企业名称',
                    key:'company',
                    width:'55%',
                    render(data) {
                        return (
                            <span>
                                {data.company}
                            </span>
                        )
                    }
                },{
                    title:'化学药',
                    key:'chem_num',
                    width:'15%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className='spancenter-l' onClick={()=>{self.queryToGetNewChild({num:data.chem_num,id:data.id,querykey:{company:data.company,drug_type:'化学药品',exact:1,offset:data.offset || 0},open:data.open,content:content,keyID:'f11'})}} >
                                {data.chem_num || '0'}
                                {data.open && self.props.keyID == 'f11'?<img className="downimg" src={downtrans} />:''}

                            </span>
                        )
                    }
                },{
                    title:'生物制药',
                    key:'bio_num',
                    width:'15%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className='spancenter-l' onClick={()=>{self.queryToGetNewChild({num:data.bio_num,id:data.id,querykey:{company:data.company,drug_type:'生物制品',exact:1,offset:data.offset || 0},open:data.open,content:content,keyID:'f12'})}} >
                                {data.bio_num || '0'}
                                {data.open && self.props.keyID == 'f12'?<img className="downimg" src={downtrans} />:''}

                            </span>
                        )
                    }
                },{
                    title:'总计',
                    key:'total_num',
                    width:'15%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className='spancenter-l' onClick={()=>{self.queryToGetNewChild({num:data.total_num,id:data.id,querykey:{company:data.company,drug_type:['生物制品','化学药品'],is_orig:1,exact:1,offset:data.offset || 0},open:data.open,content:content,keyID:'f13'})}}>
                                {data.total_num || '0'}
                                {data.open && self.props.keyID == 'f13'?<img className="downimg" src={downtrans} />:''}

                            </span>
                        )
                    }
                }];
            } else if(this.props.render == 'omss') {
                expandedRowRender = [{
                    title:'产品编码',
                    key:'product_number',
                    dataIndex:'product_number',
                    width:'20%',
                    render(data) {
                        return (
                            <span >
                                {data || '/'}
                            </span>
                        )
                    }
                },{
                    title:'活性成分',
                    key:'active_substance',
                    dataIndex:'active_substance',
                    width:'20%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className="spancenter" >
                                {data || '/'}
                            </span>
                        )
                    }
                },{
                    title:'商品名',
                    key:'brand_name',
                    dataIndex:'brand_name',
                    width:'20%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className="spancenter">
                                {data || '/'}
                            </span>
                        )
                    }
                },{
                    title:'企业/上市许可人',
                    key:'manufacture',
                    dataIndex:'manufacture',
                    width:'20%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className="spancenter">
                                {data || '/'}
                            </span>
                        )
                    }
                },{
                    title:'批准日期',
                    key:'authorisation_date',
                    dataIndex:'authorisation_date',
                    width:'20%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className="spancenter">
                                {data || '/'}
                            </span>
                        )
                    }
                }];

                columns = [{
                    title:'企业名称',
                    key:'company',
                    width:'55%',
                    render(data) {
                        return (
                            <span>
                                {data.manufacture}
                            </span>
                        )
                    }
                },{
                    title:'化学药',
                    key:'chem_num',
                    width:'15%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className='spancenter' onClick={()=>{self.queryToGetNewChild({num:data.chem_num,id:data.id,querykey:{manufacture:data.manufacture,biosimilar:'no',status:'Authorised',exact:1,offset:data.offset || 0},open:data.open,content:content,keyID:'f14'})}}>
                                {data.chem_num || '0'}
                                {data.open && self.props.keyID == 'f14'?<img className="downimg" src={downtrans} />:''}

                            </span>
                        )
                    }
                },{
                    title:'生物制药',
                    key:'bio_num',
                    width:'15%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className='spancenter' onClick={()=>{self.queryToGetNewChild({num:data.bio_num,id:data.id,querykey:{manufacture:data.manufacture,biosimilar:'yes',status:'Authorised',exact:1,offset:data.offset || 0},open:data.open,content:content,keyID:'f15'})}}>

                                {data.bio_num || '0'}
                                {data.open && self.props.keyID == 'f15'?<img className="downimg" src={downtrans} />:''}

                            </span>
                        )
                    }
                },{
                    title:'总计',
                    key:'total_num',
                    width:'15%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className='spancenter' onClick={()=>{self.queryToGetNewChild({num:data.total_num,id:data.id,querykey:{manufacture:data.manufacture,status:'Authorised',exact:1,offset:data.offset || 0},open:data.open,content:content,keyID:'f16'})}}>

                                {data.total_num || '0'}
                                {data.open && self.props.keyID == 'f16'?<img className="downimg" src={downtrans} />:''}

                            </span>
                        )
                    }
                }];
            } else if(this.props.render == 'rbss') {
                expandedRowRender = [{
                    title:'日本/英文商标名',
                    key:'sales_name',
                    width:'17%',
                    render(data) {
                        return (
                            <span>
                                {data.sales_name || '/'}<br/>
                                {data.sales_name_en || '/'}
                            </span>
                        )
                    }
                },{
                    title:'英文通用名',
                    key:'drug_name_en',
                    width:'17%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className='spancenter'>
                                {data.drug_name || '/'}<br/>
                                {data.drug_name_en || '/'}
                            </span>
                        )
                    }
                },{
                    title:'企业/上市许可人',
                    key:'manufacture',
                    width:'17%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className='spancenter'>
                                {data.manufacture || '/'}<br/>
                                {data.manufacture_en || '/'}
                            </span>
                        )
                    }
                },
                {
                    title:'申请类型',
                    key:'manufacssture',
                    dataIndex:'masnufascture',
                    width:'12%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className='spancenter'>
                            {data || '/'}
                        </span>
                        )
                    }
                },
                {
                    title:'批准日期',
                    key:'approve_date',
                    dataIndex:'approve_date',
                    width:'12%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className='spancenter'>
                            {data || '/'}
                        </span>
                        )
                    }
                },{
                    title:'说明书',
                    key:'smss',
                    width:'12%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className='spancenter'>
                            <a target="_blank" href={data.package_insert_HTML}>PDF格式</a><br/>
                            <a target="_blank" href={data.package_insert_PDF}>HTML格式</a>
                        </span>
                        )
                    }
                },{
                    title:'IF文件',
                    key:'interview_form_PDF',
                    width:'12%',
                    className:'spancenter-l',
                    render(data) {
                        return (
                            <span className='spancenter'>
                            <a target="_blank" href={data.interview_form_PDF}>查看</a>
                        </span>
                        )
                    }
                }];

                columns = [{
                    title:'企业名称',
                    key:'manufacture',
                    dataIndex:'manufacture',
                    width:'85%',
                    render(data) {
                        return (
                            <span>
                                {data || '0'}
                            </span>
                        )
                    }
                },{
                    title:'品种数量',
                    key:'total_num',
                    className:'spancenter-l',
                    width:'14%',
                    render(data) {
                        return (
                            <span className='spancenter' onClick={()=>{self.queryToGetNewChild({num:data.total_num,id:data.id,querykey:{manufacture:data.manufacture,offset:data.offset || 0},open:data.open,content:content,keyID:'f17'})}}>
                                {data.total_num || '0'}
                                {data.open && self.props.keyID == 'f17'?<img className="downimg" src={downtrans} />:''}

                            </span>
                        )
                    }
                }];
            }
        }

        return (
            <div className="TheListedDrugsContent">
                <div className="xh-container-right-wrap">
                    {/*<!--筛选部分-->*/}
                    <div className="xh-clearfix xh-screen-wrap">

                        <SaveScreen {...props} />

                        <div className="xh-fr xh-screen-right">
                            {/*<!--模拟美化select表单部分-->*/}
                            <div className="xh-fl xh-select-wrap">
                                <div className="xh-select" onClick={()=>{this.props.updateState({selectOpen:!props.selectOpen})}}>
                                    {selectText}
                                </div>
                                <ul className={ulClassname}>
                                    <li onClick={() => this.props.renderOnchangeBrowsing({browsing:'ApprovalNumber',offset:1,selectOpen:!props.selectOpen,render:props.render})}>{selectText1}</li>
                                    <li style={props.render == 'rbss'?{display:'none'}:{}} onClick={() => this.props.renderOnchangeBrowsing({browsing:'medicines',offset:1,selectOpen:!props.selectOpen,render:props.render})}>{selectText2}</li>
                                    <li onClick={() => this.props.renderOnchangeBrowsing({browsing:'enterprise',offset:1,selectOpen:!props.selectOpen,render:props.render})}>{selectText3}</li>
                                </ul>
                                {/*<!--获取选择的值-->*/}
                                <input type="hidden" name="" value="" id="" />
                            </div>
                            <a href="javascript:;" className="xh-fl xh-btn xh-preservation-btn">导出</a>
                        </div>
                    </div>

                    {/*<!--列表部分-->*/``}
                    <div className="xh-content-list-wrap xh-lsted-drug-page">
                        {/*<!--列表部分-->*/}
                        <div className="xh-content-list-wrap xh-global-clinical-list">
                            <List {...this.props} dataSource={this.props.content} expandedRowRender={expandedRowRender} rendermore={(params)=>self.rendermore(params)} columns={columns}/>
                            {/*<Table dataSource={this.props.content} columns={columns} pagination={false} />*/}
                        </div>
                        {/*<!--分页部分-->*/}
                        <div className="xh-paging" id="fenyels">
                            <Pagination defaultCurrent={1} current={this.props.offset || 1} total={this.props.tnum} onChange={(params)=>this.onChange(params)} pageSize={this.props.length} />
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}


export default TheListedDrugsContent;

TheListedDrugsContent.propTypes = {};
