<template>
  <div class="app">
    <h3>App Component</h3>
    <h3>car name:{{ name }}</h3>
    <h3>car price:{{ price }}</h3>
    <Child :name="name" :price="price" />
  </div>
</template>
<script>
import Child from './components/Clild';
import { reactive, provide, toRefs } from 'vue';
export default {
  name: 'App',
  components: { Child },
  setup() {
    let car = reactive({
      name: 'Benz',
      price: 40,
    });
    provide('car', car);
    return { ...toRefs(car) };
  },
};
</script>
<style>
.app {
  background-color: aquamarine;
  padding: 10px;
}
</style>
