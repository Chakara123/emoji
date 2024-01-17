import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime';
import { IntlProvider } from 'react-intl';
import normalizeWidgetInput from '../../common/normalizeWidgetInput';
import EmojiCards from './components/EmojiCards';
import widgetDefinition from './EmojiCards.widget';

import { RenderFn } from '../../types/widgets';
import { DATA } from './data/emojis';

const render: RenderFn = async function (instanceId, langCode, origin, cb) {
  const { element, locale, messages } = await normalizeWidgetInput(
    instanceId,
    langCode,
    widgetDefinition,
  );
  if (!element || !locale) {
    return;
  }
  let emoji = element.getAttribute('data-emoji');
  const packedData = DATA.emojis[emoji || ''];
  if (!packedData) {
    emoji = 'tada';
  }
  ReactDOM.render(
    <IntlProvider locale={locale} messages={messages}>
      <EmojiCards emoji={emoji || 'tada'} />
    </IntlProvider>,
    element,
    () => cb(element),
  );
};

export default render;
