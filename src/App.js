import React from 'react';
import { ThemeProvider } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import GlobalStyle from './styles/global';
import main from './styles/themes/main';
import blackFriday from './styles/themes/blackFriday';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  const [theme, setTheme] = usePersistedState('theme', main);

  const toggleTheme = () => {
    setTheme(theme.title === 'main' ? blackFriday : main)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
        <MainContent />
    </ThemeProvider>
  );
}

export default App;
