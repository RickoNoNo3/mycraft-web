import {createRouter, createWebHistory} from 'vue-router';
import Index from '../pages/index/Index.vue';
import News from '../pages/news/News.vue';
import Book from '../pages/book/Book.vue';
import CategoryListPage from '../pages/book/CategoryListPage.vue';
import CategoryPage from '../pages/book/CategoryPage.vue';
import ItemPage from '../pages/book/ItemPage.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    name: 'index',
    component: Index,
  }, {
    path: '/news',
    name: 'news',
    component: News,
  }, {
    path: '/book',
    name: 'book',
    component: Book,
    children: [{
      path: '',
      name: 'categoryListPage',
      component: CategoryListPage,
    }, {
      path: ':categoryId',
      name: 'categoryPage',
      component: CategoryPage,
      props: true,
    }, {
      path: 'item/:itemId',
      name: 'itemPage',
      component: ItemPage,
      props: true,
    }],
    //}, {
    //  path: '/index',
    //  name: 'index',
    //  component: Index,
  }],
  scrollBehavior(to, _, savedPosition) {
    if (to.name === 'categoryPage') {
      return {top: 180, left: 0, behavior: 'smooth'};
    } else {
      if (savedPosition) {
        return savedPosition;
      } else {
        return {top: 0, left: 0, behavior: 'smooth'};
      }
    }
  },
});
