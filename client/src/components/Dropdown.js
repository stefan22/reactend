import React from 'react';
import {Link} from 'react-router-dom';
import '../scss/App.scss';

const Dropdown = (props) => {
  const {topTitles, isHovering} = props;

  return (
      <ul
      className='inner-nav'
      >
        {
          topTitles.map((nome,idx) => {
          return [
              <li
                key={idx} seckey={idx}
                className={`navigation-item ${(nome.active) ? 'active' : ''}`}>
                <Link to='#'>{nome.label}
                  {nome.active && isHovering ?
                      <div className='dropdown-wrapper'
                      >
                        <div className='row'>
                          <div className='col-12'>
                              <h2>{nome.label}</h2>
                            <ul className='dropdown-inner'>
                                <li>items</li>
                                <li>items</li>
                                <li>items</li>
                            </ul>
                          </div>
                        </div>
                      </div> : null
                  }
                </Link>
              </li>
            ]
          })
        }
      </ul>

  );

}


export default Dropdown;
