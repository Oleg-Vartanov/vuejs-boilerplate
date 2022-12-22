import { createApp } from 'vue';

import './styles/css/style.css';
import './styles/scss/styles.scss';

import App from './App.vue';
import { router } from './router';

const app = createApp(App);

app.use(router);

router.isReady().finally(() => {
  app.mount('#app');
});
