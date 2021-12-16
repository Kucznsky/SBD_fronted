import React,{useEffect,useState} from 'react';
import Axios from 'axios';








const EmployeeList = () => {

    const [pracownicy,setPracownicy] = useState([])

useEffect(() => {
    Axios.get("http://localhost:8080/pracownicy")
        .then(res => setPracownicy(res.data.pracownicyList));
       
},[]);






    return (
        <fieldset>
            <legend>Lista Wszystkich Pracowników</legend>
            <div style={{width:'90%',margin:30}}>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
                    <div style={{color:'white',width:'15%'}}>Imie</div>
                    <div style={{color:'white',width:'15%'}}>Nazwisko</div>
                    <div style={{color:'white',width:'15%'}}>ID Stanowiska</div>
                    <div style={{color:'white',width:'15%'}}>Wynagrodzenie</div>
                    <div style={{color:'white',width:'15%'}}>ID umowy</div>
                    <div style={{color:'white',width:'15%'}}>ID Pracownika</div>
                </div>
                <hr/>
            {
                pracownicy.map(o => 
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:10,width:'100%'}}>
                    <div style={{color:'white',width:'15%'}}>{o.imie}</div>
                    <div style={{color:'white',width:'15%'}}>{o.nazwisko}</div>
                    <div style={{color:'white',width:'15%'}}>{o.id_stanowiska}</div>
                    <div style={{color:'white',width:'15%'}}>{o.wynagrodzenie}</div>
                    <div style={{color:'white',width:'15%'}}>{o.id_centrali}</div>
                    <div style={{color:'white',width:'15%'}}>{o.id}</div>
                    </div>
                    )
            }
            

            </div>
        </fieldset>
    )
}

export default EmployeeList
