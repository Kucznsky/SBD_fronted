import React from 'react';



const data = [
    {
        imie: 'andrzejek',
        nazwisko: 'karaczanski',
        wynagrodzenie: 1500,
        idUmowy: 12313,
        idPracownika: 1,
    },
    {
        imie: 'andr2132k',
        nazwisko: 'karsnski',
        wynagrodzenie: 15300,
        idUmowy: 12313,
        idPracownika: 1,
    },
    {
        imie: 'andrzejek',
        nazwisko: 'karaczadasnski',
        wynagrodzenie: 1500,
        idUmowy: 12313,
        idPracownika: 1,
    },
]



const DriversList = () => {
    return (
        <div style={{width:'90%',margin:100,display:'flex',flexDirection:'column'}}>
            <div style={{color:'white',margin:40}}>Lista Kierowców aktualnie zajętych autobusów</div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
                <div style={{color:'white',width:'20%'}}>Imie</div>
                <div style={{color:'white',width:'20%'}}>Nazwisko</div>
                <div style={{color:'white',width:'20%'}}>Wynagrodzenie</div>
                <div style={{color:'white',width:'20%'}}>ID umowy</div>
                <div style={{color:'white',width:'20%'}}>ID Pracownika</div>
            </div>
            <hr/>
        {
            data.map(o => 
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:10,width:'100%'}}>
                <div style={{color:'white',width:'20%'}}>{o.imie}</div>
                <div style={{color:'white',width:'20%'}}>{o.nazwisko}</div>
                <div style={{color:'white',width:'20%'}}>{o.wynagrodzenie}</div>
                <div style={{color:'white',width:'20%'}}>{o.idUmowy}</div>
                <div style={{color:'white',width:'20%'}}>{o.idPracownika}</div>
                </div>
                )
        }
        

        </div>
    )
}

export default DriversList
