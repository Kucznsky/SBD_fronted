import React from 'react';
import './App.css';
import Bus_info from './components/Bus_info';
import Navbar from './components/Navbar';
import Bus_stops from './components/Bus_stops';
import Ticket from './components/Ticket';
import EmployeeInfo from './components/EmployeeInfo';
import DriversList from './components/DriversList';
import EmployeeList from './components/EmployeeList';
import TicketOwnersList from './components/TicketOwnersList'
import Employee_Details from './components/Employee_details';
import Lines from './components/Lines';
import {BrowserRouter as  Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div> 
        <Navbar></Navbar>
        <Switch>>
          <Route exact path="/">
            <Bus_stops></Bus_stops>
          </Route>
          <Route exact path="/bus_info/:id">
            <Lines></Lines>
          </Route>
          <Route exact path="/employee_info">
            <EmployeeInfo></EmployeeInfo>
          </Route>
          <Route exact path="/employee_info/drivers_list">
            <DriversList></DriversList>
          </Route>
          <Route exact path="/employee_info/employee_list">
            <EmployeeList></EmployeeList>
          </Route>
          <Route exact path="/employee_info/employee_list/:id">
            <Employee_Details></Employee_Details>
          </Route>
          <Route exact path="/ticket_owners_list">
            <TicketOwnersList></TicketOwnersList>
          </Route>
          <Route exact path="/bus_info">
            <Bus_info></Bus_info>
          </Route>
          <Route exact_path="/tickets">
            <Ticket></Ticket>
          </Route>
        </Switch>     
      </div>
    </Router>
  );
}

export default App;
