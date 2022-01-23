import React,{useEffect,useState} from 'react';
import Axios from 'axios';
import {BrowserRouter as  Router, Route, Switch, Link, useHistory} from 'react-router-dom';

const Bus_info = () => {
    let history = useHistory();
    const [bus,setBus] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:8080/autobusy")
            .then(res => setBus(res.data.autobusyList));

            console.log(bus);
        
    },[]);

    return (
        <div>
            <input 
        placeholder=' 1 to go back'
        style={{width:200}}
        onKeyPress={(ev) => {
            if (ev.key === '1') {
            history.push('/bus')
          }else {
            window.alert("there is no such option");
          }
        }}
        
        
        />
        <fieldset>
            <legend style={{color:'black'}} >Lista Wszystkich Autobusów</legend>
            <div style={{width:'90%',margin:30,}}>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
                    <div style={{color:'black',width:'15%'}}>id Autobusu</div>
                    <div style={{color:'black',width:'15%'}}>Nr Boczny</div>
                    <div style={{color:'black',width:'15%'}}>Marka</div>
                    <div style={{color:'black',width:'15%'}}>Model</div>
                    <div style={{color:'black',width:'15%'}}>id parkingu</div>
                    <div style={{color:'black',width:'15%'}}>id centrali</div>
                    <div style={{color:'black',width:'15%'}}>jest zajety?</div>
                </div>
                <hr/>
            {
                bus.map(o => 
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:10,width:'100%'}}>
                        <div style={{color:'black',width:'15%'}}>{o.id}</div>
                        <div style={{color:'black',width:'15%'}}>{o.numer_boczny}</div>
                        <div style={{color:'black',width:'15%'}}>{o.marka}</div>
                        <div style={{color:'black',width:'15%'}}>{o.model}</div>
                        <div style={{color:'black',width:'15%'}}>{o.id_parkingu}</div>
                        <div style={{color:'black',width:'15%'}}>{o.id_centrali}</div>
                        <div style={{color:'black',width:'15%'}}>{o.isBusy ? 'Tak' : 'Nie'}</div>
                    </div>
                    )
            }
            

            </div>
        </fieldset>
        </div>
    )
}

export default Bus_info


