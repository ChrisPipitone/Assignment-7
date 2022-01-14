import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'

//import 'bootstrap/dist/css/bootstrap.min.css';

import GifCard from "./components/GifCard";
import SearchField from "./components/SearchField";

function App() {

  const [giphy, setGiphy] = useState("")


  // const getData = async () => {
  //   //await axios.get(`http://ctp-zip-api.herokuapp.com/zip/${givenZip}`)
  //   await axios.get(`http://ctp-zip-api.herokuapp.com/zip/10016`)
  //     .then(res => {
  //       setData(res.data)
  //     })
  // }


  return (
    <div className="App">
      <SearchField />
    </div>
  );
}

export default App;
