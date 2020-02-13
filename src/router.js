import Vue from 'vue';
import Router from 'vue-router';
import Albums from '@/components/Albums';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', component: Albums },
        { path: '/albums/:id', component: SingleAlbum }
    ]
});
