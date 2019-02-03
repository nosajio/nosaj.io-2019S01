import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styled/globals';
import theme from '../../styled/theme';
import routes from './routes';

export interface AppProps {}

class App extends React.Component<AppProps, any> {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <>
            <GlobalStyle />
            {routes.map(r => (
              <Route {...r} />
            ))}
          </>
        </Router>
      </ThemeProvider>
    );
  }
}
export default App;
