<template>
  <h3>DemoItem</h3>
  <h3>coordinate:</h3>
  <span>X:{{ point.x }},</span><span>Y:{{ point.y }}</span>
</template>
<script>
import usePoint from '../hooks/usePoint';
export default {
  name: 'DemoItem',
  setup() {
    let point = usePoint();
    return { point };
  },
};
</script>
