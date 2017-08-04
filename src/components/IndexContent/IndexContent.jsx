import './style.css';
import React, {PropTypes, Component} from 'react';
import {routerRedux} from 'dva/router';
import { message } from 'antd';
import carousel_1 from "public/img/carousel_1.jpg";
import Footer from 'components/footer/footer';
import useful from 'useful';
let timer = null;
let once = true;
class IndexContent extends Component {
    onSearch() {
        if(this.refs.searchValue) {
            const value = this.refs.searchValue && this.refs.searchValue.value;
            if(value) {
                this.props.jumpUrl(routerRedux.push({pathname:'/medicalretrieval/indexsearch',query:{"querystring":value}}))

            }else {
                message.error('请输入搜索名称！')
            }
        } else {
            message.error('搜索失败！')
        }
    }

    componentDidMount() {
        const DsDynSign = useful.getCookie('DsDynSign');
        const self = this;
        if(DsDynSign && once) {
            clearInterval(timer);
            timer = setInterval(() => {
                self.props.requestto({})
            },240000);
            once = false;
        }
    }

    render() {

        return (
            <div className="IndexContent">
                <div className="xh-index-search-wrap">
                    {/*<!--搜索部分-->*/}
                    <div className="xh-index-search">
                        {/*<!--表单-->*/}
                        <form className="xh-clearfix">
                            <input type="text" ref='searchValue' className="xh-fl xh-index-search-box" placeholder="请输入药品名称 / 靶点 / 适应症 / 公司" />
                            <input type="button" value="搜索" className="xh-fl xh-index-search-btn" onClick={()=>{
                                this.onSearch()
                            }}/>
                            <a href="javascript:;" className="xh-fl xh-index-search-screen">条件筛选</a>
                        </form>
                        {/*<!--一键搜索-->*/}
                        <div className="xh-clearfix xh-index-key-search">
                            <h6 className="xh-fl">一键搜索：</h6>
                            <div className="xh-fl xh-index-key-w">
                                <span>美国2016NCE药物</span>
                                <span>美国2016NCE药物</span>
                                <span>美国2016NCE药物</span>
                                <span>美国2016NCE药物</span>
                                <span>美国2016NCE药物</span>
                                <span>美国2016NCE药物</span>
                                <span>美国2016NCE药物</span>
                                <a href="javascript:;" className="xh-relative">更多</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<!--内容部分-->*/}
                <div className="xh-index-container">
                    <div className="xh-relative xh-carousel-wrap">
                        <div className="xh-carousel-cont">
                            {/*<!--每个条目-->*/}
                            <div className="xh-clearfix xh-carousel-each">
                                <div className="xh-fl xh-carousel-text">
                                    <h2>数据库介绍</h2>
                                    <p>
                                        数据库系统是为适应数据处理的需要而发展起来的一种较为理想的数据处理系统，也是一个为实际可运行的存储、维护和应用系统提供数据的软件系统，是存储介质 、处理对象和管理系统的集合体。
                                        <a href="javascript:;">了解详情&gt;</a>
                                    </p>
                                </div>
                                <div className="xh-fr xh-carousel-img">
                                    <img src={carousel_1} />
                                </div>
                            </div>
                            {/*<!--每个条目-->*/}
                            <div className="xh-clearfix xh-carousel-each">
                                <div className="xh-fl xh-carousel-text">
                                    <h2>数据库介绍</h2>
                                    <p>
                                        数据库系统是为适应数据处理的需要而发展起来的一种较为理想的数据处理系统，也是一个为实际可运行的存储、维护和应用系统提供数据的软件系统，是存储介质 、处理对象和管理系统的集合体。
                                        <a href="javascript:;">了解详情&gt;</a>
                                    </p>
                                </div>
                                <div className="xh-fr xh-carousel-img">
                                    <img src={carousel_1} />
                                </div>
                            </div>
                            {/*<!--每个条目-->*/}
                            <div className="xh-clearfix xh-carousel-each">
                                <div className="xh-fl xh-carousel-text">
                                    <h2>数据库介绍</h2>
                                    <p>
                                        数据库系统是为适应数据处理的需要而发展起来的一种较为理想的数据处理系统，也是一个为实际可运行的存储、维护和应用系统提供数据的软件系统，是存储介质 、处理对象和管理系统的集合体。
                                        <a href="javascript:;">了解详情&gt;</a>
                                    </p>
                                </div>
                                <div className="xh-fr xh-carousel-img">
                                    <img src={carousel_1} />
                                </div>
                            </div>
                            {/*<!--每个条目-->*/}
                            <div className="xh-clearfix xh-carousel-each">
                                <div className="xh-fl xh-carousel-text">
                                    <h2>数据库介绍</h2>
                                    <p>
                                        数据库系统是为适应数据处理的需要而发展起来的一种较为理想的数据处理系统，也是一个为实际可运行的存储、维护和应用系统提供数据的软件系统，是存储介质 、处理对象和管理系统的集合体。
                                        <a href="javascript:;">了解详情&gt;</a>
                                    </p>
                                </div>
                                <div className="xh-fr xh-carousel-img">
                                    <img src={carousel_1} />
                                </div>
                            </div>
                        </div>
                        {/*<!--轮播按钮-->*/}
                        <div className="xh-carousel-btns">
                            <span className="on"></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}


export default IndexContent;

IndexContent.propTypes = {};
