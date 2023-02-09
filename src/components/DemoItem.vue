<template>
  <h3>{{ name }}</h3>
  <h3>{{ age }}</h3>
  <h3>{{ job.j1.salary }}</h3>
  <button @click="name += '~'">name+</button>
  <button @click="age++">age+</button>
  <button @click="job.j1.salary++">salary+</button>
  <hr />
  <h3>{{ person }}</h3>
</template>
<script>
import { reactive, toRefs } from 'vue';
export default {
  name: 'DemoItem',
  setup() {
    const person = reactive({
      name: 'Zhang San',
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });
    return { ...toRefs(person), person };
  },
};
</script>
