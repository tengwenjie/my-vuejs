<template>
  <router-link to="/">Home</router-link><br />
  <router-link to="/about">About</router-link><br />
  <router-link to="/article">Article</router-link><br />
  <router-view />
</template>
<script>
export default {
  name: 'App',
};
</script>
<style></style>
