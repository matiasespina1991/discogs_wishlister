import React from 'react';
import './App.css';
import WishlisterLogo from './components/WishlisterLogo';
import Input from './components/Input';
import WishlistCards from './components/WishlistCards';
import data from './components/data';
import axios from 'axios';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // create a method to collect the users input and save it in the state
  // function to split the id of the release and add it to the fetch wiht string interpolation
  // fetch from the API using the user's input information
  // save the data from the API on the state
  // Make the array for the wishlist items in the state

  // componentDidMount() {
  //   this.fetchData()
  // }

  // fetchData = () => {
  //   fetch('')
  //   .then(res => res.json())
  //   .then(data => this.setState( { dataArray: data.data } ))
  // }

  parseLinkToGetId = (link) => {
    const splittedLink = (link.split('/'));
    console.log(splittedLink[splittedLink.length -1])
    return splittedLink[splittedLink.length -1];
  }

  fetchRelease(releaseId) {
    axios.get(`https://api.discogs.com/releases/${releaseId}`)
    .then(res => {
      console.log(res)
    });
}

  handleSubmit = (e) => {
   this.fetchRelease(this.parseLinkToGetId(e)); 
  }

  render() {
    return (
      <div className="App">
        <WishlisterLogo />
        <Input handleSubmit={(e) => this.handleSubmit(e)} />
        <WishlistCards {...data} />
      </div>
    );
  }

}

export default App;











  











