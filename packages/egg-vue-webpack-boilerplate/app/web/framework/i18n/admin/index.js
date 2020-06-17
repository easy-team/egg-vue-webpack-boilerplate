import VueI18n from 'vue-i18n';
import cn from './cn';
import en from './en';
export default function createI18n(locale) {
  return new VueI18n({
    locale,
    messages: {
      en,
      cn
    }
  });
}