import { createApp } from 'vue';
import App from './App.vue';

import iconPlugin from '@/plugins/icon-plugin';

const app = createApp(App);

const options = {
	iconType: 'awesome',
};

app.use(iconPlugin, options);
app.mount('#app');
