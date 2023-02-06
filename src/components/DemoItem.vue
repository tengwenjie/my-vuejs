<template>
  <h3>{{ sum }}</h3>
  <button @click="sum++">click+1</button>
  <hr />
  <h3>{{ msg }}</h3>
  <button @click="msg += '*'">click change message</button>
  <hr />
  <h2>Name:{{ person.name }}</h2>
  <h2>Age:{{ person.age }}</h2>
  <h2>Salary:{{ person.job.j1.salary }}k</h2>
  <button @click="person.name += '*'">change name</button>
  <button @click="person.age++">increment age</button>
  <button @click="incrementSalary">increment salary</button>
</template>
<script>
import { ref, reactive, watch } from 'vue';
export default {
  name: 'DemoItem',
  setup() {
    let sum = ref(0);
    let msg = ref('hello world');
    let person = reactive({
      name: 'Zhang San',
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });
    function incrementSalary() {
      person.job.j1.salary++;
    }

    //watch one data
    // watch(sum, (newValue, oldValue) => {
    //   console.log('sum', newValue, oldValue);
    // });

    //watcu multi data
    // watch([sum, msg], (newValue, oldValue) => {
    //   console.log('sum or msg changed', newValue, oldValue);
    // });

    //immdediate,deep
    // watch(
    //   sum,
    //   (newValue, oldValue) => {
    //     console.log('sum has been changed', newValue, oldValue);
    //   },
    //   { immediate: true }
    // );

    //watch object -> can not get correct old value
    // watch(person, (newValue, oldValue) => {
    //   console.log('person has been changed', newValue, oldValue);
    // });

    //watch single data
    watch(
      () => person.age,
      (newValue, oldValue) => {
        console.log('age has been changed', newValue, oldValue);
      },
      { immediate: true }
    );

    return { sum, msg, person, incrementSalary };
  },
};
</script>
