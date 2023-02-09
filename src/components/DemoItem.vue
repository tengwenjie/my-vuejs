<template>
  <h3>{{ name }}</h3>
  <h3>{{ age }}</h3>
  <h3>{{ job.j1.salary }}</h3>
  <button @click="name += '~'">name+</button>
  <button @click="age++">age+</button>
  <button @click="job.j1.salary++">salary+</button>
  <hr />
  <h3>{{ sum }}</h3>
  <button @click="sum++">click ++</button>
</template>
<script>
import { toRefs, reactive, ref, shallowReadonly, readonly } from 'vue';
export default {
  name: 'DemoItem',
  setup() {
    let sum = ref(0);
    let person = reactive({
      name: 'Zhang San',
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    person = shallowReadonly(person);
    sum = readonly(sum);

    return { ...toRefs(person), sum };
  },
};
</script>
