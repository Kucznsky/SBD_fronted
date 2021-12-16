import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBus,faInfoCircle,faUserFriends,faTicketAlt,faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return(
        <header className='navbar'>
            <nav className='navbar_links'>
                <ul>
                    <li>
                        <Link className='link' to='/'>Bus <FontAwesomeIcon icon={faBus}></FontAwesomeIcon></Link>
                    </li>
                    <li>
                        <Link className='link' to='/employee'>Employees <FontAwesomeIcon icon={faUserFriends}></FontAwesomeIcon></Link>
                    </li>
                    <li>
                        <Link className='link' to='/ticket'>Buy Tickets <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;