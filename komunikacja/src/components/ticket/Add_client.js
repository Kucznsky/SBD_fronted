import React from 'react'
import { useFormik } from 'formik';
import Axios from 'axios';

const Add_client = () => {

    const formik = useFormik({
        initialValues: {
          imie: '',
          nazwisko: '',
          id_centrali: 1,
        },
        onSubmit: values => {
            Axios.post("http://localhost:8080/klienci",values).then(response => {console.log(response)}).catch(error => {console.log(error)})

        },
      });

    return (
        <div>
            <fieldset>
                <legend>dodawanie klienta</legend>
                <div className='content' style ={{display:'flex',flexDirection:'column',margin:30,alignItems:'center'}}>
                    <form onSubmit={formik.handleSubmit}
                    style={{display:'flex',flexDirection:'column', width:'40%',margin:20,alignSelf:'center',alignItems:'center'}}
                    >
                        <label style={{color:'white'}} htmlFor="imie">imie</label>
                        <input
                            id="imie"
                            name="imie"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.imie}
                        />
                    
                        <label htmlFor="nazwisko" style={{color:'white'}}>nazwisko</label>
                        <input
                            id="nazwisko"
                            name="nazwisko"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.nazwisko}
                        />
                        <label htmlFor="id_centrali" style={{color:'white'}}>id _centrali</label>
                        <input
                            id="id_centrali"
                            name="id_centrali"
                            type="number"
                            onChange={formik.handleChange}
                            value={formik.values.id_centrali}
                        />

                        <button type="submit">Dodaj</button>
                    </form>
                </div>
            </fieldset>
        </div>
    )
}

export default Add_client
