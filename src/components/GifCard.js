import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

export default function GifCard(gifSrc) {

     const url = gifSrc;
    

    const renderCardInfo = () => (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={gifSrc.gifSrc} alt="gif" />
        </Card>
    )

    return (
        <div>
            {gifSrc ? renderCardInfo() : <p> Failed search</p>}
        </div>
    )
}
