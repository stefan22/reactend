import React, { Component } from 'react';
import {isLoading, IsError} from './Helpers';
import MenuComponent from './MenuComponent';

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      allMenuItems: [],
      topTitles: [],
      loading: false,//loader
      error: null,
    }
    this.getData = this.getData.bind(this);
    this.getTopTitles = this.getTopTitles.bind(this);
    this.getTopTitles = this.getTopTitles.bind(this);
  }

  //fetch data
  componentDidMount() {
    this.setState({
      loading: true,
    });
    this.getData();
  }

 //retrieves express data
  getData() {
   fetch('/api/list')
    .then((res) => {
      res = res.json();
      return Promise.resolve(res) ? res : Promise.reject(res);
    })
    .then((data) => {
      this.setState({
        allMenuItems: data,
        loading: false,
      });
    })
    .catch((err) => {
      console.log(err);
      this.setState({
        error: err.message,
        loading: false,
      });
      return err.message;
    });
  }



  getTopTitles() {//used in menu
    const {allMenuItems} = this.state
    let topLabels = [];
    allMenuItems.forEach(itm => {
      let label = {
        label: itm.name,
        link: '#'+ itm.name,
        active: (itm.name === '') ? true : false,
      };
      topLabels.push(label);
    });
    return this.setState({
      topTitles: topLabels,
    });

  }


  render() {
    const {loading,error,allMenuItems} = this.state;

    return (
      <div className='main-wrapper'>
            {(loading) ? isLoading :
              <header>
                <MenuComponent
                  getTopTitles={this.getTopTitles}
                  allMenuItems={allMenuItems}
                  topTitles={this.state.topTitles}

                />
              </header>
            }
            {!!error ? <IsError message={error} /> : null}
        </div>
    );
  }
}


export default HomePage;
