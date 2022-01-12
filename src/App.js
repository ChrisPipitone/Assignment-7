import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'

//import 'bootstrap/dist/css/bootstrap.min.css';

import GifCard from "./components/GifCard";
import SearchField from "./components/SearchField";

function App() {

  //let url = 'http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=YOUR_API_KEY'

  const [giphy, setGiphy] = useState("")


  // const getData = async () => {
  //   //await axios.get(`http://ctp-zip-api.herokuapp.com/zip/${givenZip}`)
  //   await axios.get(`http://ctp-zip-api.herokuapp.com/zip/10016`)
  //     .then(res => {
  //       setData(res.data)
  //     })
  // }

  // useEffect( () => {

  // },[])


  return (
    <div className="App">
      <SearchField />
    </div>
  );
}

export default App;
