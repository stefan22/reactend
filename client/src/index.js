import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './scss/App.scss';
import * as serviceWorker from './serviceWorker';

const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);



ReactDOM.render(
  <App />,
  document.getElementById('root')
);

serviceWorker.unregister();
