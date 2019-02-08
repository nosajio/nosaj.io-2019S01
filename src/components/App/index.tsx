import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ScrollProvider from '../../contexts/ScrollEventsContext';
import GlobalStyle from '../../styled/globals';
import theme from '../../styled/theme';
import routes from './routes';

export interface AppProps {}

class App extends React.Component<AppProps, any> {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <ScrollProvider>
            <GlobalStyle />
            {routes.map(r => (
              <Route {...r} />
            ))}
          </ScrollProvider>
        </Router>
      </ThemeProvider>
    );
  }
}
export default App;
