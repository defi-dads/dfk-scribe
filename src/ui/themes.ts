export const themes = {
  light: {
    primary: '#fff',
    text: '#1c1c1c',
    footerBackground: '#f6f6f6',
    mainColor: '#fff',
    mainColor2: 'rgb(251, 62, 134)',
    mainColor3: 'rgb(44, 2, 77)'
  },
} as const;

export type Theme = typeof themes.light;
