import React, {useState, useEffect} from 'react'
import Axios from "axios";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Bus_stops = () => {

    /*const[stops, setStops] = useState([]);

    useEffect(() => {
        Axios.get("//ENDPOINT//")
            .then(res => setStops(res.data));
    },[]);*/

    return (
        <article className='content' >
            <section className='list'>
                {stops.map((stops) => {
                return(<Stop key={stops.id} {...stops}></Stop>);
                })}
            </section>
        </article>
    )
}

const Stop = (props) => 
{
  const {name,localisation, id,area} = props;
  return (
      <Link className='link3' to={`/bus_info/${id}`}>
        <section className='list_element'>
            <h2>{name}</h2>
            <p>{localisation}</p>
            <p>{area}</p>
        </section>
    </Link>
  );
}

Stop.propTypes = {
    name: PropTypes.string,
    localisation: PropTypes.string,
    area: PropTypes.string
}
//========================================================================
const stops = [
    {
        id: 1,
        name: "Zwierzyniecka",
        localisation: "ul. Zwierzyniecka",
        area: "Mickiewicza"
    },
    {
        id: 2,
        name: "Miłosza",
        localisation: "ul. Miłosza",
        area: "Mickiewicza"
    },
    {
        id: 3,
        name: "Pałac Branickich",
        localisation: "ul. Legionowa",
        area: "Centrum"
    },
    {
        id: 4,
        name: "Teatr",
        localisation: "ul. Branickiego",
        area: "Centrum"
    },
];
//========================================================================

export default Bus_stops
