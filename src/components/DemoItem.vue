<template>
  test:<input type="text" v-model="test"/>
  name:<input type="text" v-model="person.name"/><br>
  age:<input type="text" v-model="person.age"/><br>
  salary:<input type="text" v-model="person.job.j1.salary"/><br>
  <hr/>

  
</template>
<script>
import { reactive,watch,ref } from 'vue';
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
    
    watch(test,(newValue,oldValue)=>{
      console.log(newValue,oldValue)
    })

    watch(person,(newValue,oldValue)=>{
      console.log(newValue,oldValue)
    },{immediate:true})

      // watch(()=>person.name,(newValue,oldValue)=>{
      //   console.log(newValue,oldValue)
      // })

      // watch(()=>person)

    return { person,test};
  },
};
</script>
