import { createApp } from 'vue'
import router from './router'
import './style.css'

import 'lib-flexible'
import './utils/flexible'

import utils from './utils'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App);

app.config.globalProperties.$utils = utils;

app.use(router);
app.use(ElementPlus);
app.mount('#app')
