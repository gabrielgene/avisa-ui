import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Login from './pages/login';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const Home = () => <h1>Home</h1>

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home} />
      <Redirect to="/home" />
    </Switch>
  </Router>

)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
