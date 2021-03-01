import React from 'react'

export default function Card({ character, clickAction }){

  const handleClick = (event) => {
    clickAction(character)
  }

    return (
        <li onClick={handleClick}>
          <h2>{character.name}</h2>
          <img
            src={character.image}
            alt={character.name}
          />
        </li>
    )
}