import './style.css';
import React, { PropTypes , Component } from 'react';
import { Table } from 'antd';
import ShowKeyinfoDetail from './showKeyinfoDetail';
import { message } from 'antd';
message.config({
    top: 50,
    duration: 2,
});
import tj1 from 'public/img/tj1.png';
import structure from 'public/img/structure.jpg';

class drug_name extends Component {
    componentDidMount() {
        const id = this.props.id;
        const floatDetail = document.getElementById('tips');
        const props = this.props;
        const content = this.props.content;
        document.addEventListener('click',(e)=>{
            let event = e || window.e;
            let target = event.target;

            if(content.state_yibao == '非' && content.sup_yibao == '非') {
                message.error('暂无信息！');
                return;
            }

            if(target.className == 'xh-blue') {

                if(content.state_yibao != '国(乙)') {
                    message.error('暂无信息！');
                    return;
                }

                floatDetail.style.display = 'block';
                floatDetail.style.left = '';

                // if(content.drug_type == '辅料') {
                //     let payload = {
                //         drug_name:content.drug_name,
                //         dosage_form:content.dosage_form,
                //         yibao_dosage:content.yibao_dosage,
                //         exact:1
                //     }
                //     props.queryfloatdata(payload);
                // }else if(content.drug_type == '化学药品') {
                //     let payload = {
                //         drug_name:content.general_name_cn,
                //         dosage_form:content.dosage_form,
                //         yibao_dosage:content.yibao_dosage,
                //         exact:1,
                //     }
                //     props.queryfloatdata(payload);
                // }

            } else if(target.className == 'xh-blue zbjy') {
                if(content.sup_yibao != '增补(4)') {
                    message.error('暂无信息！');
                    return;
                }
                floatDetail.style.display = 'block';
                floatDetail.style.left = '160px'
                // let payload = {
                //     from:'zbjy',
                //     auth_num:content.auth_num
                // }
                // props.queryfloatdata(payload);

            } else {
                floatDetail.style.display = 'none';
            }
        });
    }

    render() {

        let columns1 = [{
                title:'地区',
                render:(data)=>{
                    return (
                        <span>国家</span>
                    )
                }
            },
            {
                title:'成分',
                render:(data)=>{
                    return (
                        <span>国家</span>
                    )
                }
            },
            {
                title:'剂型',
                render:(data)=>{
                    return (
                        <span>国家</span>
                    )
                }
            },
            {
                title:'类型',
                render:(data)=>{
                    return (
                        <span>国家</span>
                    )
                }
            },
            {
                title:'备注',
                render:(data)=>{
                    return (
                        <span>国家</span>
                    )
                }
            },
            {
                title:'编号',
                render:(data)=>{
                    return (
                        <span>国家</span>
                    )
                }
            }
        ];

        let columns2 = [{
            title:'地区',
            render:(data)=>{
                return (
                    <span>国家</span>
                )
            }
        },
            {
                title:'成分',
                render:(data)=>{
                    return (
                        <span>国家</span>
                    )
                }
            },
            {
                title:'剂型',
                render:(data)=>{
                    return (
                        <span>国家</span>
                    )
                }
            },
            {
                title:'类型',
                render:(data)=>{
                    return (
                        <span>国家</span>
                    )
                }
            },
            {
                title:'备注',
                render:(data)=>{
                    return (
                        <span>国家</span>
                    )
                }
            },
            {
                title:'编号',
                render:(data)=>{
                    return (
                        <span>国家</span>
                    )
                }
            }
        ];

        const content = this.props.content || {};
        const key_info = content && content.key_info;

        const list1 = key_info && key_info.map((data,index)=>{
             if(index>1) {
                 return (
                     <li>{data.key_info || '/'}</li>
                 )
             }
        });

        return (
            <div className="xh-details-show-each" id="key_message">
                <h4>关键信息</h4>
                <div className="xh-details-key">
                    <ul className="xh-clearfix xh-relative">
                        <ShowKeyinfoDetail {...this.props} columns={columns1} id='gjyb' title="国家医保（ 乙 ）"/>
                        <ShowKeyinfoDetail {...this.props} columns={columns2} id='zbjy' title="增补基药"/>

                        {list1}

                        {/*<!--弹框  已隐藏-->*/}
                        <div className="xh-details-key-li-bomb-box" id="tips">
                            <Table columns={columns1} dataSource={content.yibao} pagination={false} />
                            {/*<i className="xh-details-key-li-bomb-box-close"></i>*/}
                        </div>
                    </ul>
                </div>
            </div>
        )

    }
}


export default drug_name;

drug_name.propTypes = {};