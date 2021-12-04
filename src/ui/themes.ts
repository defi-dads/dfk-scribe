export const themes = {
  light: {
    colors: {
      primary: '#fff',
      text: '#000',
      // secondary: ''
      blue: '#1c1c1c',
      footerBackground: '#f6f6f6',
      mainColor: '#fff',
      mainColor2: 'rgb(44, 2, 77)',
      mainColor3: 'rgb(251, 62, 134)'
    }
  },
} as const;

export type Theme = typeof themes.light;
