<template>
  <h3>msg:{{ props.msg }}</h3>
  <h3>code:{{ props.code }}</h3>
  <button @click="test">click say</button>
  <hr />
  <h3>new msg:<slot name="qwe" /></h3>
</template>
<script>
export default {
  name: 'DemoItem',
  props: ['msg', 'code'],
  emits: ['hello'],
  slots: ['qwe'],
  setup(props, context) {
    console.log(context.slots);
    function test() {
      context.emit('hello');
    }
    return { props, test, context };
  },
};
</script>
