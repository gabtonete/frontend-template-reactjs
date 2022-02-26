import React from "react";
import { Card, Button } from "react-bootstrap";
import cardproduct from "../assets/icons/cardproduct.svg";
import coffee from "../assets/icons/coffee.svg";
import meditation from "../assets/icons/meditation.svg";
import chocolate from "../assets/icons/chocolate.svg";

export const Cards = () => {
  return (
    <div className="container-cards">
      <div className="container-card">
      <Card style={{ width: '14rem' }}>
        <Card.Body>
          <div className="card-title">
            <Card.Title>Products</Card.Title>
            <img src={cardproduct} alt="Card de produto" />
          </div>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="outline-secondary">Buy a product</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '14rem' }}>
        <Card.Body>
          <div className="card-title">
            <Card.Title>Coffee</Card.Title>
            <img src={coffee} alt="Card de coffee" width='25'/>
          </div>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="outline-secondary">Drink some coffee</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '14rem' }}>
        <Card.Body>
          <div className="card-title">
            <Card.Title>Eat chocolate</Card.Title>
            <img src={chocolate} alt="Card de coffee" width='25'/>
          </div>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="outline-secondary">Wanna some snickers?</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '14rem' }}>
        <Card.Body>
          <div className="card-title">
            <Card.Title>Keep calm</Card.Title>
            <img src={meditation} alt="Card de coffee" width='25'/>
          </div>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="outline-secondary">Just breath</Button>
        </Card.Body>
      </Card>
      </div>
    </div>
  )
}