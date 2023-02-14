<template>
  <h3>Welcome to the page of {{ info.firstName }}-{{ info.lastName }}</h3>
</template>
<script>
import { toRefs } from 'vue';
export default {
  name: 'TheHeader',
  props: ['info'],
  setup(props) {
    return { ...toRefs(props) };
  },
};
</script>
<style></style>
