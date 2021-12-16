import React from 'react'

import { useFormik } from 'formik';




const Ticket = () => {
    const formik = useFormik({
        initialValues: {
          imie: '',
          nazwisko: '',
          wynagrodzenie: 0,
          stanowisko: 0,
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

      


      


    return (
        <fieldset>
          <legend>Kupowanie Biletu</legend>
          <div className='content' style ={{display:'flex',flexDirection:'column',margin:100,alignItems:'center',justifyContent:'center',alignSelf:'center'}}>
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

          <label htmlFor="wynagrodzenie" style={{color:'white'}}>wynagrodzenie</label>
        <input
          id="wynagrodzenie"
          name="wynagrodzenie"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.wynagrodzenie}
        />
  
        <label htmlFor="stanowisko" style={{color:'white'}}>idStanowiska</label>
        <input
          id="stanowisko"
          name="stanowisko"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.stanowisko}
        />
  
        <button type="submit">Dodaj</button>
      </form>
          
          </div>
      </fieldset>
    )
}

export default Ticket