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


export const Navmid = () => (

  <div className='header-navmid'>
    <div className='row'>
      <div className='col-4-sm header-midleft'>
        &nbsp;
      </div>
      <div className='col-4-sm header-midcenter'>
        <div className='center-logo-wrap'>
          <Link to='#' className='center-logo-link'>

          </Link>
        </div>
      </div>
      <div className='col-4-sm header-midright'>
      <div className='header-searchcart'>
        <Link to='#' className='header-search'>
        </Link>
        <Link to='#' className='header-cart'>
        </Link>
      </div>
    </div>
    </div>
  </div>

);


export const Navtop = () => (

  <div className='header-navtop'>
    <div className='row'>
      <div className='col-6'>
        <Link className='uk-flag' to='#' title='uk flag'>
          United Kingdom
          <span className='header-flag-wrap'></span>
        </Link>
      </div>
      <div className='col-6'>
        <div className='header-login'>
          <ul>
            <li>
              <Link to='#'>Help</Link>
            </li>
            <li>
              <Link to='#'>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>


);
