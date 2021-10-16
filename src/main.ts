import { createApp } from 'vue';
import App from './App.vue';

import iconPlugin from '@/plugins/icon-plugin';

const app = createApp(App);

const iconParameters = {
	iconType: 'text',
};

app.use(iconPlugin, iconParameters);
app.mount('#app');
