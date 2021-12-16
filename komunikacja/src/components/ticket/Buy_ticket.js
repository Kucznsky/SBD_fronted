import React,{useEffect,useState} from 'react'
import Axios from 'axios'
import { useFormik } from 'formik';




const Buy_ticket = () => {
    const formik = useFormik({
        initialValues: {
          rodzaj: '',
          koszt: 0,
        },
        onSubmit: values => {
          Axios.post("http://localhost:8080/bilety",values).then(response => {console.log(response)}).catch(error => {console.log(error)})
        },
      });

    useEffect(() => {
        Axios.get("http://localhost:8080/bilety")
            .then(res => console.log(res.data));

    },[]);

    return (
        <fieldset>
          <legend>Kupowanie Biletu</legend>
          <div className='content' style ={{display:'flex',flexDirection:'column',margin:100,alignItems:'center',justifyContent:'center',alignSelf:'center'}}>
              <form onSubmit={formik.handleSubmit}
              style={{display:'flex',flexDirection:'column', width:'40%',margin:20,alignSelf:'center',alignItems:'center'}}
              >
        <label style={{color:'white'}} htmlFor="rodzaj">rodzaj</label>
        <input
          id="rodzaj"
          name="rodzaj"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.rodzaj}
        />



        <label htmlFor="koszt" style={{color:'white'}}>koszt</label>
        <input
          id="koszt"
          name="koszt"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.koszt}
        />

        <button type="submit">Dodaj</button>
      </form>

          </div>
      </fieldset>
    )
}

export default Buy_ticket