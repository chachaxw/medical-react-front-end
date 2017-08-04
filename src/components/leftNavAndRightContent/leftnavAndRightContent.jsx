import './style.css';
import React, { PropTypes , Component } from 'react';

import big_arrow_close from 'public/img/big_arrow_close.png';
import rightjt from 'public/img/rightjt.png';

class LeftNavAndRightContent extends Component {

    clickleftnav () {

        const rightcontent = document.getElementById('rightcontent');
        const LeftNavContent = document.getElementById('LeftNavContent');
        if(rightcontent && LeftNavContent) {
            rightcontent.style.paddingLeft = '40px';
            LeftNavContent.style.left = '-220px';
        }
    }

    shownav () {

        const rightcontent = document.getElementById('rightcontent');
        const LeftNavContent = document.getElementById('LeftNavContent');
        if(rightcontent && LeftNavContent) {
            rightcontent.style.paddingLeft = '259px';
            LeftNavContent.style.left = '0';
        }

    }

    render() {
        const self = this;
        return (
            <div style={{"height":"100%"}}>
                <div className="LeftNavContent" id="LeftNavContent">
                    <div className="xh-container-left">
                        <div className="xh-container-left-inner">
                            {/*<!--侧边栏顶部-->*/}
                            <div className="xh-sidebar-top xh-sidebar-arrow">
                                <a href="javascript:;" className="xh-sidebar-hide" onClick={()=>{self.clickleftnav({change:'close'})}}>
                                    <img src={big_arrow_close}/>
                                </a>
                            </div>


                            {this.props.children[0]}

                        </div>
                    </div>
                </div>
                <div className="toshownav">
                    <div className="wrapdiv" onClick={()=>{self.shownav()}}>
                        <img src={rightjt} />
                    </div>
                </div>
                <div id='rightcontent' className="rightcontent" style={{paddingLeft:'259px',paddingRight:'35px',minHeight:'850px'}}>
                    {this.props.children[1]}
                </div>
            </div>
        )
    }

}

export default LeftNavAndRightContent;

LeftNavAndRightContent.propTypes = {};
