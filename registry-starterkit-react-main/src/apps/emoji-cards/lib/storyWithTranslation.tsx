import storyWithTranslationFromMessages, {
  MessagesByCode,
} from '../../../common/storybook/storyWithTranslationFromMessages';
import { Locale } from '../../../types/locale';

import messages_ar from '../locales/compiledStrings/ar.json';
import messages_de from '../locales/compiledStrings/de.json';
import messages_en from '../locales/compiledStrings/en.json';
import messages_es from '../locales/compiledStrings/es.json';
import messages_fr from '../locales/compiledStrings/fr.json';
import messages_it from '../locales/compiledStrings/it.json';
import messages_ja from '../locales/compiledStrings/ja.json';
import messages_ko from '../locales/compiledStrings/ko.json';
import messages_pl from '../locales/compiledStrings/pl.json';
import messages_pt from '../locales/compiledStrings/pt.json';
import messages_ru from '../locales/compiledStrings/ru.json';
import messages_tr from '../locales/compiledStrings/tr.json';
import messages_zh from '../locales/compiledStrings/zh.json';

const messagesByLangcode: MessagesByCode = {
  [Locale.AR]: messages_ar,
  [Locale.DE]: messages_de,
  [Locale.EN]: messages_en,
  [Locale.ES]: messages_es,
  [Locale.FR]: messages_fr,
  [Locale.IT]: messages_it,
  [Locale.JA]: messages_ja,
  [Locale.KO]: messages_ko,
  [Locale.PL]: messages_pl,
  [Locale.PT]: messages_pt,
  [Locale.RU]: messages_ru,
  [Locale.TR]: messages_tr,
  [Locale.ZH]: messages_zh,
};

const storyWithTranslation = (localeOverride: Locale | void) =>
  storyWithTranslationFromMessages(localeOverride, messagesByLangcode);

export default storyWithTranslation;
