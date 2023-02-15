import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home';

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/About'),
    children: [{ path: 'aboutChildren', component: () => import('../components/AboutChildren') }],
  },
  {
    path: '/article',
    name: 'Article',
    component: () => import('../components/Article'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
