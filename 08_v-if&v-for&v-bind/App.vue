<template>
  <TheHeader text="My text" />
  <div v-if="validationMessage.length">
    <h3 class="validationMessage" v-for="message in validationMessage" :key="message">
      {{ message }}
    </h3>
  </div>
  <div v-else>
    <h3>{{ count }}</h3>
  </div>
  <!-- <BaseButton @onClick="plus" :disabled="count >= 999"> -->
  <BaseButton @onClick="plus">
    <template v-slot:name>
      <span>+</span>
    </template>
  </BaseButton>
  <!-- <BaseButton @onClick="minus" :disabled="count <= 0"> -->
  <BaseButton @onClick="minus">
    <template v-slot:name>
      <span>-</span>
    </template>
  </BaseButton>
  <TheHeader />

  <NumberInput v-model.numberOnly="inputCount" />
  <BaseButton @onClick="insertCount">
    <template v-slot:name>
      <span>insert</span>
    </template>
  </BaseButton>
</template>
<script>
import BaseButton from './components/BaseButton';
import TheHeader from './components/TheHeader';
import NumberInput from './components/NumberInput';
import { ref, watch } from 'vue';
export default {
  name: 'App',
  // eslint-disable-next-line vue/no-unused-components
  components: { BaseButton, TheHeader, NumberInput },
  setup() {
    let count = ref(0);
    let inputCount = ref(0);
    let validationMessage = ref([]);
    function plus() {
      count.value++;
    }
    function insertCount() {
      count.value = inputCount.value;
    }
    function minus() {
      count.value--;
    }

    watch(count, (next) => {
      if (next > 999) {
        // count.value = 999;
        validationMessage.value.push('999以上は入力できません');
      } else if (next < 0) {
        count.value = 0;
        validationMessage.value.push('0以下は入力できません');
      }
    });
    return { count, inputCount, validationMessage, insertCount, plus, minus };
  },
};
</script>
<style>
.validationMessage {
  color: red;
}
</style>
