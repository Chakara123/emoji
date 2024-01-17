import { IntlProvider } from 'react-intl';

import { ReactFramework } from '@storybook/react';
import { ReactElement } from 'react';
import { Locale } from '../../types/locale';
import { Args, DecoratorFunction } from '@storybook/csf';

export type MessagesByCode = Record<
  Locale,
  Record<string, { type: number; value: string }[]>
>;

function storyWithTranslationFromMessages<TArgs extends Args = Args>(
  localeOverride: Locale | void,
  messagesByLangcode: MessagesByCode,
): DecoratorFunction<ReactFramework, TArgs> {
  return (Story, { globals: { locale } }): ReactElement => {
    const requestedLocale = (localeOverride || locale) as Locale | void;
    return (
      <IntlProvider
        locale={requestedLocale || 'en'}
        messages={messagesByLangcode[requestedLocale || Locale.EN]}
      >
        <Story />
      </IntlProvider>
    );
  };
}

export default storyWithTranslationFromMessages;
