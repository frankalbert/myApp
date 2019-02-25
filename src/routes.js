import Home from './components/Home.vue';
import Facturacion from './components/Facturacion.vue';

export const routes = [
    {path: '/', component: Home, name: 'Home'},
    {path: '/facturacion', component: Facturacion, name: 'Facturacion'}
];
