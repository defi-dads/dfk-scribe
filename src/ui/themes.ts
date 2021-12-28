export const themes = {
  light: {
    colors: {
      primary: '#fff',
      text: '#000',
      // secondary: ''e
      blue: '#1c1c1c',
      footerBackground: '#f6f6f6',
      mainColor: '#fff',
      mainColor2: 'rgb(44, 2, 77)',
      mainColor3: '#5b9645'
    }
  },
} as const;

export type Theme = typeof themes.light;
