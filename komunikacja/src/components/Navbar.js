import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <div>
            <ul>
                <li>
                    <Link to='/'>Bus schedule</Link>
                </li>
                <li>
                    <Link to='/bus_stops'>Bus stops</Link>
                </li>
                <li>
                    <Link to='/bus_info'>Bus info</Link>
                </li>
                <li>
                    <Link to='/employee_info'>employee info</Link>
                </li>
                <li>
                    <Link to='/ticket_owners_list'>ticket owners list</Link>
                </li>
                <li>
                    <Link to='/tickets'>tickets</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;