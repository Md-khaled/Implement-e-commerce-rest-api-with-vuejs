<template>
    <div class="container">
      <Navbar></Navbar>
      <!-- <Slider></Slider> -->
      <router-view/>
      <Footer></Footer>

      <div class="fade bg-warning">jquery test check that is work or not </div>
    </div>
</template>

<script>
//import Navbar from '../../components/Navbar.vue';
import Navbar from './shared/Navbar.vue';
import Slider from './shared/Slider.vue';
import Footer from './shared/Footer.vue';
import('../../assets/front/css/main.css');
import('../../assets/front/css/all.css');
import('../../assets/front/css/owl.carousel.min.css');
import('../../assets/front/js/owl.carousel.min.js');
export default {
  mounted() {
    console.log("from app page");
    $('.fade').hide(5000);
  },
  components: {
    Navbar,
    Footer,
    Slider,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #D2B48C;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
