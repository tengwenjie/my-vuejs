import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  locale: 'en',
  // fallbackLocale: 'ja',
  legacy: false,
  messages: {
    ja: {
      message: {
        text: 'テキスト',
      },
    },
    en: {
      message: {
        text: 'text',
      },
    },
  },
});
export default i18n;
