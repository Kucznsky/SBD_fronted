import React,{useEffect,useState} from 'react'
import { useFormik } from 'formik';
import Axios from 'axios'

const Add_bus = () => {
    
const formik = useFormik({
        initialValues: {
          numer_boczny: 0,
          marka: '',
          model: '',
          id_parkingu: 1,
          id_centrali: 1,
        },
        onSubmit: values => {
          Axios.post("http://localhost:8080/pracownicy",values).then(response => {console.log(response)}).catch(error => {console.log(error)})
        },
      });

    const [autobusy, setAutobusy] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:8080/stanowiska")
            .then(res => setAutobusy(res.data));

    },[]);

    return (
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
        <fieldset>
        <legend>dodawanie autobusu</legend>
        <div className='content' style ={{display:'flex',flexDirection:'column',margin:30,alignItems:'center'}}>
            <form onSubmit={formik.handleSubmit}
            style={{display:'flex',flexDirection:'column', width:'40%',margin:20,alignSelf:'center',alignItems:'center'}}
             >
       <label style={{color:'white'}} htmlFor="numer_boczny">imie</label>
       <input
         id="numer_boczny"
         name="numer_boczny"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.numer_boczny}
       />
 
       <label htmlFor="marka" style={{color:'white'}}>marka</label>
       <input
         id="marka"
         name="marka"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.nazwisko}
       />

        <label htmlFor="model" style={{color:'white'}}>model</label>
       <input
         id="model"
         name="model"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.wynagrodzenie}
       />
 
       <label htmlFor="id_parkingu" style={{color:'white'}}>idStanowiska</label>
       <input
         id="id_parkingu"
         name="id_parkingu"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.id_stanowiska}
       />
        
       <label htmlFor="id_centrali" style={{color:'white'}}>id_centrali</label>
       <input
         id="id_centrali"
         name="id_centrali"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.id_centrali}
       />
 
       <button
       type="submit">Dodaj</button>
     </form>
        </div>
      </fieldset>
    </div>
    );
}

export default Add_bus

