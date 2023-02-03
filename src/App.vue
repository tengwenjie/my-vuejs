<template>
  <h3>名前：{{ user.name }}</h3>
  <h3 v-show="user.age">年齢：{{ user.age }}</h3>
  <h3>仕事：{{ user.job }}</h3>
  <h3>趣味：{{ user.hobby }}</h3>
  <h3 v-show="user.sex">性別：{{ user.sex }}</h3>
  <h3 v-show="user.company">会社：{{ user.company }}</h3>
  <button @click="changeInfo">change name</button>
  <button @click="addGanderAndCompany">add gander</button>
</template>

<script>
import { reactive } from 'vue';
export default {
  name: 'App',
  setup() {
    let user = reactive({
      name: 'tom',
      age: 18,
      job: 'Web Enageer',
      hobby: ['basketball', 'football', 'pingpang'],
    });
    function changeInfo() {
      user.name = 'David';
      (user.age = 20), (user.job = 'Java Enageer'), (user.hobby = ['vido Game', 'Movie', 'music']);
    }
    function addGanderAndCompany() {
      user.sex = '男';
      user.company = 'pactera';
    }
    function deleteAge() {
      delete user.age;
    }
    return {
      user,
      changeInfo,
      addGanderAndCompany,
      deleteAge,
    };
  },
};
</script>
