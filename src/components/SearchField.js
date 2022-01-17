import React, { useState, useEffect }from 'react'
import GifCard from './GifCard'
import axios from "axios"

export default function SearchField() {

    const [result, setResults] = useState([])
    const [text, setText] = useState([])

    const apiRoot = 'http://api.giphy.com'
    const api_key = process.env.REACT_APP_GIPHY_KEY

    const handleInput = (e) => {
        e.preventDefault();
        setText(e.target.value)
    }
    const handleSearch = (e) => {
        e.preventDefault();
        const url = `${apiRoot}/v1/gifs/search?q=${text}&api_key=${api_key}`
        getResults(url)

        console.log("submit text : "  + text)
    }
    const handleTrending = (e) => {
        const url = `${apiRoot}/v1/gifs/trending?api_key=${api_key}`
        getResults(url)
        console.log("TRENDING ")
    }
    const handleRandom = (e) => {

        //returns correct url in console. crashes after 
        const url = `${apiRoot}/v1/gifs/random?api_key=${api_key}`
        getResults(url)
        console.log("RANDOM")
    }

    const getResults = async (url) => {
        console.log(url)
        await axios.get(url)
        .then(res => {
            setResults(res.data.data)
            
        })  
    }
   
    // useEffect( () => {
    //     getResults() 
    // }, [])

    return (
        <div>
    
            <div className="p-5 bg-dark fs-1">
                <div className="text-light text-center"><b>GIPHY</b></div>
            </div>

            <div className="container d-flex justify-content-center">
                 <div className="m-2">Search For Your Favorite Gif!</div>
                <div className='m-1 searchField'>
                    <input className='input-field' type ="text" value={text} onChange={handleInput}></input>
                    <button className='seach-btn' onClick={handleSearch}>Search</button>
                    <button className='trending-btn' onClick={handleTrending}>Trending</button>
                    <button className='random-btn' onClick={handleRandom}>Random</button>
                </div>
            </div>
            
            <div className="container">
                {
                    //when random button is pressed this outputs twice 
                    //second time it seems like map function tries to access a second element that doesnt
                    //exist since random only returns one object from the api
                    // so it crashes
                    console.log("help")
                }

                {
                    console.log(result)
                }

                {
                    result.map(element => (
                    <div key={element.id} >
                        <GifCard gifSrc={element.images.fixed_height_small.url} />

                       {/* {
                           console.log(element)
                       }  */}

                    </div>
                    )
                    )

                }    
                {/* {
                    console.log(result)
                } */}

            </div>
        </div>
    );
}