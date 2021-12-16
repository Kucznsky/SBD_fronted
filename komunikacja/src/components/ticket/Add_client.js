import React from 'react'
import { useFormik } from 'formik';

const Add_client = () => {

    const formik = useFormik({
        initialValues: {
          imie: '',
          nazwisko: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
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

                        <button type="submit">Dodaj</button>
                    </form>
                </div>
            </fieldset>
        </div>
    )
}

export default Add_client
