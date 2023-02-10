<template lang="">
  <div class="grandChild">
    <h3>Grand Child Component</h3>
    <h3>car name:{{ name }}</h3>
    <h3>car price:{{ price }}</h3>
    <label>name:<input type="text" v-model="name" /></label><br />
    <label>price:<input type="text" v-model="price" /></label>
  </div>
</template>
<script>
import { inject, toRefs } from 'vue';
export default {
  name: 'GrandChild',
  setup() {
    let car = inject('car');
    return { ...toRefs(car) };
  },
};
</script>
<style>
.grandChild {
  background-color: blueviolet;
  padding: 10px;
}
</style>
