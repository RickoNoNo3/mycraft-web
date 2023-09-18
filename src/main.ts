import {createApp} from 'vue';
import './main.scss';
import 'animate.css';
import App from './App.vue';

// Router
import router from './router/router';

// Vuetify
import {createVuetify} from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';

const vuetify = createVuetify({
  components,
  directives,
});

// Kinesis
// @ts-ignore
import VueKinesis from 'vue-kinesis';


createApp(App)
  .use(vuetify)
  .use(router)
  .use(VueKinesis)
  .mount('#app');
