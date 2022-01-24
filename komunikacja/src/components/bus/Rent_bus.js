import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useFormik } from 'formik';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';

const Rent_bus = () => {
  let history = useHistory();
  const formik = useFormik({
    initialValues: {
      id_autobusu: 1,
      id_linii: 1,
      id_pracownika: 0,
    },
    onSubmit: values => {
      Axios.post("http://localhost:8080/wypozyczenia", values).then(response => { console.log(response) }).catch(error => { console.log(error) });
      Axios.post(`http://localhost:8080/pracownicy/setBusy/${values.id_pracownika}`).then(response => { console.log(response) }).catch(error => { console.log(error) });
      Axios.post(`http://localhost:8080/autobusy/setBusy/${values.id_autobusu}`).then(response => { console.log(response) }).catch(error => { console.log(error) });
    },
  });

  const [bus, setBus] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:8080/autobusy")
      .then(res => setBus(res.data.autobusyList));
  }, []);


  const [wyp, setWyp] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:8080/wypozyczenia")
      .then(res => setWyp(res.data.wypozyczeniaList));
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <fieldset>
          <legend style={{ color: 'black' }}>Wypozycz Autobus</legend>
          <div className='content' style={{ display: 'flex', flexDirection: 'column', margin: 30, alignItems: 'center' }}>
            <form onSubmit={formik.handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', width: '40%', margin: 20, alignSelf: 'center', alignItems: 'center' }}
            >
              <label style={{ color: 'black' }} htmlFor="id_autobusu">id Autobusu</label>
              <input
                id="id_autobusu"
                name="id_autobusu"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.id_autobusu}
              />

              <label htmlFor="id_lini" style={{ color: 'black' }}>nr Lini</label>
              <input
                id="id_linii"
                name="id_linii"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.id_linii}
              />

              <label htmlFor="id_pracownika" style={{ color: 'black' }}>id_pracownika</label>
              <input
                id="id_pracownika"
                name="id_pracownika"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.id_pracownika}
              />

              <input
                placeholder='Enter to submit / 1 to go back'
                style={{ width: 300 }}
                onKeyPress={(ev) => {

                  if (ev.key === "Enter") {
                    formik.handleSubmit();
                  } else if (ev.key === '1') {
                    history.push('/bus')
                  } else {
                    window.alert("there is no such option");
                  }
                }}


              />
            </form>
          </div>
        </fieldset>
        <hr className='horizontal' />
        <fieldset>
          <legend style={{ color: 'black' }}>Dostępne autobusy</legend>
          <div style={{ width: '80%', margin: 30, }}>
            <div >
              <div style={{ color: 'black' }}>Id autobusu</div>
            </div>


            {
              bus.map(o => o.isBusy === 0 ? (
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                  <div style={{ color: 'black' }}>{o.id}</div>

                </div>
              ) : null)
            }


          </div>
        </fieldset>
      </div>
      <fieldset>
        <legend style={{ color: 'black' }}>Wypozyczone Autobusy</legend>
        <div style={{ width: '80%', margin: 30, }}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div style={{ color: 'black' }}>Id autobusu</div>
          </div>


          {
            bus.map(o => o.isBusy === 1 ? (
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                <div style={{ color: 'black' }}>{o.id}</div>
                {wyp.map(g => (g.id_autobusu === o.id ?
                  <input
                    placeholder='2 to delete'
                    style={{ width: 300 }}
                    onKeyPress={(ev) => {
                      if (ev.key === '2') {

                        Axios.post(`http://localhost:8080/pracownicy/setNotBusy/${g.id_pracownika}`).then(response => { console.log(response) }).catch(error => { console.log(error) });
                        Axios.post(`http://localhost:8080/autobusy/setNotBusy/${g.id_autobusu}`).then(response => { console.log(response) }).catch(error => { console.log(error) });
                        Axios.post(`http://localhost:8080/wypozyczenia/delete/${g.id}`).then(response => { console.log(response) }).catch(error => { console.log(error) });
                        document.location.reload(true);
                      } else {
                        window.alert("there is no such option");
                      }
                    }}
                  />
                  : null))
                }
              </div>
            ) : null)
          }


        </div>
      </fieldset>
    </div>
  )
}

export default Rent_bus





