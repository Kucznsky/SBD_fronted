import React from 'react'
import {useParams} from "react-router-dom";

const employee_details = () => {

    const {id} = useParams();

    return (
        <div>
            <p>umowa pracownika</p>
        </div>
    )
}

export default employee_details
