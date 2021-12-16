import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Bus from './components/bus/Bus';
import EmployeeInfo from './components/employee/EmployeeInfo';
import Ticket from './components/ticket/Ticket';

import {BrowserRouter as  Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div> 
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Bus></Bus>
          </Route>
          <Route exact path="/employee" >
            <EmployeeInfo></EmployeeInfo>
          </Route>
          <Route exact path="/ticket">
            <Ticket></Ticket>
          </Route>
        </Switch>     
      </div>
    </Router>
  );
}

export default App;
