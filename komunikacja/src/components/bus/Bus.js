import React from 'react'
import {BrowserRouter as  Router, Route, Switch, Link, useHistory} from 'react-router-dom';


const Bus = () => {
    let history = useHistory();
    return (
       <Router>
           <div> Where to navigate:
            <div>1. Bus info</div>
            <div>2. Rent_bus</div>
            <div>3. Add_bus</div>
            <div>4. Back</div>
            <div>---------------</div>
            <input
      onKeyPress={(ev) => {

          if(ev.key === "1") {
        history.push('/bus_info')
          }else if (ev.key === '2') {
            history.push('/bus_info/Rent_bus')
          }else if(ev.key === '3') {
            history.push('/bus_info/add_bus')
          }else if(ev.key === '4') {
            history.push('/')
          }else {
            window.alert("there is no such option");
          }
        
      }}
    />
        </div>

        </Router>
    )
}

export default Bus
