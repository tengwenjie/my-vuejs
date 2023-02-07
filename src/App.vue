<template>
  <DemoItem msg="this is a test" code="0101" @hello="sayHello">
    <template v-slot:qwe>
      <span>say hello</span>
    </template>
  </DemoItem>
</template>

<script>
import DemoItem from './components/DemoItem';
export default {
  name: 'App',
  components: { DemoItem },
  setup() {
    function sayHello() {
      console.log('tom say hello');
    }
    return { sayHello };
  },
};
</script>
