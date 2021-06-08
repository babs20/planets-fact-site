import styled, { ThemeProvider } from 'styled-components';
import { mainTheme } from '../styles/theme';
import Header from '../components/Header';

export default function Home() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Header />
    </ThemeProvider>
  );
}
