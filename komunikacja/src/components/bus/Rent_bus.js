import React,{useEffect,useState} from 'react'
import Axios from 'axios'
import { useFormik } from 'formik';

const Rent_bus = () => {

    const formik = useFormik({
        initialValues: {
            id_autobusu: 1,
            id_linii: 1,
            id_pracownika: 0,
        },
        onSubmit: values => {
          Axios.post("http://localhost:8080/wypozyczenia",values).then(response => {console.log(response)}).catch(error => {console.log(error)});
          Axios.post(`http://localhost:8080/pracownicy/setBusy/${values.id_pracownika}`).then(response => {console.log(response)}).catch(error => {console.log(error)});
          Axios.post(`http://localhost:8080/autobusy/setBusy/${values.id_autobusu}`).then(response => {console.log(response)}).catch(error => {console.log(error)});
        },
      });

       const [bus, setBus] = useState([])

       useEffect(() => {
        Axios.get("http://localhost:8080/autobusy")
            .then(res => setBus(res.data.autobusyList));   
    },[]);

    return (
     <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
        <fieldset>
        <legend>dodawanie pracownika</legend>
        <div className='content' style ={{display:'flex',flexDirection:'column',margin:30,alignItems:'center'}}>
            <form onSubmit={formik.handleSubmit}
            style={{display:'flex',flexDirection:'column', width:'40%',margin:20,alignSelf:'center',alignItems:'center'}}
             >
       <label style={{color:'white'}} htmlFor="id_autobusu">id Autobusu</label>
       <input
         id="id_autobusu"
         name="id_autobusu"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.id_autobusu}
       />
 
       <label htmlFor="id_lini" style={{color:'white'}}>nr Lini</label>
       <input
         id="id_linii"
         name="id_linii"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.id_linii}
       />

        <label htmlFor="id_pracownika" style={{color:'white'}}>id_pracownika</label>
       <input
         id="id_pracownika"
         name="id_pracownika"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.id_linii}
       />
 
       <button type="submit">Dodaj</button>
     </form>
        </div>
      </fieldset>
        <hr className='horizontal'/>
        <fieldset>
          <legend>Dostępne autobusy</legend>
        <div style={{width:'80%',margin:30,}}>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <div style={{color:'white'}}>Id autobusu</div>
            </div>
            <hr/>
          
        { 
            bus.map(o => (
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                <div style={{color:'white'}}>{o.id}</div>
                <button onClick={ () =>
         Axios.delete("http://localhost:8080/wypozyczenia",o.id).then(response => {console.log(response)}).catch(error => {console.log(error)}),
         Axios.post(`http://localhost:8080/pracownicy/setBusy/${o.id_pracownika}`).then(response => {console.log(response)}).catch(error => {console.log(error)}),
         Axios.post(`http://localhost:8080/autobusy/setBusy/${o.id_autobusu}`).then(response => {console.log(response)}).catch(error => {console.log(error)})
                }>Zakoncz Wypozyczenie</button>
                </div>
          ))
        } 
        

        </div>
        </fieldset>
    </div>
    )
}

export default Rent_bus
