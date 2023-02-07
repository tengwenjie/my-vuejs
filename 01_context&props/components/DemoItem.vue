<template>
  <h3>name:{{ person.name }}</h3>
  <h3>age:{{ person.age }}</h3>
  <h3>{{ props.msg }}</h3>
  <h3>{{ props.role }}</h3>
  <h3>{{ number }}</h3>
  <button @click="test">say hello</button>
  <button @click="number++">click+</button>
  <hr/>
  <h3><slot name="lisi"></slot></h3>
</template>
<script>
import { reactive,ref } from 'vue';
export default {
  name: 'DemoItem',
  props:['msg','role'],
  emits:['say'],
  // slots:['lisi'],
  setup(props,context) {
    console.log(props)
    let person = reactive({
      name: 'zhang san',
      age: 18,
    });
    let number = ref(0)
    function test(){
      context.emit('say',number.value)
    }
   
    return { person,props,test,number,context };
  },
};
</script>
