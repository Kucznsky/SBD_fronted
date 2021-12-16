import React from 'react'
import {useParams} from "react-router-dom";
import Axios from "axios";

const Lines = () => {
    const {id} = useParams();

    return (
        <div className='content'>
            <p>line {id}</p>
        </div>
    )
}


export default Lines
