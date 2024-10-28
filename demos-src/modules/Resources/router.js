export default [
  {
    path: '/resources',
    name: 'Resources',
    component: () => import('./Resources.vue'),
    meta: {
      id: 'resources',
      parent: 'root',
      parents: ['root'],
      order: 5,
    },
  },
]