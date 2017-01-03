/**
 * Created by 35781 on 2016/11/28.
 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Foo = resolve => require(['./views/Foo.vue'], resolve);
const Settings = resolve => require(['./views/settings.vue'], resolve);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: Foo
  }, {
    path: '/settings',
    component: Settings
  }, {
    path: '/results',
    component: Foo
  }, {
    path: '*',
    redirect: '/'
  }]
});
