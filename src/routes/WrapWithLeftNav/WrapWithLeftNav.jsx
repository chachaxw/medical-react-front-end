import React,{Component} from 'react';
import LeftNav from './LeftNav';
import rightjt from 'public/img/rightjt.png';
export default class WrapWithLeftNav extends Component {
    shownav() {
        const rightcontent = document.getElementById('rightcontent');
        const LeftNavContent = document.getElementById('LeftNavContent');
        if(rightcontent && LeftNavContent) {
            rightcontent.style.paddingLeft = '259px';
            LeftNavContent.style.left = '0';
        }
    }

    render() {

        return (
            <div style={{"height":"100%"}}>
                <LeftNav />
                <div className="toshownav">
                    <div className="wrapdiv" onClick={()=>{this.shownav()}}>
                        <img src={rightjt} />
                    </div>
                </div>
                <div id='rightcontent' className="rightcontent" style={{paddingLeft:'259px',paddingRight:'35px',minHeight:'850px'}}>
                    {this.props.children}
                </div>
            </div>
        )

    }
}