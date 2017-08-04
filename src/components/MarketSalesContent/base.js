import './style.css';
import React, { PropTypes , Component } from 'react';
import {routerRedux} from 'dva/router';
class Base extends Component {

    updatesumBy(data) {

        const sumBy = this.props.sumBy;
        let e = data.e;
        let key = data.key;
        let event = e || window.e;
        let tagget = event.target;
        let newsumBy = [];
        sumBy.map((d) => {
            if(key == d && tagget.className == 'active') {
                return;
            }else {
                newsumBy.push(d);
            }
        });

        if(tagget.className == '') {
            newsumBy.push(key);
        }

        const payload = {
            offset:this.props.offset,
            sumBy:newsumBy,
            url:this.props.url
        }

        this.props.renderOnchangeGet(payload);

    }

    render() {
        const sumBy = this.props.sumBy && this.props.sumBy.toString();
        if(this.props.render == 'ybyy') {
            return (
                <dl className="xh-clearfix xh-screen-pick-wrap">
                    <dt className="xh-fl">汇总依据：</dt>
                    <dd className="xh-fl"><a href="javascript:;" className={sumBy.match('drug_name')?'active':""} onClick={(e)=>this.updatesumBy({e:e,key:'drug_name'})}>药品名称</a></dd>
                    <dd className="xh-fl"><a href="javascript:;" className={sumBy.match('company')?'active':""} onClick={(e)=>this.updatesumBy({e:e,key:'company'})}>企业</a></dd>
                    <dd className="xh-fl"><a href="javascript:;" className={sumBy.match('years')?'active':""} onClick={(e)=>this.updatesumBy({e:e,key:'years'})}>年份</a></dd>
                    <dd className="xh-fl"><a href="javascript:;" className={sumBy.match('quarter')?'active':""} onClick={(e)=>this.updatesumBy({e:e,key:'quarter'})}>季度</a></dd>
                    <dd className="xh-fl"><a href="javascript:;" className={sumBy.match('dosage_form')?'active':""} onClick={(e)=>this.updatesumBy({e:e,key:'dosage_form'})}>剂型</a></dd>
                    <dd className="xh-fl"><a href="javascript:;" className={sumBy.match('ATC_code')?'active':""} onClick={(e)=>this.updatesumBy({e:e,key:'ATC_code'})}>治疗大类</a></dd>
                    <dd className="xh-fl"><a href="javascript:;" className={sumBy.match('city')?'active':""} onClick={(e)=>this.updatesumBy({e:e,key:'city'})}>城市</a></dd>
                </dl>
            )
        }else {
            return (
                <dl className="xh-clearfix xh-screen-pick-wrap">
                    <dt className="xh-fl">汇总依据：</dt>
                    <dd className="xh-fl"><a href="javascript:;" className={sumBy.match('drug_name')?'active':""} onClick={(e)=>this.updatesumBy({e:e,key:'drug_name'})}>药品名称</a></dd>
                    <dd className="xh-fl"><a href="javascript:;" className={sumBy.match('company')?'active':""} onClick={(e)=>this.updatesumBy({e:e,key:'company'})}>企业</a></dd>
                    <dd className="xh-fl"><a href="javascript:;" className={sumBy.match('years')?'active':""} onClick={(e)=>this.updatesumBy({e:e,key:'years'})}>年份</a></dd>
                    <dd className="xh-fl"><a href="javascript:;" className={sumBy.match('quarter')?'active':""} onClick={(e)=>this.updatesumBy({e:e,key:'quarter'})}>季度</a></dd>
                </dl>
            )
        }

    }
}


export default Base;

Base.propTypes = {};
