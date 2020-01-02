import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';
import VueMoment from 'vue-moment';

import LastArticles from './components/LastArticles.vue';
import MiComponente from './components/MiComponente.vue';
import HelloWorld from './components/HelloWorld.vue';
import Blog from './components/Blog.vue';
import Formulario from './components/Formulario.vue';
import Pagina from './components/Pagina.vue';
import ErrorComponent from './components/ErrorComponent.vue';
import Peliculas from './components/Peliculas.vue';
import Search from './components/Search.vue';
import Redirect from './components/Redirect.vue';
import Article from './components/Article.vue';
import CreateArticle from './components/CreateArticle.vue';
import EditArticle from './components/EditArticle.vue';


Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuelidate);

const moment = require('moment');
require('moment/locale/es');
Vue.use(VueMoment, {moment});

const routes = [
  {path: '/home', component: LastArticles },
  {path: '/ultimos-articulos', component: LastArticles },
  {path: '/blog', component: Blog },
  {path: '/articulo/:id', name: 'article', component: Article },
  {path: '/editar/:id', name: 'edit', component: EditArticle },
  {path: '/crear-articulo', name: 'create', component: CreateArticle },
  {path: '/Formulario', component: Formulario },
  {path: '/pagina/:id?', name: 'pagina', component: Pagina },
  {path: '/buscador/:searchString', name: 'buscador', component: Search },
  {path: '/redirect/:searchString', name: 'redirect', component: Redirect },
  {path: '/peliculas', name: 'peliculas', component: Peliculas },
  {path: '/pagina-2', name: 'pagina2', component: MiComponente },
  {path: '/mi-componente', component: MiComponente },
  {path: '/hola-mundo', component: HelloWorld },
  {path: '/', component: LastArticles },
  {path: '*', component: ErrorComponent }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
