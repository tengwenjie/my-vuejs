<template>
  <button @click="handleClick"><slot name="name" /></button>
</template>
<script>
import { toRefs } from 'vue';
export default {
  name: 'BaseButton',
  emits: ['onClick'],
  slots: ['name'],
  setup(props, context) {
    function handleClick() {
      context.emit('onClick');
    }
    return {
      ...toRefs(props),
      handleClick,
    };
  },
};
</script>
<style></style>
