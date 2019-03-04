import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ScrollProvider from '../../contexts/ScrollEventsContext';
import GlobalStyle from '../../styled/globals';
import theme from '../../styled/theme';
import ContactWindow from '../ContactWindow';
import Footer from '../Footer';
import HashRoute from '../HashRoute';
import routes from './routes';

export interface AppProps {}

class App extends React.Component<AppProps, any> {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <ScrollProvider>
            <GlobalStyle />
            <Switch>
              {routes.map(r => (
                <Route {...r} />
              ))}
            </Switch>
            {/* Show the contact window above whichever view is matched above */}
            <HashRoute path="#contact" component={ContactWindow} />
            {/* Autoscroll to work on homepage */}
            <HashRoute
              path="#work"
              render={() => {
                window.setTimeout(() => {
                  const el = document.getElementById('work-anchor');
                  if (!el) {
                    return null;
                  }
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 200);
                return null;
              }}
            />
            <Footer />
          </ScrollProvider>
        </Router>
      </ThemeProvider>
    );
  }
}
export default App;
