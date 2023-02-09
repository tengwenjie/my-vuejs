<template>
  <div>TestItem</div>
  <h3>X:{{ point.x }} Y:{{ point.y }}</h3>
</template>
<script>
import usePoint from '../hooks/usePoint';
export default {
  name: 'testItem',
  setup() {
    let point = usePoint();
    return { point };
  },
};
</script>
