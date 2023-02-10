<template>
  <div class="component2">
    <h3>component2</h3>
    <h3>car name:{{ props.name }}</h3>
    <h3>car price:{{ props.price }}</h3>
    <hr />
    <input type="test" v-model="props.name" />
    <Component3Item />
  </div>
</template>
<script>
import Component3Item from './component3Item';
export default {
  name: 'component2Item',
  components: { Component3Item },
  props: ['name', 'price'],
  setup(props) {
    return { props };
  },
};
</script>
<style>
.component2 {
  background-color: aquamarine;
  padding: 10px;
}
</style>
