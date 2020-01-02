<template>
  <div class="general">
    <Slider 
      texto="Página de pruebas"
    />
    <div class="center">
      <section id="content">
        <h2 class="subheader">Pagina de prueba</h2>
        <h3>{{id_desde_url}}</h3>
        <button @click="actualizarNombre()">Actualizar nombre</button>
        <button @click="redirigirAlBlog()">Redirigir</button>
        <h4>{{nombre}}</h4>
      </section>
      <Sidebar />
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";
export default {
  name: "Pagina",
  components: {
    Slider,
    Sidebar
  },
  created() {
    console.log("Componente Creado!!");
  },
  mounted() {
    //Recoger parámetro desde la url // Parámetro opcional
    //this.id_desde_url = this.$router.params.id;
    console.log("Componente Montado!!");
  },
  updated() {
    console.log("Componente Actualizado!!");
  },
  destroyed() {
    console.log("Componente Eliminado!!");
  },
  data() {
    return {
      id_desde_url: null,
      nombre: "Sebastián García"
    };
  },
  methods: {
    actualizarNombre() {
      this.nombre = "SEBASTIÁN GARCÍA ARIAS";
      console.log(this.nombre);
    },
    redirigirAlBlog() {
      this.$router.push("/blog");
    }
  }
};
</script>