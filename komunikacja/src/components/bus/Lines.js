import React,{useEffect,useState} from 'react';
import {useParams} from "react-router-dom";
import Axios from "axios";

const Lines = () => {
    const {id} = useParams();

    


    return (
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:10,width:'100%',alignItems:'center'}}>

           
     <div style={{color:'white',width:'15%'}}>{id}</div>
                                    
        </div>
    )
}



export default Lines
