import './style.css';
import React, { PropTypes , Component } from 'react';

class List extends Component {

    render() {

        const dataSource = this.props.dataSource || [];
        const columns = this.props.columns || [];
        const self = this;
        const expandedRowRender = this.props.expandedRowRender || [];

        const listHeader = columns.map((data,index) => {
            let classNameLs;
            let style;
            if(data.className) {
                classNameLs = data.className;
            } else {
                classNameLs = "";
            }

            if(data.width) {
                style= {
                    width:data.width
                };
            } else {
                style = {};
            }

            if(data.drowdown) {
                let dorpdowclass;

                if(data.drowdown == 'up') {
                    dorpdowclass = 'xh-up-arrow';
                } else {
                    dorpdowclass = 'xh-down-arrow';
                }

                if(data.titleClick) {
                    return (
                        <span style={style} className={ dorpdowclass + " " + classNameLs} onClick={()=>{data.titleClick(dataSource[index])}}>{data.title}</span>
                    )
                } else {
                    return (
                        <span style={style} className={ dorpdowclass +" "+classNameLs} >{data.title}</span>
                    )
                }

            } else {
                if(data.titleClick) {
                    return (
                        <span className={classNameLs} style={style} onClick={()=>{data.titleClick(dataSource[index])}}>{data.title}</span>
                    )
                } else {
                    return (
                        <span className={classNameLs} style={style}>{data.title}</span>
                    )
                }

            }
        });

        const listbody = dataSource.map((data1) => {

            const spanlist = columns.map((data2) => {
                let style;
                if(data2.width) {
                    style = {
                        width:data2.width
                    }
                }else {
                    style = {}
                }

                if(data2.render) {
                    let payload ;
                    if(data2['dataIndex']) {
                        payload = data1[data2['dataIndex']]
                    }else {
                        payload = data1;
                    }

                    return (
                        <p style={style}>{data2.render(payload)}</p>
                    )
                } else {
                    return (
                        <span style={style}>{data1[data2['dataIndex']]}</span>
                    )
                }
            });

            const childrenData = data1 && data1.children || [];
            let listchild;

            if(childrenData && data1.open && expandedRowRender && expandedRowRender.length) {
                if(childrenData && childrenData.length) {
                    listchild = childrenData.map((data3) => {

                        const childrenlist = expandedRowRender.map((data4) => {
                            let style;
                            if(data4.width) {
                                style = {
                                    width:data4.width
                                }
                            }else {
                                style = {}
                            }

                            if(data4.render) {
                                let payload ;
                                if(data4['dataIndex']) {
                                    payload = data3[data4['dataIndex']]
                                }else {
                                    payload = data3;
                                }

                                return (
                                    <p style={style}>{data4.render(payload)}</p>
                                )
                            } else {
                                return (
                                    <span style={style}>{data3[data4['dataIndex']]}</span>
                                )
                            }
                        });

                        return (
                            <div href="javascript:;" className="xh-list-row-a">
                                {childrenlist}
                            </div>
                        );

                    });
                } else {
                    listchild = (<li>暂无数据</li>);
                }
            } else {
                listchild = (<li>暂无数据</li>);
            }

            let querykey = data1.querykey || {};
            querykey.offset = querykey.offset + 10;

            return  <li className="xh-proportion xh-clear-padding">
                        <div href="javascript:;" className="xh-list-row-a">{spanlist}</div>

                        <ul className="xh-proportion-open" style={data1.open?{display:'block'}:{display:'none'}}>
                            {listchild}
                            {childrenData.length<10?"":(<li>
                                    <div className="xh-btn xh-data-more" onClick={()=>{self.props.rendermore({id:data1.id,querykey:querykey})}}>显示更多数据</div>
                                </li>)}
                        </ul>

                    </li>
        });

        return (
            <div className="xh-content-list-wrap xh-lsted-drug-page">
                <div className="xh-content-list-heard xh-proportion">
                    {listHeader}
                </div>
                <ul className="xh-content-list-cont">
                    {listbody}
                </ul>
            </div>
        );
    }
}


export default List;

List.propTypes = {};
