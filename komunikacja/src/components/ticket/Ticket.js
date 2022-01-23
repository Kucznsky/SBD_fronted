import React from 'react'
import {BrowserRouter as  Router, Route, Switch, Link, useHistory} from 'react-router-dom';


const Ticket = () => {
    let history = useHistory();
    return (
        <Router>
           <div>Where to navigate:
            <div>1. Buy ticket</div>
            <div>2. Add Client</div>
            <div>3. Back</div>
            <div>---------------</div>
            <input
      onKeyPress={(ev) => {
  
          if(ev.key === "1") {
        history.push('/ticket/buy_ticket')
          }else if(ev.key === '2') {
            history.push('/ticket/add_client')
          }else if (ev.key=== '3') {
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

export default Ticket
