import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBus,faInfoCircle,faUserFriends,faTicketAlt,faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return(
        <header className='navbar'>
            <nav className='navbar_links'>
                <ul>
                    <li>
                        <Link className='link' to='/'>Bus stops <FontAwesomeIcon icon={faBus}></FontAwesomeIcon></Link>
                    </li>
                    <li>
                        <Link className='link' to='/bus_info'>Bus info <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon></Link>
                    </li>
                    <li>
                        <Link className='link' to='/employee_info'>employee info <FontAwesomeIcon icon={faUserFriends}></FontAwesomeIcon></Link>
                    </li>
                    <li>
                        <Link className='link' to='/ticket_owners_list'>ticket owners <FontAwesomeIcon icon={faTicketAlt}></FontAwesomeIcon></Link>
                    </li>
                    <li>
                        <Link className='link' to='/tickets'>Buy Tickets <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;