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
        // getRestuls()

    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        getResults()

        console.log("submit text : "  + text)
    }

    const getResults = async () => {
        console.log(`${apiRoot}/v1/gifs/search?q=${text}&api_key=${api_key}`)
        await axios.get(`${apiRoot}/v1/gifs/search?q=${text}&api_key=${api_key}`)
        .then(res => {
            setResults(res.data.data)
            
        })  
    }

    useEffect( () => {
        getResults() 
    }, [])

    return (
        <div>
    
            <div className="p-5 bg-dark fs-1">
                <div className="text-light text-center"><b>GIPHY</b></div>
            </div>

            <div className="container d-flex justify-content-center">
                 <div className="m-2">Search For Your Favorite Gif!</div>
                <div className='m-1 searchField'>
                    <input className='input-field' type ="text" value={text} onChange={handleInput}></input>
                    <button className='submit-btn' onClick={handleSubmit}>Submit</button>
                </div>
            </div>
            
            
            <div className="container">
                {
                    result.map(element => (
                    <div key={element.id} >
                        <GifCard gifSrc={element.images.fixed_height_small.url} />

                        {/* {
                            console.log("from search "  + element.images.fixed_height_small.url) 
                        } */}
                       
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