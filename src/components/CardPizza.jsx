import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import './CardPizza.css'

function CardPizza(props) {
  return (
    <div className='cards-pizza'>
      <Card style={{ width: '20rem' }}>
      <Card.Img
      variant="top" src={props.img}/>
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>Pizza {props.name}</Card.Title>
        <Card.Text className='cards-text'>
          <p>Ingredientes: </p>
          <p>🍕{props.ingredients}</p>
          <p className='card-precio'>Precio: ${props.price}</p>
          
        </Card.Text>
        <div className='cards-buttons'>
        <Button variant="outline-dark">Ver Más 👀</Button>
        <Button variant="dark">Añadir 🛒</Button>
        </div>
 
      </Card.Body>
    </Card>
      
    </div>
  )
}

export default CardPizza