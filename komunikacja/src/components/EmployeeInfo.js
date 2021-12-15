import React from 'react'
import {Link} from 'react-router-dom';


const EmployeeInfo = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/employee_info/drivers_list'>List of bus drivers</Link>
                </li>
                <li>
                    <Link to='/employee_info/employee_list'>List of employees</Link>
                </li>
            </ul>
        </div>
    )
}

export default EmployeeInfo
