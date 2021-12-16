import React, {useState, useEffect} from 'react'
import Axios from "axios";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Bus_stops = () => {

    const[stops, setStops] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8080/przystanki")
            .then(res => setStops(res.data.przystankiLista));
    },[]);

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
            <h2>{props.nazwa}</h2>
            <p>{props.ulica}</p>
            <p>{props.id_strefy}</p>
        </section>
    </Link>
  );
}

Stop.propTypes = {
    nazwa: PropTypes.string,
    ulica: PropTypes.string,
    id_strefy: PropTypes.number
}


export default Bus_stops
