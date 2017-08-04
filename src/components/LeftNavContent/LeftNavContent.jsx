import './style.css';
import React, { PropTypes , Component } from 'react';
import formatdata from 'formatdata';
class LeftNavContent extends Component {

    clickleftnav() {
        const rightcontent = document.getElementById('rightcontent');
        const LeftNavContent = document.getElementById('LeftNavContent');
        if(rightcontent && LeftNavContent) {
            rightcontent.style.paddingLeft = '40px';
            LeftNavContent.style.left = '-220px';
        }
    }

    render() {
        const self = this;
        const renderDom = formatdata({
            type:'leftnav',
            data:{
                render:self.props.render,
                props:self.props,
                clickleftnav() {
                    self.clickleftnav();
                }
            }
        });

        return (
            <div className="LeftNavContent" id="LeftNavContent">
                {renderDom}
            </div>
        )
    }
}


export default LeftNavContent;

LeftNavContent.propTypes = {};
