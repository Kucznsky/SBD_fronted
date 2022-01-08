import React, {useState, useEffect} from 'react'
import Axios from "axios";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Bus_stops = () => {

    const[stops, setStops] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8080/przystanki")
            .then(res => setStops(res.data.przystankiList));
    },[]);

console.log(stops);



    return (
        <article className='content' >
            <section className='list'>
                {stops.map(o => {
                return(<Stop key={o.id} {...o}></Stop>);
                })}
            </section>
        </article>
    )
}



const Stop = (props) => 
{
  const {nazwa,ulica, id,id_strefy} = props;
  return (
      <Link className='link3' to={`/bus_info/${props.id}`}>
        <section className='list_element'>
            <h2>{props.nazwa}</h2>
            <p>{props.ulica}</p>
            <p>{props.id_strefy}</p>
        </section>
    </Link>
  );
}

Stop.propTypes = {
    id: PropTypes.number,
    nazwa: PropTypes.string,
    ulica: PropTypes.string,
    id_strefy: PropTypes.number
}


export default Bus_stops
