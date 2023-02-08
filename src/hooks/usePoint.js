import { onMounted, onBeforeUnmount, reactive } from 'vue';
export default function () {
  let point = reactive({
    x: 0,
    y: 0,
  });
  function clickEvent(event) {
    (point.x = event.pageX), (point.y = event.pageY), console.log(point.x, point.y);
  }
  onMounted(() => {
    window.addEventListener('click', clickEvent);
  });
  onBeforeUnmount(() => {
    window.removeEventListener('click', clickEvent);
  });
  return point;
}
