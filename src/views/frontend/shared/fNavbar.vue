<template>
  <div >
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div  id="nav">
      <router-link to="/home" class="navbar-brand">Home</router-link>
        <router-link to="/about" class="navbar-brand">About</router-link>
      </div>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
     
      <form  class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item" v-if="token">
        <router-link to="/logout" class="btn btn-outline-primary">Log Out</router-link>
      </li>
      <li class="nav-item" v-for="(url,index) in urls" :key="index" v-else>
        <router-link :to="url.route" class="btn btn-outline-primary">{{url.name}}</router-link>
      </li>
  </ul>
  </nav>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      token:token,
      urls:[
      {name: 'Login',route: '/login'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
