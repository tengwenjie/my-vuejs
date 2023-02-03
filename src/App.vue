<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <h3>名前：{{ user.name }}</h3>
  <h3>年齢：{{ user.age }}</h3>
  <h3>仕事：{{ user.job }}</h3>
  <h3>趣味：{{ user.hobby }}</h3>
  <h3 v-show="user.sex">性別：{{ user.sex }}</h3>
  <button @click="changeInfo">change name</button>
  <button @click="addGander">add gander</button>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   }
// }
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
    function addGander() {
      user.sex = '男';
    }
    return {
      user,
      changeInfo,
      addGander,
    };
  },
};
</script>
