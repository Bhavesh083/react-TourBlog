import React from 'react';
import './Cards.css';
import {Link} from 'react-router-dom';

function Cardslist(props) {
    return (
        <>
          <li className='list-card'>
              <Link className='link-card' to={props.path}>
              <img src={props.src} />
              </Link>
              <label>{props.label}</label>
              <span>{props.text}</span> 
          </li>
        </>
    )
}

export default Cardslist;
