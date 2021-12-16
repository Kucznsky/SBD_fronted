import React from 'react'
import {BrowserRouter as  Router, Route, Switch, Link} from 'react-router-dom';
import Axios from "axios";
import Buy_ticket from './Buy_ticket';
import TicketOwnersList from './TicketOwnersList';
import Add_client from './Add_client';

const Ticket = () => {
    return (
        <Router>
            <div className='content'>
            <nav className='navbar_links'>
                <ul>
                    <li>
                        <Link className='link2' to='/ticket/buy_ticket'>Buy ticket</Link>
                    </li>
                    <li>
                        <Link className='link2' to='/ticket/ticket_owner_list'>Ticket owners</Link>
                    </li>
                    <li>
                        <Link className='link2' to='/ticket/add_client'>Add client</Link>
                    </li>
                </ul>
            </nav>
            </div>
            <Switch>
                <Route exact path="/ticket/buy_ticket">
                    <Buy_ticket></Buy_ticket>
                </Route>
                <Route exact path='/ticket/ticket_owner_list'>
                    <TicketOwnersList></TicketOwnersList>
                </Route>
                <Route exact path='/ticket/add_client'>
                    <Add_client></Add_client>
                </Route>
            </Switch>
        </Router>

    )
}

export default Ticket
