import React from 'react';
import { Link } from 'react-router-dom';

function Menu(props) {
    return( 
       <Link to={props.path}>
       <li className="ul__item">{props.liText}</li>
       </Link>
    );
  }
  export default Menu