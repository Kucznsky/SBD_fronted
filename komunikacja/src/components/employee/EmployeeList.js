import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useFormik } from 'formik';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';


const EmployeeList = () => {

    const [pracownicy, setPracownicy] = useState([])

    let history = useHistory();
    useEffect(() => {
        Axios.get("http://localhost:8080/pracownicy")
            .then(res => setPracownicy(res.data.pracownicyList));
    }, []);



    return (
        <div>
            <input
                placeholder='1 to go back'
                style={{ width: 300 }}
                onKeyPress={(ev) => {
                    if (ev.key === '1') {
                        history.push('/employee')
                    } else {
                        window.alert("there is no such option");
                    }
                }}


            />
            <fieldset>

                <legend style={{ color: 'black' }}>Lista Wszystkich Pracowników</legend>
                <div style={{ width: '100%', }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ color: 'black', width: '15%' }}>Imie</div>
                        <div style={{ color: 'black', width: '15%' }}>Nazwisko</div>
                        <div style={{ color: 'black', width: '15%' }}>ID Stanowiska</div>
                        <div style={{ color: 'black', width: '15%' }}>Wynagrodzenie</div>
                        <div style={{ color: 'black', width: '15%' }}>ID umowy</div>
                        <div style={{ color: 'black', width: '15%' }}>ID Pracownika</div>
                        <div style={{ color: 'black', width: '10%' }}>Delete</div>
                    </div>
                    {
                        pracownicy.map(o =>
                            <div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, width: '100%', alignItems: 'center' }}>
                                    <div style={{ color: 'black', width: '15%' }}>{o.imie}</div>
                                    <div style={{ color: 'black', width: '15%' }}>{o.nazwisko}</div>
                                    <div style={{ color: 'black', width: '15%' }}>{o.id_stanowiska}</div>
                                    <div style={{ color: 'black', width: '15%' }}>{o.wynagrodzenie}</div>
                                    <div style={{ color: 'black', width: '15%' }}>{o.id_centrali}</div>
                                    <div style={{ color: 'black', width: '15%' }}>{o.id}</div>
                                    <input
                                        placeholder='2 to delete'
                                        style={{ width: 300 }}
                                        onKeyPress={(ev) => {
                                            if (ev.key === '2') {
                                                Axios.post(`http://localhost:8080/pracownicy/delete/${o.id}`, o.id);
                                                document.location.reload(true)
                                            } else {
                                                window.alert("there is no such option");
                                            }
                                        }}


                                    />

                                </div>
                            </div>

                        )
                    }


                </div>
            </fieldset>
        </div>
    )
}

export default EmployeeList
