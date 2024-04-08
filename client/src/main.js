import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
    
import router from './router.js'
 

const localstorageSetup = () => {
    const cart = localStorage.getItem('cart');
    const productList = localStorage.getItem('productList');
    if (!cart) {
        localStorage.setItem('cart', JSON.stringify([]));
    }
    if (!productList) {
        localStorage.setItem('productList', JSON.stringify([]));
    }
    return;
}

localstorageSetup();

createApp(App)
    .use(router)
    .mount('#app')
