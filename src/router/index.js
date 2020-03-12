import Vue from 'vue';
import VueRouter from 'vue-router';
import Albums from '../views/Albums';
import SingleAlbum from '../views/SingleAlbum';
import Admin from '../views/Admin';
import AddAlbum from '../views/AddAlbum';

Vue.use(VueRouter);

const routes = [
    {
        path: '/albums',
        name: 'Albums',
        component: Albums
    },
    {
        path: '/albums/single/:id',
        name: 'Single album',
        component: SingleAlbum
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin
    },
    {
        path: '/admin/add',
        name: 'Add album',
        component: AddAlbum
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
