import React,{useEffect,useState} from 'react'
import Axios from 'axios'
import { useFormik } from 'formik';

const Add_arrangement = () => {



    const formik = useFormik({
        initialValues: {
         rodzaj_umowy:'',
         okres:0,
         data_zawarcia: Date.now.day,
         data_rozwiazania: 0,
         id_pracownika: 1,
        },
        onSubmit: values => {
          Axios.post("http://localhost:8080/umowy",values).then(response => {console.log(response)}).catch(error => {console.log(error)})
        },
      });

    const [pracownicy, setPracownicy] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:8080/pracownicy")
            .then(res => setPracownicy(res.data.pracownicyList));
           
    },[]);

    return (
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
        <fieldset>
        <legend>dodawanie pracownika</legend>
        <div className='content' style ={{display:'flex',flexDirection:'column',margin:30,alignItems:'center'}}>
            <form onSubmit={formik.handleSubmit}
            style={{display:'flex',flexDirection:'column', width:'40%',margin:20,alignSelf:'center',alignItems:'center'}}
             >
       <label style={{color:'white'}} htmlFor="rodzaj_umowy">rodzaj umowy</label>
       <input
         id="rodzaj_umowy"
         name="rodzaj_umowy"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.rodzaj_umowy}
       />
 
       <label htmlFor="okres" style={{color:'white'}}>okres</label>
       <input
         id="okres"
         name="okres"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.okres}
       />

        <label htmlFor="data_zawarcia" style={{color:'white'}}>data zawarcia umowy</label>
       <input
         id="data_zawarcia"
         name="data_zawarcia"
         type="date"
         onChange={formik.handleChange}
         value={formik.values.data_zawarcia}
       />
 
       <label htmlFor="data_rozwiazania" style={{color:'white'}}>data rozwiazania</label>
       <input
         id="data_rozwiazania"
         name="data_rozwiazania"
         type="date"
         onChange={formik.handleChange}
         value={formik.values.data_rozwiazania}
       />
        
       <label htmlFor="id_pracownika" style={{color:'white'}}>id pracownika</label>
       <input
         id="id_pracownika"
         name="id_pracownika"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.id_pracownika}
       />
 
       <button
       type="submit">Dodaj</button>
     </form>
        </div>
      </fieldset>
        <hr className='horizontal'/>
        <fieldset>
          <legend>Pracownicy</legend>
        <div style={{width:'80%',margin:30,}}>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <div style={{color:'white', margin:10}}>Imię</div>
                <div style={{color:'white', margin:10}}>Nazwisko</div>
                <div style={{color:'white', margin:10}}>Id</div>
            </div>
            <hr/>
          
        { 
            pracownicy.map(o => (
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                <div style={{color:'white'}}>{o.imie}</div>
                <div style={{color:'white'}}>{o.nazwisko}</div>
                <div style={{color:'white'}}>{o.id}</div>
                </div>
          ))
        } 
        

        </div>
        </fieldset>
        </div>
    )
}

export default Add_arrangement
