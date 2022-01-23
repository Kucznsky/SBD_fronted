import React,{useEffect,useState} from 'react'
import { useFormik } from 'formik';
import Axios from 'axios'
import {BrowserRouter as  Router, Route, Switch, Link, useHistory} from 'react-router-dom';


const Add_bus = () => {
  let history = useHistory();
const formik = useFormik({
        initialValues: {
          numer_boczny: 0,
          marka: '',
          model: '',
          id_parkingu: 1,
          id_centrali: 1,
        },
        onSubmit: values => {
          Axios.post("http://localhost:8080/autobusy",values).then(response => {console.log(response)}).catch(error => {console.log(error)})
        },
      });

  
    return (
        
        <fieldset>
        <legend style={{color:'black'}}>dodawanie autobusu</legend>
        <div className='content'  >
            <form onSubmit={formik.handleSubmit}
            style={{display:'flex',flexDirection:'column', }}
             >
       <label style={{color:'black'}} htmlFor="numer_boczny">nr boczny</label>
       <input
         id="numer_boczny"
         name="numer_boczny"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.numer_boczny}
       />
 
       <label htmlFor="marka" style={{color:'black'}}>marka</label>
       <input
         id="marka"
         name="marka"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.marka}
       />

        <label htmlFor="model" style={{color:'black'}}>model</label>
       <input
         id="model"
         name="model"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.model}
       />
 
       <label htmlFor="id_parkingu" style={{color:'black'}}>id Parkingu</label>
       <input
         id="id_parkingu"
         name="id_parkingu"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.id_parkingu}
       />
        
       <label htmlFor="id_centrali" style={{color:'black'}}>id centrali</label>
       <input
         id="id_centrali"
         name="id_centrali"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.id_centrali}
       />
 
        <input 
        placeholder='Enter to submit / 1 to go back'
        style={{width:300}}
        onKeyPress={(ev) => {

          if(ev.key === "Enter") {
            formik.handleSubmit();
          } else if (ev.key === '1') {
            history.push('/bus')
          }else {
            window.alert("there is no such option");
          }
        }}
        
        
        />
     </form>
        </div>
      </fieldset>

    );
}

export default Add_bus

