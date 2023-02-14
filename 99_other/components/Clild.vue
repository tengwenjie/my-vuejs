<template>
  <div class="child">
    <h3>Child Component</h3>
    <GrandChild />
  </div>
</template>
<script>
import GrandChild from './GrandChild';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Child',
  components: { GrandChild },
};
</script>
<style>
.child {
  background-color: rgb(44, 32, 211);
  padding: 10px;
}
</style>
