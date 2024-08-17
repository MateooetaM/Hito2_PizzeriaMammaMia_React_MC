import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./CardPizza.css";
import { pizzasMenu } from "../data/pizzas.js";

function CardPizza(props) {
  return (
    <>
      <h1 className="text-center mt-3">Elige a la carta!</h1>
      <p className="text-center">
        Las mejores sabores del mediterraneo en un solo lugar
      </p>
      <div className="container d-flex flex-wrap gap-5 justify-content-start mb-4">
        {pizzasMenu.map((pizza) => {
          const { desc, id, img, ingredients, name, price } = pizza;
          return (
            <div>
              <div key={id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={img} />
                  <Card.Body className="card-body">
                    <Card.Title className="card-title">
                      Pizza: {name}
                    </Card.Title>
                    <Card.Text className="cards-text">
                      <p className="text-start">Sobre la pizza: {desc}</p>
                      <p className="text-start">
                        🍕 Ingredientes:
                        <ul>
                          {ingredients.map((ingredient, i) => (
                            <li key={i}>{ingredient}</li>
                          ))}
                        </ul>
                      </p>
                      <p className="card-precio">Precio: ${price}</p>
                    </Card.Text>
                    <div className="cards-buttons">
                      <Button variant="outline-dark">Ver Más 👀</Button>
                      <Button variant="dark">Añadir 🛒</Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CardPizza;
