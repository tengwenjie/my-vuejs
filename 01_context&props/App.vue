<template>
  <DemoItem @say="sayHelloWorld" msg="hello world" role="student">
   <template v-slot:lisi>
    <span>li si</span>
   </template>
  </DemoItem>
</template>

<script>
import DemoItem from './components/DemoItem';
export default {
  name: 'App',
  components: {DemoItem},
  setup(){
    function sayHelloWorld(value){
      alert(`say hello world ${value}`)
    }
    return {
      sayHelloWorld
    }
  }
};
</script>
