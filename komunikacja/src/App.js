import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Bus from './components/bus/Bus';
import EmployeeInfo from './components/employee/EmployeeInfo';
import Ticket from './components/ticket/Ticket';
import Buy_ticket from './components/ticket/Buy_ticket';
import Add_client from './components/ticket/Add_client';
import Bus_info from './components/bus/Bus_info';
import Add_bus from './components/bus/Add_bus';
import Rent_bus from './components/bus/Rent_bus';
import EmployeeList from './components/employee/EmployeeList';
import DriversList from './components/employee/DriversList';
import Add_Employee from './components/employee/Add_Employee';
import Add_arrangement from './components/employee/Add_arrangement';

import {BrowserRouter as  Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div> 
        <Switch>
        <Route exact path="/">
        <Navbar></Navbar>
          </Route>
          <Route exact path="/bus">
            <Bus></Bus>
          </Route>
          <Route exact path="/employee" >
            <EmployeeInfo></EmployeeInfo>
          </Route>
          <Route exact path="/ticket">
            <Ticket></Ticket>
          </Route>
          <Route exact path="/ticket/buy_ticket">
                    <Buy_ticket></Buy_ticket>
                </Route>
            
                <Route exact path='/ticket/add_client'>
                    <Add_client></Add_client>
                </Route>
                <Route exact path="/bus_info">
                    <Bus_info></Bus_info>
                </Route>
                <Route exact path='/bus_info/Rent_bus'>
                    <Rent_bus></Rent_bus>
                </Route>
                <Route exact path='/bus_info/add_bus'>
                    <Add_bus></Add_bus>
                </Route>
                <Route exact path="/employee_info/employee_list">
                    <EmployeeList></EmployeeList>
                </Route>
                <Route exact path='/employee_info/drivers_list'>
                    <DriversList></DriversList>
                </Route>
                <Route exact path='/employee_info/add_employee'>
                    <Add_Employee></Add_Employee>
                </Route>
                <Route exact path='/employee_info/add_arrangement'>
                    <Add_arrangement></Add_arrangement>
                </Route>
        </Switch>     
      </div>
    </Router>
  );
}

export default App;

{/* <Router>
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
</Router> */}