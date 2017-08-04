import './style.css';
import React, { PropTypes , Component } from 'react';
import tj1 from 'public/img/tj1.png';
import structure from 'public/img/structure.jpg';

class drug_name extends Component {

    render() {
        const content = this.props.content && this.props.content[0] || {};
        return (
            <div className="xh-screen-wrap">
                {/*//头部信息*/}
                <div className="xh-clearfix">
                    {/*<!--标题-->*/}
                    <h1 className="xh-fl xh-details-tit">{content.drug_name}&nbsp;&nbsp;&nbsp;{content.drug_name_en}</h1>
                    {/*<!--按钮-->*/}
                    <a href="javascript:;" className="xh-fl xh-btn xh-preservation-btn">追踪</a>
                </div>
            </div>
        )

    }
}


export default drug_name;

drug_name.propTypes = {};
