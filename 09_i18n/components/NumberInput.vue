<template>
  <input type="number" :value="props.modelValue" @input="onInputNumber" />
</template>
<script>
export default {
  name: 'NumberInput',
  emits: ['update:modelValue'],
  props: ['modelValue'],
  setup(props, context) {
    function onInputNumber(event) {
      context.emit('update:modelValue', event.target.value);
    }
    return { props, onInputNumber };
  },
};
</script>
<style></style>
