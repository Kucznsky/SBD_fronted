import React from 'react';
import {BrowserRouter as  Router, Route, Switch, Link, useHistory} from 'react-router-dom';


const EmployeeInfo = () => {
    let history = useHistory();
    return (
        <Router>
            <div>Where to navigate:
            <div>1. Employee List</div>
            <div>2. Drivers list</div>
            <div>3. Add Employee</div>
            <div>4. Add Arrangement</div>
            <div>5. Back</div>
            <div>---------------</div>
            <input
      onKeyPress={(ev) => {
          if(ev.key === "1") {
        history.push('/employee_info/employee_list')
          }else if(ev.key === '2') {
            history.push('/employee_info/drivers_list')
          }else if (ev.key === '3') {
            history.push('/employee_info/add_employee')
          }else if (ev.key === '4') {
            history.push('/employee_info/add_arrangement')
          }else if (ev.key === '5') {
            history.push('/')
          }else {
            window.alert("there is no such option");
          }
        
      }}
    />
        </div>
        </Router>
    )
}

export default EmployeeInfo
