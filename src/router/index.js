import { createRouter, createWebHistory } from 'vue-router';

const HomeView = () => import('../views/m-mainweb.vue');
const MaintenanceView = () => import('../views/m-maintenance.vue');
const ErrorView = () => import('../views/m-nopage.vue');

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/',
  //   name: 'maintenance',
  //   component: MaintenanceView
  // },
  {
    path: '/:pathMatch(.*)*', // Catch-all route for undefined paths
    name: 'not-found',
    component: ErrorView
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
