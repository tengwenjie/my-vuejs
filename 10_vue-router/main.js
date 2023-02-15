//引入的不在书Vue构造函数了，引入一个名为createApp的工厂函数
import { createApp } from 'vue';
import App from './App.vue';
// import i18n from './i18n';
import router from './router';

// createApp(App).use(i18n).mount('#app');
const app = createApp(App);
app.use(router);
// app.use(i18n);
app.mount('#app');
