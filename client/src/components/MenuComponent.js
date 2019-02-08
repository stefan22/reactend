import React, {Component} from 'react';
import {Navmid, Navtop} from './Helpers';
import ReactHoverObserver from 'react-hover-observer';
import '../scss/App.scss';
import Dropdown from './Dropdown';

class MenuComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { //api data endpoint
      allMenuItems: this.props.allMenuItems,
      topTitles: this.props.topTitles,
      isHovering: false
    }
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  componentWillMount() {
    this.props.getTopTitles();
  }

  handleMouseOver(e) {//former click
    const {topTitles} = this.props;
    let titles = [];
    let target = e.target.parentElement;
    let eleClicked = e.target.textContent;
    return topTitles.filter((itm) => {//toggle active
      if(itm.label === eleClicked && target.className.includes('navigation-item')) {
        itm.active = true;
        titles.push(itm);
      }
      else if(target.parentElement.parentElement) {
        itm.active = false;
        titles.push(itm);
      }
      else {
        itm.active = false;
        titles.push(itm);
      }
      return this.setState({
        topTitles: titles,
      });
    })
  }


  render() {
    return (
      <div className='header-wrapper'>
        <div className='free-delivery'>
          <p>Free Uk Delivery On All Orders Over £150 | Free UK Returns</p>
        </div>
          <div className='subnav-wrapper'>
            <div className='row'>
              <Navtop />
              <Navmid />
              <div className='header-navbottom'>
                  <div className='row'>
                    <div className='col-12'>
                      <ReactHoverObserver {...{
                        className: 'outer-nav',
                        onMouseOver: ({ e, setIsHovering, unsetIsHovering }) => {
                            if (e.target.className === 'dropdown-wrapper') {
                              unsetIsHovering();
                            } else {
                              setIsHovering();
                              this.handleMouseOver(e);
                            }
                          }
                        }}>
                        <Dropdown {...this.state}  {...this.props} />
                      </ReactHoverObserver>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    )
  }
}


export default MenuComponent;
