import React from 'react';
import { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { themes } from '../ui/themes';
import { NextComponentType, NextPageContext } from 'next';
import { Provider } from 'react-redux';
import store from '../redux/store';
import "antd/dist/antd.css";

interface MyAppProps extends AppProps {
  Component: {
    Layout?: React.ExoticComponent<{
      children?: React.ReactNode;
    }>;
  } & NextComponentType<NextPageContext, any, {}>;
}

export default function App({ Component, pageProps }: MyAppProps) {
  const Layout = Component.Layout || React.Fragment;

  return (
    <Provider store={store}>
      <ThemeProvider theme={themes.light}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

// Reset default browser styling
const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  }

  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html {
    min-height: 100vh;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;   
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    margin: 0;
    min-height: 100vh;

    overflow-y: hidden;

    main{
        height: 100vh;
    }

    .scrollable{
        overflow-y: scroll;
    }
  }

  #__next {
    min-height: 100vh;
  }

  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
