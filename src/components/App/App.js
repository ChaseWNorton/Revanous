import React, { Component } from 'react';
import './App.css';
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

const business = {
	imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
	name: 'Chase Norton Pizza',
	address: '1010 Paddington Way',
	city: 'Flavortown',
	state: 'NY',
	zipCode: '10101',
	category: 'Italian',
	rating: 4.5,
	reviewCount: 90,
};



class App extends Component {

	businesses = [business, business, business, business, business, business];

  searchYelp(term, location, sortBy) {
    console.log('Searching Yelp with ' + term + ', ' + location + ', ' + sortBy);
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
          <SearchBar searchYelp={this.searchYelp}/>
          <BusinessList businesses={this.businesses}/>
      </div>
    );
  }
}

export default App;
