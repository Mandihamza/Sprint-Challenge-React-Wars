import React from "react";
import './Card.css';

function Card (props) {
  return (
      props.data.map(char => {
          return (
              <div className='Card' id={char.name} >
                  <h3>Name: {char.name}</h3>
                  <p>Birth year: {char.birth_year}</p>
                  <p>Height: {char.height}</p>
              </div>
          );
      }))
      
};

export default Card;