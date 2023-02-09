<template>
  <button @click="showDemoItem = !showDemoItem">show or close</button>
  <DemoItem v-if="showDemoItem" />
  <hr />
  <TestItem />
</template>

<script>
import DemoItem from './components/DemoItem';
import TestItem from './components/TestItem';
import { ref } from 'vue';
export default {
  name: 'App',
  components: { DemoItem, TestItem },
  setup() {
    let showDemoItem = ref(true);
    return { showDemoItem };
  },
};
</script>
