import './style.css';
import React, { PropTypes , Component } from 'react';
import tj1 from 'public/img/tj1.png';
import structure from 'public/img/structure.jpg';

class instructions extends Component {

    render() {
        const content = this.props.content;
        return (
            <div className="xh-details-show-each" id="instructions">
                <h4 className="xh-relative">
                    说明书
                    <a href="javascript:;">查看全文&gt;</a>
                </h4>
                <div className="xh-clearfix xh-details-key">
                    <div className="xh-details-dl xh-width-1-1">
                        <dl>
                            <dt>适应症：</dt>
                            <dd>{content.indications || '/'}</dd>
                        </dl>
                        <dl>
                            <dt>用法用量：</dt>
                            <dd>{content.dosage_and_administration || '/'}</dd>
                        </dl>
                        <dl>
                            <dt>药理机制：</dt>
                            <dd>{content.pharmacological_and_toxicological || '/'}</dd>
                        </dl>
                    </div>
                </div>
            </div>
        )

    }
}


export default instructions;

instructions.propTypes = {};
