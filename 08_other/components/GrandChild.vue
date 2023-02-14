<template lang="">
  <div class="grandChild">
    <h3>Grand Child Component</h3>
    <PopUp />
  </div>
</template>
<script>
import PopUp from './PopUp';
export default {
  name: 'GrandChild',
  components: { PopUp },
};
</script>
<style>
.grandChild {
  background-color: blueviolet;
  padding: 10px;
}
</style>
