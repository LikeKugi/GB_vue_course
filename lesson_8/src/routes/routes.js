import HomePage from "../pages/HomePage.vue";
import ContactsPage from "../pages/ContactsPage.vue";
import {createRouter, createWebHistory} from "vue-router";
import AboutPage from "@pages/AboutPage.vue";
import ErrorPage from "@pages/ErrorPage.vue";
import CatalogPage from "@pages/CatalogPage.vue";
import GoodsList from "@components/GoodsList.vue";

const routes = [
  {path: '', component: HomePage},
  {path: '/contacts', component: ContactsPage},
  {path: '/about', component: AboutPage},
  {path: '/tasks', component: () => import("@pages/TasksPage.vue")},
  {path: '/catalog', component: CatalogPage, redirect: '/catalog/1',
    children: [
      {path: ':page', component: GoodsList}
    ]},
  {path: '/catalog/:page', component: CatalogPage},
  {path: '/:pathMatch(.*)*', component: ErrorPage}
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
