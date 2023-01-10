import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/MainPage/MyPage.vue'),
  },
  {
    path: '/applications',
    name: 'applications',
    component: () => import('@/components/AppPage/Applications.vue'),
    children: [
      {
        path: '/candidates',
        name: 'candidates',
        component: () =>
          import('@/components/AppPage/Application/CandidatesPage.vue'),
      },
      {
        path: '/tasks',
        name: 'tasks',
        component: () =>
          import('@/components/AppPage/Application/TasksPage.vue'),
      },
      {
        path: '/templates',
        name: 'templates',
        component: () =>
          import('@/components/AppPage/Application/TemplatesPage.vue'),
      },
      {
        path: '/vacanci',
        name: 'vacanci',
        props: true,
        component: () =>
          import('@/components/AppPage/Application/VacanciPage.vue'),
      },
      {
        path: '/vacanci/:id',
        name: 'vacancyPage',
        props: true,
        component: () =>
          import('@/components/AppPage/Application/Vacancies/Vacancy.vue'),
      },
      {
        path: '/settings',
        name: 'settings',
        component: () =>
          import('@/components/AppPage/Application/SettingsPage.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
