<template>
  <button @click="showPop = !showPop">open/close pop up</button>
  <teleport to="body">
    <div class="mask" v-if="showPop">
      <div class="popup">
        <h2>Title</h2>
        <h3>Message1</h3>
        <h3>Message2</h3>
        <button @click="showPop = false">close</button>
      </div>
    </div>
  </teleport>
</template>
<script>
import { ref } from 'vue';
export default {
  name: 'PopUp',
  setup() {
    let showPop = ref(false);
    return { showPop };
  },
};
</script>
<style>
.popup {
  background-color: white;
  padding: 10px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 200px;
  transform: translate(-50%, -50%);
  border: solid 1px black;

  border-radius: 3px;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.35);
}
.mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
