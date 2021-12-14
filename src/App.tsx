import React from 'react';
import './App.css';
import StarRating from './StarRating';

function App() {
  return (
    <div className="App">
      <StarRating rating={3.5}/>
    </div>
  );
}

export default App;
