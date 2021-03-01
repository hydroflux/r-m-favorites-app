import React from 'react'

import Card from './Card'

export default function CharacterList({ characters, add }){

    const displayCharacters = () => characters.map( character => {
        return <Card character={character} key={character.id} clickAction={add}/>
    })

    return (
        <ul className="character-list">
            {displayCharacters()}
        </ul>
    )
}