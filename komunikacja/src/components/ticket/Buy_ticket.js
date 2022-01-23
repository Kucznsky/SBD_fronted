import React,{useEffect,useState} from 'react'
import Axios from 'axios'
import { useFormik } from 'formik';
import {BrowserRouter as  Router, Route, Switch, Link, useHistory} from 'react-router-dom';





const Buy_ticket = () => {
  let history = useHistory();
    const formik = useFormik({
        initialValues: {
          rodzaj: '',
          id_klienta: 0,
          koszt: 0,
        },
        onSubmit: values => {
           Axios.post("http://localhost:8080/bilety",values).then(response => {console.log(response)}).catch(error => {console.log(error)})
        },
      });

    useEffect(() => {
        Axios.get("http://localhost:8080/bilety")
            .then(res => console.log(res.data));

    },[]);

    return (

        <fieldset >
          <legend style={{color:'black'}}>Kupowanie Biletu</legend>
          <div >
              <form onSubmit={formik.handleSubmit}
              style={{flexDirection:'column',display:'flex'}}
              >
           
        <label  htmlFor="rodzaj" style={{color:'black'}}>rodzaj</label>
        <input
          id="rodzaj"
          name="rodzaj"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.rodzaj}
        />

        <label htmlFor="id_klienta" style={{color:'black'}}>Id klienta</label>
        <input
          id="id_klienta"
          name="id_klienta"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.id_klienta}
        />


        <label htmlFor="koszt" style={{color:'black'}}>koszt</label>
        <input
          id="koszt"
          name="koszt"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.koszt}
        />

        <input 
        placeholder='Enter to submit/ 1 to go back'
        style={{width:300}}
        onKeyPress={(ev) => {

          if(ev.key === "Enter") {
            formik.handleSubmit();
          } else if (ev.key === '1') {
            history.push('/ticket')
          }else {
            window.alert("there is no such option");
          }
        }}
        
        
        />
      </form>

          </div>
      </fieldset>
     
    )
}

export default Buy_ticket