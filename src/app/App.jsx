import React from 'react';
import './App.css';
import {AccountEditor} from './AccountEditor';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import { AccountsDashboard } from './AccountsDashboard';

export const App = () => <>
  <Router>
      <Switch>
        <Route path="/edit/:accountId" component={ AccountEditor }/>
        <Route path="/" component={ AccountsDashboard }/>
      </Switch>
    </Router>
  </>;

