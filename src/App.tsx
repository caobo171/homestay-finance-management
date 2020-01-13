import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import getTheme from 'Theme';
import GlobalStyle from 'GlobalStyle';
import AppRouter from 'navigation/AppRouter';
import store from 'store/store';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {


  return (
    <ThemeProvider theme={getTheme('light', 10)}>
      <Provider store={store}>
        <React.Fragment>
          <GlobalStyle color={10} />
          <AppRouter/>  
          <ToastContainer />
        </React.Fragment>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
