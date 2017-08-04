import React,{Component} from 'react';
import TopNav from './topNav';
import moment from 'moment';
// 推荐在入口文件全局设置 locale
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

export default class App extends Component {
    render() {

        const prop = {
            history:this.props.history
        }

        return (
            <div style={{"height":"100%"}}>
                <TopNav prop={prop} />
                {this.props.children}
            </div>
        )

    }
}