<template>
  <div class="component3">
    <h3>component</h3>
    <h3>car name:{{ name }}</h3>
    <h3>car price:{{ price }}</h3>
    <input type="text" v-model="name" />
    <input type="text" v-model="price" />
  </div>
</template>
<script>
import { inject, toRefs } from 'vue';
export default {
  name: 'component3Item',
  setup() {
    let car = inject('car');
    return { ...toRefs(car) };
  },
};
</script>
<style>
.component3 {
  background-color: cornflowerblue;
  padding: 10px;
}
</style>
