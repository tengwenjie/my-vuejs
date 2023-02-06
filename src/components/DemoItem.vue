<template>
  <h2>profile</h2>
  first name:<input type="text" v-model="person.firstName" /><br />
  last name :<input type="text" v-model="person.lastName" />
  <hr />
  <h3>{{ person.fullName }}</h3>
  <input type="text" v-model="person.fullName" />
</template>
<script>
import { reactive, computed } from 'vue';
export default {
  name: 'DemoItem',
  props: ['msg', 'code'],
  emits: ['hello'],
  setup() {
    let person = reactive({
      firstName: 'Zhang',
      lastName: 'san',
    });
    // person.fullName = computed(() => {
    //   return person.firstName + '-' + person.lastName;
    // });
    person.fullName = computed({
      get() {
        return person.firstName + '-' + person.lastName;
      },
      set(value) {
        const nameArr = value.split('-');
        person.firstName = nameArr[0];
        person.lastName = nameArr[1];
      },
    });
    return { person };
  },
};
</script>
