import {Link} from 'react-router-dom';
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
//import {faHome, faVideo, faFilm, faCouch} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return(
        <header className='navbar'>
            <nav className='navbar_links'>
                <ul>
                    <li>
                        <Link className='link' to='/'>Bus stops</Link>
                    </li>
                    <li>
                        <Link className='link' to='/bus_info'>Bus info</Link>
                    </li>
                    <li>
                        <Link className='link' to='/employee_info'>employee info</Link>
                    </li>
                    <li>
                        <Link className='link' to='/ticket_owners_list'>ticket owners list</Link>
                    </li>
                    <li>
                        <Link className='link' to='/tickets'>Buy Tickets</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;