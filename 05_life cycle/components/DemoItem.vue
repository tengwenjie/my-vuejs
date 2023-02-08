<template>
<h3>DemoItem</h3>
<hr/>
sum:<h3>{{ sum }}</h3><br>
<button @click="sum++">add sum</button>
</template>
<script>
import {ref,onMounted,onBeforeMount,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'
export default {
  setup(){
    let sum=ref(0)
    console.log("created")
    onBeforeMount(() => {
      console.log("before mount")
    }),
    onMounted(() => {
      console.log("mounted")
    })
    onBeforeUpdate(()=>{
      console.log("before update")
    })
    onUpdated(()=>{
      console.log("updated")
    })
    onBeforeUnmount(()=>{
      console.log("before unmount")
    })
    onUnmounted(()=>{
      console.log("unmounted")
    })

    return {sum}
  }

};
</script>
