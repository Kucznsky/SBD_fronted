import React from 'react'
import Axios from "axios";
import {Link} from 'react-router-dom';

const Schedule = () => {
    return (
        <div className='content' >
            <p>tu będzie lista numerów autobusów po kliknięciu których wyświetli się rozkład dla danej linii np:</p>
            <Link to={`/bus_info/$id`}>17</Link>
        </div>
    )
}

export default Schedule
