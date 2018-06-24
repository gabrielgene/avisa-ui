import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Login from './pages/login';
import AlertsList from './pages/alerts-list';
import NewAlert from './pages/new-alert';

import { theme } from './theme';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/avisos" component={AlertsList} />
        <Route path="/novo-aviso" component={NewAlert} />
        <Redirect to="/avisos" />
      </Switch>
    </Router>
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
