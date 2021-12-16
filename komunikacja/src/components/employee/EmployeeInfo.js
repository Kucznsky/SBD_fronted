import React from 'react'
import {BrowserRouter as  Router, Route, Switch, Link} from 'react-router-dom';
import Axios from "axios";
import EmployeeList from './EmployeeList';
import DriversList from './DriversList';
import Add_Employee from './Add_Employee';
import Add_arrangement from './Add_arrangement';

const EmployeeInfo = () => {
    return (
        <Router>
            <div className='content'>
            <nav className='navbar_links'>
                <ul>
                    <li>
                        <Link className='link2' to='/employee_info/drivers_list'>List of bus drivers</Link>
                    </li>
                    <li>
                        <Link className='link2' to='/employee_info/employee_list'>List of employees</Link>
                    </li>
                    <li>
                        <Link className='link2' to='/employee_info/add_employee'>Add an employee</Link>
                    </li>
                    <li>
                        <Link className='link2' to='/employee_info/add_arrangement'>Add an arragement</Link>
                    </li>
                </ul>
            </nav>
            </div>
            <Switch>
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
        </Router>
    )
}

export default EmployeeInfo
