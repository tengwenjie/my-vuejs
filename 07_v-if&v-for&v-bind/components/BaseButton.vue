<template>
  <button @click="handleClick"><slot name="name" /></button>
</template>
<script>
export default {
  name: 'BaseButton',
  slot: ['name'],
  emits: ['onClick', 'onInsertCount'],
  setup(props, context) {
    function handleClick() {
      context.emit('onClick');
    }

    return { props, context, handleClick };
  },
};
</script>
<style></style>
