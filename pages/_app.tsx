import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
