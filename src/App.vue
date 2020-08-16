<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("from app page");
    $('.fade').hide(5000);
  },
  components: {
  },
}
</script>

<style scoped>

</style>
