import React from 'react';
import { ThemeProvider } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import GlobalStyle from './styles/global';
import main from './styles/themes/main';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  const [theme] = usePersistedState('theme', main);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <MainContent />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
