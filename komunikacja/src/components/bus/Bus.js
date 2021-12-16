import React from 'react'
import {BrowserRouter as  Router, Route, Switch, Link} from 'react-router-dom';
import Bus_info from './Bus_info';
import Bus_stops from './Bus_stops';
import Lines from './Lines';


const Bus = () => {
    return (
       <Router>
            <div className='content'>
            <nav className='navbar_links'>
                <ul>
                    <li>
                        <Link className='link2' to='/bus_info'>Bus info</Link>
                    </li>
                    <li>
                        <Link className='link2' to='/bus_info/bus_stops'>Bus stops</Link>
                    </li>
                </ul>
            </nav>
            </div>
            <Switch>
                <Route exact path="/bus_info">
                    <Bus_info></Bus_info>
                </Route>
                <Route exact path='/bus_info/bus_stops'>
                    <Bus_stops></Bus_stops>
                </Route>
                <Route exact path='/bus_info/:id'>
                    <Lines></Lines>
                </Route>
            </Switch>
        </Router>
    )
}

export default Bus
