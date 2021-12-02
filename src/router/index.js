import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Posts from "@/views/Posts";
import EditPost from "@/views/EditPost";
import CreatePost from "@/views/CreatePost";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts',
    name: 'Alle Posts',
    component: Posts
  },
  {
    path: '/posts/:id',
    name: 'Post bearbeiten',
    component: EditPost
  },
  {
    path: '/posts/create',
    name: 'Post erstellen',
    component: CreatePost
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
