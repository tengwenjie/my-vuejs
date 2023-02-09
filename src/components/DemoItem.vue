<template>
  <h3>{{ name }}</h3>
  <h3>{{ age }}</h3>
  <h3>{{ job.j1.salary }}</h3>
  <button @click="name += '~'">name+</button>
  <button @click="age++">age+</button>
  <button @click="job.j1.salary++">salary+</button>
  <h3>{{ person }}</h3>
  <hr />
  <h3>{{ x.c }}</h3>
  <button @click="x = { c: 1234 }">click exchange</button>
  <button @click="x.y++">click ++</button>
</template>
<script>
import { toRefs, reactive, shallowRef } from 'vue';
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

    const x = shallowRef({ c: 1111 });
    console.log(x);

    return { ...toRefs(person), person, x };
  },
};
</script>
