import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCbwXsrDW3-aaxM43RgzFkdMmGt1t2MGqA';



const App = () => {
return (
  <div>
    <SearchBar />
  </div>
);
}

ReactDOM.render(<App />, document.querySelector('.container'));