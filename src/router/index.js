import Vue from 'vue';
import VueRouter from 'vue-router';
import Albums from '../views/Albums';
import SingleAlbum from '../views/SingleAlbum';

Vue.use(VueRouter);

const routes = [
  {
    path: '/albums',
    name: 'Albums',
    component: Albums
  },
  {
    path: '/albums/single',
    name: 'Single album',
    component: SingleAlbum
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
