import React from 'react'

export default function HabilityDescription({ name, hability }){
    return (
    <div className="character__heroPower">
        <span className="heroPower__name" hero={name}>{hability.heroPower}: </span>
        <span>{hability.description}</span>
    </div>
    )
}