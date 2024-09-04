import { createRouter, createWebHistory } from 'vue-router';
const routes = [
    {
        path: '/board',
        name: '게시판목록',
        component: () => import('@/views/board/BoardList.vue')
    }
/*    {
        path: '/board/detail/:board_sid',
        name: 'boardDetail',
        component: () => import('@/views/BoardDetailView.vue'),
    },*/
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach(async (to, from, next) => {
    console.log(to);
    console.log(from);
    console.log(next);
    next();
});

export default router;