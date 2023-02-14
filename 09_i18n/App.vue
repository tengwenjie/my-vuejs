<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable no-unused-vars -->
<template>
  <TheHeader :info="person" />
  <h3>{{ count }}</h3>
  <BaseButton @onClick="plus">
    <template v-slot:name>+</template>
  </BaseButton>
  <BaseButton @onClick="minus">
    <template v-slot:name>-</template>
  </BaseButton>
  <NumberInput v-model.numberOnly="inputCount" />
  <BaseButton @onClick="insertCount">
    <template v-slot:name>
      <span>insert</span>
    </template>
  </BaseButton>
  <hr />
  <h3>{{ $t('message.text') }}</h3>
  <select v-model="locale">
    <option value="en">en</option>
    <option value="ja">ja</option>
  </select>
  <button @click="setLang('ja')">Japanese</button>
  <button @click="setLang('en')">English</button>
</template>
<script>
import { useI18n } from 'vue-i18n';
import { reactive, ref } from 'vue';
import TheHeader from './components/TheHeader';
import BaseButton from './components/BaseButton';
import NumberInput from './components/NumberInput';
export default {
  name: 'App',
  components: { TheHeader, BaseButton, NumberInput },
  setup() {
    let person = reactive({
      firstName: 'Zhang',
      lastName: 'San',
      age: 18,
      job: 'student',
      birth: '2/21',
      message: 'Welcome to My Page!!',
    });
    let count = ref(0);
    let inputCount = ref(0);
    const { t, locale } = useI18n();
    function plus() {
      count.value++;
    }
    function minus() {
      count.value--;
    }
    function insertCount() {
      count.value = inputCount.value;
    }
    function setLang(lang) {
      locale.value = lang;
    }

    return { person, count, inputCount, plus, minus, insertCount, t, locale, setLang };
  },
};
</script>
<style></style>
