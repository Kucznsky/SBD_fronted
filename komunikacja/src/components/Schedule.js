import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import Axios from "axios";
import {Link} from 'react-router-dom';

const Schedule = () => {
    return (
        <article className='content' >
            <section className='list'>
                {lines.map((lines) => {
                return(<Line key={lines.id} {...lines}></Line>);
                })}
            </section>
        </article>
    )
}

const Line = (props) => 
{
  const {id} = props;
  return (
    <section className='list_element'>
      <Link className='link3' to={`/bus_info/$id`}>{id}</Link>
    </section>
  );
}

//================================================================
const lines = [

{
  id: 1,
},
{
  id: 2,
},
{
  id: 3,
},
{
  id: 4,
},
{
  id: 5,
},
{
  id: 6,
},
];
//================================================================
export default Schedule
