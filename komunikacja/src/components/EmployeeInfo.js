import React from 'react'
import {Link} from 'react-router-dom';
import Axios from "axios";


const EmployeeInfo = () => {
    return (
        <div className='content'>
        <nav className='navbar_links'>
            <ul>
                <li>
                    <Link className='link2' to='/employee_info/drivers_list'>List of bus drivers</Link>
                </li>
                <li>
                    <Link className='link2' to='/employee_info/employee_list'>List of employees</Link>
                </li>
            </ul>
        </nav>
        </div>
    )
}

export default EmployeeInfo
