import React from 'react'
import { useFormik } from 'formik';

const Add_Employee = () => {
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

      const data = [
            {
                nazwaStanowiska: 'Kierowca',
                idStanowiska: 1,
            },
            {
                nazwaStanowiska: 'sprzatacz',
                idStanowiska: 2,
            },
            {
                nazwaStanowiska: 'Magazynier',
                idStanowiska: 3,
            },
      ]

    return (
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
        <fieldset>
        <legend>dodawanie pracownika</legend>
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
 
       <button
       type="submit">Dodaj</button>
     </form>
        </div>
      </fieldset>
        <hr className='horizontal'/>
        <fieldset>
          <legend>Stanowiska</legend>
        <div style={{width:'80%',margin:30,}}>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <div style={{color:'white'}}>Nazwa Stanowiska</div>
                <div style={{color:'white'}}>Id Stanowiska</div>
            </div>
            <hr/>
        {
            data.map(o => 
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                <div style={{color:'white'}}>{o.nazwaStanowiska}</div>
                <div style={{color:'white'}}>{o.idStanowiska}</div>
                </div>
                )
        }
        

        </div>
        </fieldset>
        </div>
    )
}

export default Add_Employee