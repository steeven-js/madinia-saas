import { useEffect, useState } from 'react';

// @third-party
import { IntlProvider, MessageFormatElement } from 'react-intl';

// @project
import { ThemeI18n } from 'src/config';
import useConfig from 'src/hooks/useConfig';
import { ChildrenProps } from 'src/types/root';

// @locales
const loadLocaleData = (locale: ThemeI18n) => {
  switch (locale) {
    case ThemeI18n.FR:
      return import('src/utils/locales/fr.json');
    case ThemeI18n.RO:
      return import('src/utils/locales/ro.json');
    case ThemeI18n.ZH:
      return import('src/utils/locales/zh.json');
    case ThemeI18n.EN:
    default:
      return import('src/utils/locales/en.json');
  }
};

/***************************  LOCALIZATION  ***************************/

export default function Locales({ children }: ChildrenProps) {
  const { i18n } = useConfig();

  const [messages, setMessages] = useState<Record<string, string> | Record<string, MessageFormatElement[]> | undefined>();

  useEffect(() => {
    loadLocaleData(i18n).then((d: { default: Record<string, string> | Record<string, MessageFormatElement[]> | undefined }) => {
      setMessages(d.default);
    });
  }, [i18n]);

  return (
    <>
      {messages && (
        <IntlProvider locale={i18n} defaultLocale="en" messages={messages}>
          {children as React.ReactElement}
        </IntlProvider>
      )}
    </>
  );
} 