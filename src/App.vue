<template>
  <div>
    <div class="container">
        <router-link to="/" class="btn btn-success" role="button">Home</router-link>
        <router-link to="/about" class="btn btn-info" role="button">About</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style scoped>
.btn-success {
    margin: 0 5px 50px 0;
}
.btn-info {
    margin: 0 0 50px 5px;
}
</style>
