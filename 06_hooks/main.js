//引入的不在书Vue构造函数了，引入一个名为createApp的工厂函数
import { createApp } from 'vue';
import App from './App.vue';

// createApp(App).mount('#app')
const app = createApp(App);
app.mount('#app');
