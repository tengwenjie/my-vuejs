<template>
  <div class="child">
    <h3>Child Component</h3>
    <h3>{{ name }}</h3>
    <input type="text" v-model="props.name" />
    <GrandChild />
  </div>
</template>
<script>
import GrandChild from './GrandChild';
import { isReadonly } from 'vue';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Child',
  props: ['name', 'price'],
  components: { GrandChild },
  setup(props) {
    console.log(isReadonly(props));
    return {
      props,
    };
  },
};
</script>
<style>
.child {
  background-color: rgb(44, 32, 211);
  padding: 10px;
}
</style>
