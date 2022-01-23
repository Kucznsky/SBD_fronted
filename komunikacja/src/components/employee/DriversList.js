import React,{useEffect,useState} from 'react';
import Axios from 'axios';
import {BrowserRouter as  Router, Route, Switch, Link, useHistory} from 'react-router-dom';







const DriversList = () => {
    let history = useHistory();
    const [pracownicy,setPracownicy] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:8080/pracownicy")
            .then(res => setPracownicy(res.data.pracownicyList));
    },[]);



    return (
        <div>
        <input 
        placeholder='1 to go back'
        style={{width:300}}
        onKeyPress={(ev) => {
            if (ev.key === '1') {
            history.push('/employee')
          }else {
            window.alert("there is no such option");
          }
        }}
        
        
        />
        <fieldset>
            <legend style={{color:'black'}}>Lista Kierowców aktualnie wolnych kierowcow</legend>
            <div style={{width:'90%',display:'flex',flexDirection:'column'}}>
                <div style={{display:'flex',flexDirection:'row',width:'100%'}}>
                    <div style={{color:'black',width:'20%'}}>Imie</div>
                    <div style={{color:'black',width:'20%'}}>Nazwisko</div>
                    <div style={{color:'black',width:'20%'}}>Wynagrodzenie</div>
                    <div style={{color:'black',width:'20%'}}>ID Pracownika</div>
                </div>
          
            {
                pracownicy.map(o => o.isBusy ===  0 && o.id_stanowiska === 5 ? (
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:10,width:'100%'}}>
                    <div style={{color:'black',width:'20%'}}>{o.imie}</div>
                    <div style={{color:'black',width:'20%'}}>{o.nazwisko}</div>
                    <div style={{color:'black',width:'20%'}}>{o.wynagrodzenie}</div>
                    <div style={{color:'black',width:'20%'}}>{o.id_centrali}</div>
                    </div>
                    ) : null
                    
                    )
            }
            

            </div>
        </fieldset></div>
    )
}

export default DriversList
