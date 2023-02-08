<template>
  test:<input type="text" v-model="test"/>
  name:<input type="text" v-model="person.name"/><br>
  age:<input type="text" v-model="person.age"/><br>
  salary:<input type="text" v-model="person.job.j1.salary"/><br>
  <hr/>
  <button @click="test++">add test</button>

  
</template>
<script>
import { reactive,watchEffect,ref } from 'vue';
export default {
  name: 'DemoItem',
  setup() {
    let test = ref(0)
    let person = reactive({
      name:'zhang',
      age:18,
      job:{
        j1:{
          salary:0
        }
      }
    });
    
    watchEffect(()=>{
      // const data1 = test.value
      const data2 = person.job.j1.salary
      // console.log(data1!==0?'test has been changed':undefined)
      console.log(data2==0?undefined:'salary has been changed!')
    })

    return { person,test};
  },
};
</script>
