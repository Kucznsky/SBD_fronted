import React from 'react';



const data = [
    {
        imie: 'andrzejek',
        nazwisko: 'karaczanski',
        nazwaStanowiska: 'Kierowca',
        wynagrodzenie: 1500,
        idUmowy: 12313,
        idPracownika: 1,
    },
    {
        imie: 'andr2132k',
        nazwisko: 'karsnski',
        nazwaStanowiska: 'Ki1231wca',
        wynagrodzenie: 15300,
        idUmowy: 12313,
        idPracownika: 1,
    },
    {
        imie: 'andrzejek',
        nazwisko: 'karaczadasnski',
        nazwaStanowiska: 'Kierowca',
        wynagrodzenie: 1500,
        idUmowy: 12313,
        idPracownika: 1,
    },
]



const EmployeeList = () => {
    return (
        <div style={{width:'90%',margin:100,}}>
            <div style={{color:'white',margin:50}}>Lista Wszystkich Pracowników </div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
                <div style={{color:'white',width:'15%'}}>Imie</div>
                <div style={{color:'white',width:'15%'}}>Nazwisko</div>
                <div style={{color:'white',width:'15%'}}>Nazwa Stanowiska</div>
                <div style={{color:'white',width:'15%'}}>Wynagrodzenie</div>
                <div style={{color:'white',width:'15%'}}>ID umowy</div>
                <div style={{color:'white',width:'15%'}}>ID Pracownika</div>
            </div>
            <hr/>
        {
            data.map(o => 
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:10,width:'100%'}}>
                <div style={{color:'white',width:'15%'}}>{o.imie}</div>
                <div style={{color:'white',width:'15%'}}>{o.nazwisko}</div>
                <div style={{color:'white',width:'15%'}}>{o.nazwaStanowiska}</div>
                <div style={{color:'white',width:'15%'}}>{o.wynagrodzenie}</div>
                <div style={{color:'white',width:'15%'}}>{o.idUmowy}</div>
                <div style={{color:'white',width:'15%'}}>{o.idPracownika}</div>
                </div>
                )
        }
        

        </div>
    )
}

export default EmployeeList
