<template>
  <div class="app">
    <h3>App component</h3>
    <h3>car name:{{ name }}</h3>
    <h3>car price:{{ price }}</h3>
    <Component2Item :name="name" :price="price" />
  </div>
</template>

<script>
import Component2Item from './components/component2Item.vue';
import { reactive, provide, toRefs } from 'vue';
export default {
  name: 'App',
  components: { Component2Item },
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
  background-color: brown;
  padding: 10px;
}
</style>
