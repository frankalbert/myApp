<template>
  <div>
    <router-link :to="{name: 'Home'}">Inicio</router-link>
    <router-link :to="{name: 'Facturacion'}">Facturacion</router-link>

    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>