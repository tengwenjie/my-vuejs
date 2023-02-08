<template>
  <input type="text" v-model="person.name"/>
  <h3>age:{{ person.age }}</h3>
  <button @click="person.name+='*'">name change</button>
  <button @click="person.age++">age change</button>
</template>
<script>
import { reactive,watch } from 'vue';
export default {
  name: 'DemoItem',
  setup() {
    let person = reactive({
      name: 'zhang san',
      age: 18,
    });

    // watch(person,(newValue,oldValue)=>{
    //   console.log(newValue,oldValue)
    // })

    watch(person,(newValue,oldValue)=>{
      console.log(newValue,oldValue)
    })
    return { person};
  },
};
</script>
