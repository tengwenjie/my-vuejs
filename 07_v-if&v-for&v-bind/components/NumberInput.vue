<template>
  <input type="number" :value="props.modelValue" @input="onInputNumber" />
</template>
<script>
export default {
  name: 'NumberInput',
  props: ['modelValue'],
  emits: ['update:modelValue'],
  setup(props, context) {
    function onInputNumber(event) {
      context.emit('update:modelValue', Number(event.target.value));
    }
    return { props, onInputNumber };
  },
};
</script>
<style></style>
