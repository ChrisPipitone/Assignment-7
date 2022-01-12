import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

export default function GifCard(searchResultsProp) {

    const renderCardInfo = () => (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title className="bg-dark"><div className="text-light p-2"></div></Card.Title>
                <Card.Img>
                    variant="top"
                    src={searchResultsProp.url}
                    style={{ height: "450px", width: "100%" }}
                </Card.Img>
            </Card.Body>
        </Card>
    )

    return (
        <div>
            {searchResultsProp ? renderCardInfo() : <p> Failed search</p>}
        </div>
    )
}
