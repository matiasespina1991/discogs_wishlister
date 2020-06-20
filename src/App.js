import React from 'react';
import './App.css';
import WishlisterLogo from './components/WishlisterLogo';
import Input from './components/Input';
import WishlistCards from './components/WishlistCards';
import data from './components/data';

function App() {
  return (
    <div className="App">
      <WishlisterLogo />
      <Input />
      <WishlistCards {...data} />
    </div>
  );
}

export default App;
