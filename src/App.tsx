import React from 'react';
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import getTheme from 'Theme';
import GlobalStyle from 'GlobalStyle';
import AppRouter from 'navigation/AppRouter';
import store from 'store/store';


const App: React.FC = () => {
  return (
    <ThemeProvider theme={getTheme('light', 1)}>
      <Provider store={store}>
        <React.Fragment>
          <GlobalStyle color={1} />
          <AppRouter />
        </React.Fragment>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
