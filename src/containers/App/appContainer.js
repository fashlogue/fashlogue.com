import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../config';
import App from '../../components/App';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { ModalContainer } from 'react-router-modal';
import { Provider } from 'react-redux';
import { default as Routes } from '../../routes';



const appContainer = (props) => {
  return (
    <Router>
      <Provider store={props.store}>
        <ThemeProvider theme={theme}>
          <Route render={({ ...props }) => {
                return (
                  <div>
                    <App {...props}>
                      <Routes />
                    </App>
                    <ModalContainer />
                  </div>
                );
              }}
          />
        </ThemeProvider>
      </Provider>
    </Router>
  );
};

export default appContainer;
