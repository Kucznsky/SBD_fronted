import {BrowserRouter as  Router, Route, Switch, Link, useHistory} from 'react-router-dom';
import React from 'react';
import Bus from '../components/bus/Bus';
import EmployeeInfo from '../components/employee/EmployeeInfo';
import Ticket from '../components/ticket/Ticket';

const Navbar = () => {
    let history = useHistory();

    return(
        <Router>
        <div> Which Category to navigate:
            <div>1. Bus</div>
            <div>2. Employees</div>
            <div>3. Buy Tickets</div>
            <div>---------------</div>
            <input
      onKeyPress={(ev) => {
          if(ev.key === "1") {
        history.push('/bus')
          }else if(ev.key === '2') {
            history.push('/employee')
          }else if (ev.key=== '3') {
            history.push('/ticket')
          }else {
            window.alert("there is no such option");
          }
        
      }}
    />
        </div></Router>
    );
}

export default Navbar;

