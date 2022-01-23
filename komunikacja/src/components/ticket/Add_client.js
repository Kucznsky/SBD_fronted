import React from 'react'
import { useFormik } from 'formik';
import Axios from 'axios';
import {BrowserRouter as  Router, Route, Switch, Link, useHistory} from 'react-router-dom';

const Add_client = () => {

    let history = useHistory();

    const formik = useFormik({
        initialValues: {
          imie: '',
          nazwisko: '',
          id_centrali: 1,
        },
        onSubmit: values => {
            console.log(values)
          //  Axios.post("http://localhost:8080/klienci",values).then(response => {console.log(response)}).catch(error => {console.log(error)})

        },
      });

    return (
        <div>
            <fieldset>
            <legend style={{color:'black'}}>Dodawanie klienta</legend>
                <div>
                <form onSubmit={formik.handleSubmit}
              style={{flexDirection:'column',display:'flex'}}
              >
                        <label style={{color:'black'}} htmlFor="imie">imie</label>
                        <input
                            id="imie"
                            name="imie"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.imie}
                        />
                    
                        <label htmlFor="nazwisko" style={{color:'black'}}>nazwisko</label>
                        <input
                            id="nazwisko"
                            name="nazwisko"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.nazwisko}
                        />
                        <label htmlFor="id_centrali" style={{color:'black'}}>id _centrali</label>
                        <input
                            id="id_centrali"
                            name="id_centrali"
                            type="number"
                            onChange={formik.handleChange}
                            value={formik.values.id_centrali}
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
        </div>
    )
}

export default Add_client
