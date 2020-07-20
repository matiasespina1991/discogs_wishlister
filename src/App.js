import React from 'react';
import './App.css';
import WishlisterLogo from './components/WishlisterLogo';
import Input from './components/Input';
import WishlistCards from './components/WishlistCards';
import data from './components/data';

function App() {

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

  return (
    <div className="App">
      <WishlisterLogo />
      <Input />
      <WishlistCards {...data} />
    </div>
  );
}

export default App;








// fetchRelease(inputLink) {
//   const releaseId = parseLinkToGetId(inputLink);
//   fetch(`api.discogs.com/release/${releaseId}`)
//     .then(res => res.json)
// }


  



//   parseLinkToGetId = (link) => {
//     const splittedLink = (link.split('/'));
//     return splittedLink[splittedLink.lenght -1];
//   }







