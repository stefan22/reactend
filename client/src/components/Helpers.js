import React from 'react';
import {Link} from 'react-router-dom';

//loading elem
export const isLoading =  (
  <div className='list-loading'>
    <h2>Nothing found yet</h2>
    <p>Loading...</p>
  </div>
);

export const EasyButton = (props) => (
  <button>
    <Link className='home-to-list' to={props.to}>{props.name}</Link>
  </button>
);

//run front-end without back-end server to see error
export const IsError = (props) => (

  <div className='error-wrapper'>
    <div className='container'>
      <div className='error-message text-center'>
        <h2>{props.message}</h2>
      </div>
    </div>
  </div>

);
