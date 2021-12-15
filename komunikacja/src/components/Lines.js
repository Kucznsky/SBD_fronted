import React from 'react'
import {useParams} from "react-router-dom";
import Axios from "axios";

const Lines = () => {
    const {id} = useParams();

    return (
        <div className='content'>
            <p>linie {id}</p>
        </div>
    )
}


export default Lines
