import React,{useEffect,useState} from 'react'
import Axios from 'axios'
import { useFormik } from 'formik';

const Add_Employee = () => {
    const formik = useFormik({
        initialValues: {
          imie: '',
          nazwisko: '',
          wynagrodzenie: 0,
          id_stanowiska: 3,
          id_centrali: 1,
        },
        onSubmit: values => {
          Axios.post("http://localhost:8080/pracownicy",values).then(response => {console.log(response)}).catch(error => {console.log(error)})
        },
      });


    const [stanowiska, setStanowiska] = useState([])


    useEffect(() => {
        Axios.get("http://localhost:8080/stanowiska")
            .then(res => setStanowiska(res.data.stanowiskaList));
           
    },[]);

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
 
       <label htmlFor="id_stanowiska" style={{color:'white'}}>idStanowiska</label>
       <input
         id="id_stanowiska"
         name="id_stanowiska"
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
            stanowiska.map(o => (
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                <div style={{color:'white'}}>{o.nazwa}</div>
                <div style={{color:'white'}}>{o.id}</div>
                </div>
          ))
        } 
        

        </div>
        </fieldset>
        </div>
    )
}

export default Add_Employee