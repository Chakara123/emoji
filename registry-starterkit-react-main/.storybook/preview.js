export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  showRoots: true,
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  locale: 'en',
  locales: {
    ar: { title: 'Arabic' },
    de: { title: 'German' },
    en: { title: 'English' },
    es: { title: 'Spanish' },
    fr: { title: 'French' },
    it: { title: 'Italian' },
    ja: { title: 'Japanese' },
    ko: { title: 'Korean' },
    pl: { title: 'Polish' },
    pt: { title: 'Portuguese' },
    ru: { title: 'Russian' },
    tr: { title: 'Turkish' },
    zh: { title: 'Chinese' },
  },
  layout: 'fullscreen',
};

export const decorators = [
  (story) => (
    <div
      role="main"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '5px',
      }}
    >
      <div style={{ position: 'relative', width: '100%', zIndex: 0 }}>
        {story()}
      </div>
    </div>
  ),
];
