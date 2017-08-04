import React from 'react';
import dva from 'dva';
import router from './router';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'public/css/_reset.css';
import 'public/css/custom.css';

moment.locale('zh-cn');

//import { browserHistory } from 'dva/router';
//const app = dva({ history: browserHistory });

const app = dva();
app.model(require('models/Spin'));
app.router(router);
app.start('body');
