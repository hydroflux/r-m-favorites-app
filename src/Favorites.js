import React from 'react'
import Card from './Card'

export default function Favorites({ favorites, remove }){

    const displayFavorites = () => favorites.map( favorite => {
        return <Card character={favorite} key={favorite.id} clickAction={remove}/>
    })

    return (
        <ul className="favorites-list">
            {displayFavorites()}
        </ul>
    )
}