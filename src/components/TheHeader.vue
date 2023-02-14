<template>
  <h3>{{ props.text
   }}</h3>
</template>
<script>
export default {
    name:'TheHeader',
    props:['text'],
    setup(props){
        return {props}
    }
};
</script>
<style></style>
