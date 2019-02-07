import React from 'react';
import {Link} from 'react-router-dom';
import '../scss/App.scss';

const Dropdown = (props) => {
  const {topTitles} = props;
  return (

    <div className='header-navbottom'>
                  <div className='row'>
                    <div className='col-12'>
                      <ul
                      className='inner-nav'

                      >
                        {
                          topTitles.map((nome,idx) => {
                          return [
                            <div key={idx} seckey={idx}
                            >
                              <li
                                onMouseOut={props.handleHover}
                                onMouseOver={props.handleHover}
                                className={`navigation-item ${(nome.active) ? 'active': ''}`}>
                                <Link to={nome.link}>
                                  {nome.label}
                                  { nome.active ?
                                      <div className='dropdown-wrapper'>
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
                                      </div>  : null
                                  }
                                </Link>
                              </li>
                            </div>
                            ]
                          })
                        }
                      </ul>
                    </div>
                  </div>
                </div>

  );

}


export default Dropdown;
