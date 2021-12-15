import React from 'react';
import './App.css';
import Bus_info from './components/Bus_info';
import Navbar from './components/Navbar';
import Schedule from './components/Schedule';
import Bus_stops from './components/Bus_stops';
import Ticket from './components/Ticket';
import EmployeeInfo from './components/EmployeeInfo';
import DriversList from './components/DriversList';
import EmployeeList from './components/EmployeeList';
import TicketOwnersList from './components/TicketOwnersList'
import EmployeeDetails from './components/employee_details';
import Bus_schedule from './components/Bus_schedule';
import {BrowserRouter as  Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div> 
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Schedule></Schedule>
          </Route>
          <Route exact path="/bus_stops">
            <Bus_stops></Bus_stops>
          </Route>
          <Route exact path="/bus_info/:id">
            <Bus_schedule></Bus_schedule>
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
            <EmployeeDetails></EmployeeDetails>
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
