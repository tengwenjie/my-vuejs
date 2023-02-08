<template>
  <button @click="showDemoItem = !showDemoItem">show or close</button>
  <DemoItem v-if="showDemoItem"/>
</template>

<script>
import DemoItem from './components/DemoItem';
import {ref} from 'vue'
export default {
  name: 'App',
  components: {DemoItem},
  setup(){
    let showDemoItem=ref(true)
    return {showDemoItem}
  }
};
</script>
