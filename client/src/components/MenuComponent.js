import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../scss/App.scss';
import Dropdown from './Dropdown';

class MenuComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { //api data endpoint
      allMenuItems: this.props.allMenuItems,
      topTitles: this.props.topTitles,
      hover: false,
    }
    this.toggleSelection = this.toggleSelection.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  componentWillMount() {
    this.props.getTopTitles();
  }

  toggleSelection(e) {//former click
    const {topTitles} = this.props;
    let eleClicked = e.target.textContent;
    return topTitles.filter((itm) => {//toggle active
      if(itm.label === eleClicked) {
        this.setState({hover: true});
        this.setState({active: true});
        return itm.active = true;
      }
      if(itm.active === true) {
        this.setState({hover: false});
        this.setState({active: false});
        return itm.active = false;
      }
      return itm;
    });
  }

  handleHover(e) {
    const {topTitles} = this.props;
    let eleHovered = e.target.textContent;
    return topTitles.filter((itm) => {//toggle active
      if(itm.label === eleHovered) {
        this.setState({hover: true});
        itm.active = true;
        if(itm.active === true) {
          setTimeout(() => {
            this.setState({hover: false});
            itm.active = false;
          },150);
        }
      }
      return itm;
    });
  }

  render() {
    return (
      <div className='header-wrapper'>
        <div className='free-delivery'>
          <p>Free Uk Delivery On All Orders Over £150 | Free UK Returns</p>
        </div>
          <div className='subnav-wrapper'>
            <div className='row'>
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
                <Dropdown
                  topTitles={this.props.topTitles}
                  handleHover={this.handleHover}
                 />
            </div>
          </div>
        </div>

    )
  }
}


export default MenuComponent;
