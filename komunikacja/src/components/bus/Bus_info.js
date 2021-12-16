import React from 'react';



const data = [
    {
        idAutobusu: 1231231,
        nrBoczny: 123123123,

    },
    {
         idAutobusu: 1231231,
        nrBoczny: 123123123,
    },
    {
        idAutobusu: 1231231,
        nrBoczny: 123123123,
    },
]



const Bus_info = () => {
    return (
        <fieldset>
            <legend>Lista Wszystkich Autobusów</legend>
            <div style={{width:'90%',margin:30,}}>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
                    <div style={{color:'white',width:'15%'}}>id Autobusu</div>
                    <div style={{color:'white',width:'15%'}}>Nr Boczny</div>
                </div>
                <hr/>
            {
                data.map(o => 
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:10,width:'100%'}}>
                    <div style={{color:'white',width:'15%'}}>{o.idAutobusu}</div>
                    <div style={{color:'white',width:'15%'}}>{o.nrBoczny}</div>
                    </div>
                    )
            }
            

            </div>
        </fieldset>
    )
}

export default Bus_info
