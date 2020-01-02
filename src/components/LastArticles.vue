<template>
  <div class="general">
    <Slider 
      texto="Bienvenido al master en frameworks para JavaScript"
      home="true"
    />
    <div class="center">
      <section id="content">
        <h2 class="subheader">Últimos articulos</h2>
        <!--LISTADO ARTICULOS-->
        <div id="articles">
          <Articles :articles="articles"></Articles>
        </div>
      </section>
      <Sidebar />
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";
import Articles from './Articles.vue';
import axios from 'axios';
import {Global} from '../Global';
export default {
  name: "LastArticles",
  components: {
    Slider,
    Sidebar,
    Articles
  },
  mounted() {
    this.getLastArticles();
  },
  data() {
    return {
      articles: null,
      url: Global.url
    };
  },
  methods: {
    getLastArticles() {
      axios.get(this.url + "articles/true").then(res => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;
          console.log(this.articles);
        }
      });
    }
  }
};
</script>