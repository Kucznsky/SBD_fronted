import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useFormik } from 'formik';


const EmployeeList = () => {
    const formik = useFormik({
        initialValues: {
            wynagrodzenie: 0,
            id_stanowiska: 0
        },
        onSubmit: values => {
            console.log(values);
            setWynagrodzenieFiltr(values.wynagrodzenie);
            setStanowiskoFiltr(values.id_stanowiska)
        },
    });

    const [pracownicy, setPracownicy] = useState([])
    const [wynagrodzenieFiltr, setWynagrodzenieFiltr] = useState(0)
    const [stanowiskoFiltr, setStanowiskoFiltr] = useState(0)

    useEffect(() => {
        Axios.get("http://localhost:8080/pracownicy")
            .then(res => setPracownicy(res.data.pracownicyList));

    }, []);


    console.log(wynagrodzenieFiltr);
    return (
        <fieldset>
            <legend>Lista Wszystkich Pracowników</legend>
            <form onSubmit={formik.handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', width: '40%', margin: 20, alignSelf: 'center', alignItems: 'center' }}
            >
                <label style={{ color: 'white' }} htmlFor="wynagrodzenie">Wynagrodzenie większe od</label>
                <input
                    id="wynagrodzenie"
                    name="wynagrodzenie"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.wynagrodzenie}
                />
                <label style={{ color: 'white' }} htmlFor="id_stanowiska">Wybierz stanowisko</label>
                <input
                    id="id_stanowiska"
                    name="id_stanowiska"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.id_stanowiska}
                />
                <button
                    type="submit">Filtruj
                </button>
            </form>

            <div style={{ width: '100%', margin: 30 }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                    <div style={{ color: 'white', width: '15%' }}>Imie</div>
                    <div style={{ color: 'white', width: '15%' }}>Nazwisko</div>
                    <div style={{ color: 'white', width: '15%' }}>ID Stanowiska</div>
                    <div style={{ color: 'white', width: '15%' }}>Wynagrodzenie</div>
                    <div style={{ color: 'white', width: '15%' }}>ID umowy</div>
                    <div style={{ color: 'white', width: '15%' }}>ID Pracownika</div>
                    <div style={{ color: 'white', width: '10%' }}>Delete</div>
                </div>
                <hr />
                { 
                    pracownicy.map(o => 
                        stanowiskoFiltr === 0 && o.wynagrodzenie >= wynagrodzenieFiltr ?
                            <div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, width: '100%', alignItems: 'center' }}>
                                    <div style={{ color: 'white', width: '15%' }}>{o.imie}</div>
                                    <div style={{ color: 'white', width: '15%' }}>{o.nazwisko}</div>
                                    <div style={{ color: 'white', width: '15%' }}>{o.id_stanowiska}</div>
                                    <div style={{ color: 'white', width: '15%' }}>{o.wynagrodzenie}</div>
                                    <div style={{ color: 'white', width: '15%' }}>{o.id_centrali}</div>
                                    <div style={{ color: 'white', width: '15%' }}>{o.id}</div>
                                    <button style={{ color: 'white', width: '10%' }} onClick={() => Axios.post(`http://localhost:8080/pracownicy/delete/${o.id}`, o.id)}>Delete</button>
                                </div>
                            </div> 
                         : stanowiskoFiltr === o.id_stanowiska && o.wynagrodzenie >= wynagrodzenieFiltr ?
                            <div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, width: '100%', alignItems: 'center' }}>
                                    <div style={{ color: 'white', width: '15%' }}>{o.imie}</div>
                                    <div style={{ color: 'white', width: '15%' }}>{o.nazwisko}</div>
                                    <div style={{ color: 'white', width: '15%' }}>{o.id_stanowiska}</div>
                                    <div style={{ color: 'white', width: '15%' }}>{o.wynagrodzenie}</div>
                                    <div style={{ color: 'white', width: '15%' }}>{o.id_centrali}</div>
                                    <div style={{ color: 'white', width: '15%' }}>{o.id}</div>
                                    <button style={{ color: 'white', width: '10%' }} onClick={() => Axios.post(`http://localhost:8080/pracownicy/delete/${o.id}`, o.id)}>Delete</button>
                                </div>
                            </div> : null
                    )
                }


            </div>
        </fieldset>
    )
}

export default EmployeeList
