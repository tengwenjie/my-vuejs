<template>
  <div class="app">
    <h3>App Component</h3>
    <Child :name="name" :price="price" />
  </div>
</template>
<script>
import Child from './components/Clild';
export default {
  name: 'App',
  components: { Child },
};
</script>
<style>
.app {
  background-color: aquamarine;
  padding: 10px;
}
</style>
