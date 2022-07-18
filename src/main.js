import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

let app = createApp(App);

app.config.globalProperties.BASE_API_URL = "http://192.168.1.9:5000";


app.use(router).mount("#app");