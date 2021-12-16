import React,{useEffect,useState} from 'react';
import Axios from 'axios';

const Bus_info = () => {

    const [bus,setBus] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:8080/autobusy")
            .then(res => setBus(res.data.busList));
        
    },[]);

    return (
        <fieldset>
            <legend>Lista Wszystkich Autobusów</legend>
            <div style={{width:'90%',margin:30,}}>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
                    <div style={{color:'white',width:'15%'}}>id Autobusu</div>
                    <div style={{color:'white',width:'15%'}}>Nr Boczny</div>
                    <div style={{color:'white',width:'15%'}}>Marka</div>
                    <div style={{color:'white',width:'15%'}}>Model</div>
                    <div style={{color:'white',width:'15%'}}>id parkingu</div>
                    <div style={{color:'white',width:'15%'}}>id centrali</div>
                </div>
                <hr/>
            {
                bus.map(o => 
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:10,width:'100%'}}>
                        <div style={{color:'white',width:'15%'}}>{o.id_autobusu}</div>
                        <div style={{color:'white',width:'15%'}}>{o.numer_boczny}</div>
                        <div style={{color:'white',width:'15%'}}>{o.nrBoczny}</div>
                        <div style={{color:'white',width:'15%'}}>{o.nrBoczny}</div>
                        <div style={{color:'white',width:'15%'}}>{o.id_parkingu}</div>
                        <div style={{color:'white',width:'15%'}}>{o.id_centrali}</div>
                    </div>
                    )
            }
            

            </div>
        </fieldset>
    )
}

export default Bus_info
