<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h1 class="subheader">Peliculas</h1>
        <div class="mis-datos" v-if="misDatos">
          {{misDatos}}
           <br />
           {{ nombre | mayusculas | concatenaYear('Este es el mejor año')}}   
        </div>
        <div class="favorita" v-if="favorita">
          La película marcada es:
          <h3>{{favorita.title}}</h3>
        </div>
        <!--LISTADO ARTICULOS-->
        <div id="articles">
          <!--v-for="pelicula in peliculas" v-bind:key="pelicula.title"-->
          <div v-for="pelicula in peliculasMayuscula" v-bind:key="pelicula.title">
            <Pelicula 
            :pelicula="pelicula"
            @favorita="haLlegadoLaPeliculaFavorita"
            ></Pelicula>
          </div>
        </div>
      </section>
      <Sidebar />
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
import Pelicula from "./Pelicula.vue";
import Sidebar from "./Sidebar.vue";
export default {
  name: "Peliculas",
  components: {
    Pelicula,
    Sidebar
  },
  methods: {
    haLlegadoLaPeliculaFavorita(favorita){
      this.favorita = favorita;
    }
  },
  filters: {
    mayusculas(value){
      return value.toUpperCase();
    },
    concatenaYear(value, message){
      var date = new Date();
      return value + ' ' + date.getFullYear() + ' ' + message;
    }
  },
  computed: {
    peliculasMayuscula(){
      var peliculasMod = this.peliculas;
        for(var i = 0; i < this.peliculas.length; i++){
          peliculasMod[i].title = peliculasMod[i].title.toUpperCase();
        }
        return peliculasMod;
    },
    misDatos(){
      return this.nombre + ' ' + this.apellidos;
    } 
  },
  data() {
    return {
      nombre: 'Sebastián',
      apellidos:'García',
      favorita: null,
      peliculas: [
        {
          title: "Batman vs Superman",
          year: 2017,
          image:
            "https://dam.smashmexico.com.mx/wp-content/uploads/2018/04/24160545/batman_v_superman_dawn_of_justice-cover.jpg"
        },
        {
          title: "Gran torino",
          year: 2015,
          image:
            "http://razonesparacreer.com/wp-content/uploads/2017/10/grantorino-708x350@2x.jpg"
        },
        {
          title: "El señor de los anillos",
          year: 2003,
          image:
            "https://img.vixdata.io/pd/jpg-large/es/sites/default/files/btg/cine.batanga.com/files/9-datos-sobre-El-Senor-de-los-Anillos-que-no-estan-en-las-peliculas-7.jpg"
        }
      ]
    };
  }
};
</script>