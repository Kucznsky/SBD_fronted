import React,{useEffect,useState} from 'react';
import Axios from 'axios';







const DriversList = () => {
    const [pracownicy,setPracownicy] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:8080/pracownicy")
            .then(res => setPracownicy(res.data.pracownicyList));
    },[]);



    return (
        <fieldset>
            <legend>Lista Kierowców aktualnie wolnych kierowcow</legend>
            <div style={{width:'90%',margin:30,display:'flex',flexDirection:'column'}}>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
                    <div style={{color:'white',width:'20%'}}>Imie</div>
                    <div style={{color:'white',width:'20%'}}>Nazwisko</div>
                    <div style={{color:'white',width:'20%'}}>Wynagrodzenie</div>
                    <div style={{color:'white',width:'20%'}}>ID Pracownika</div>
                </div>
                <hr/>
            {
                pracownicy.map(o => o.is_busy ===  0 ? (
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:10,width:'100%'}}>
                    <div style={{color:'white',width:'20%'}}>{o.imie}</div>
                    <div style={{color:'white',width:'20%'}}>{o.nazwisko}</div>
                    <div style={{color:'white',width:'20%'}}>{o.wynagrodzenie}</div>
                    <div style={{color:'white',width:'20%'}}>{o.id_centrali}</div>
                    </div>
                    ) : null
                    
                    )
            }
            

            </div>
        </fieldset>
    )
}

export default DriversList
