import { createApp } from 'vue';
import App from './App.vue';

import 'vue-material-design-icons/styles.css';

import iconPlugin from '@/plugins/icon-plugin';

const app = createApp(App);

const iconParameters = {
	iconType: 'svg',
};

app.use(iconPlugin, iconParameters);
app.mount('#app');
