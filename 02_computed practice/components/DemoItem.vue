<template>
  first name:<input type="text" v-model="person.firstName"/><br>
  last name:<input type="text" v-model="person.lastName"/><br>
  <hr/>
  <h3>full name:{{ person.fullName }}</h3>
  full name:<input type="text" v-model="person.fullName"/>
  
</template>
<script>
import { reactive,computed } from 'vue';
export default {
  name: 'DemoItem',
  setup() {
    let person = reactive({
      firstName:'zhang',
      lastName:'san',
      fullName:''
    });
    
    person.fullName = computed({
      get(){
        return person.firstName +" "+ person.lastName
      },
      set(value){
        const nameArr= value.split(' ')
        person.firstName = nameArr[0]
        person.lastName=nameArr[1]
      },
    })

    return { person};
  },
};
</script>
