<template>
  <h3>name:{{ name }}</h3>
  <h3>age:{{ age }}</h3>
  <h3>salary:{{ job.j1.salary }}</h3>
  <h3 v-show="person.car">car:{{ person.car }}</h3>
  <button @click="name += '~'">name+</button>
  <button @click="age++">age+</button>
  <button @click="job.j1.salary++">salary+</button>
  <button @click="showRawData">to raw</button>
  <button @click="addCar">add car</button><br />
  <button v-show="person.car" @click="person.car.name += '~'">change car name</button>
  <button v-show="person.car" @click="addCarPrice">add car price</button>
</template>
<script>
import { toRefs, reactive, ref, toRaw, markRaw } from 'vue';
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

    function showRawData() {
      const d = toRaw(person);
      console.log(d);
    }

    function addCar() {
      person.car = markRaw({ name: 'Benz', price: 40 });
    }

    function addCarPrice() {
      person.car.price++;
      console.log(person.car.price);
    }

    return { person, ...toRefs(person), sum, showRawData, addCar, addCarPrice };
  },
};
</script>
