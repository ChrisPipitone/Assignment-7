import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

export default function GifCard(gifSrc) {

     const url = gifSrc;
    

    const renderCardInfo = () => (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={gifSrc.gifSrc} alt="gif" />
            <Card.Body>
                <Card.Title>
                    Title
                </Card.Title>
            </Card.Body>
        </Card>
    )

    return (
        <div>
            {gifSrc ? renderCardInfo() : <p> Failed search</p>}
            {/* {console.log("from card " + gifSrc.gifSrc)} */}
        </div>
    )
}
