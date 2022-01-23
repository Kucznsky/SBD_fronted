import React,{useEffect,useState} from 'react'
import Axios from 'axios'
import { useFormik } from 'formik';
import {BrowserRouter as  Router, Route, Switch, Link, useHistory} from 'react-router-dom';

const Add_arrangement = () => {
  let history = useHistory();


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
        <div style={{display:'flex',flexDirection:'column'}}>
        <fieldset>
        <legend style={{color:'black'}}>dodawanie pracownika</legend>
        <div className='content' style ={{display:'flex',flexDirection:'column',margin:30,alignItems:'center'}}>
            <form onSubmit={formik.handleSubmit}
            style={{display:'flex',flexDirection:'column', width:'40%',margin:20,alignSelf:'center',alignItems:'center'}}
             >
       <label style={{color:'black'}} htmlFor="rodzaj_umowy">rodzaj umowy</label>
       <input
         id="rodzaj_umowy"
         name="rodzaj_umowy"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.rodzaj_umowy}
       />
 
       <label htmlFor="okres" style={{color:'black'}}>okres</label>
       <input
         id="okres"
         name="okres"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.okres}
       />

        <label htmlFor="data_zawarcia" style={{color:'black'}}>data zawarcia umowy</label>
       <input
         id="data_zawarcia"
         name="data_zawarcia"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.data_zawarcia}
       />
 
       <label htmlFor="data_rozwiazania" style={{color:'black'}}>data rozwiazania</label>
       <input
         id="data_rozwiazania"
         name="data_rozwiazania"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.data_rozwiazania}
       />
        
       <label htmlFor="id_pracownika" style={{color:'black'}}>id pracownika</label>
       <input
         id="id_pracownika"
         name="id_pracownika"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.id_pracownika}
       />
 
 <input 
        placeholder='Enter to submit / 1 to go back'
        style={{width:300}}
        onKeyPress={(ev) => {

          if(ev.key === "Enter") {
            formik.handleSubmit();
          } else if (ev.key === '1') {
            history.push('/employee')
          }else {
            window.alert("there is no such option");
          }
        }}
        
        
        />
     </form>
        </div>
      </fieldset>
        <hr className='horizontal'/>
        <fieldset>
          <legend>Pracownicy</legend>
        <div style={{width:'80%',margin:30,}}>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <div style={{color:'black', margin:10}}>Imię</div>
                <div style={{color:'black', margin:10}}>Nazwisko</div>
                <div style={{color:'black', margin:10}}>Id</div>
            </div>
     
          
        { 
            pracownicy.map(o => (
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                <div style={{color:'black'}}>{o.imie}</div>
                <div style={{color:'black'}}>{o.nazwisko}</div>
                <div style={{color:'black'}}>{o.id}</div>
                </div>
          ))
        } 
        

        </div>
        </fieldset>
        </div>
    )
}

export default Add_arrangement
