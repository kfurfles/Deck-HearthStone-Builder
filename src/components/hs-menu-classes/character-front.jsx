import React from 'react'
import HabilityDescription from './../shared/habilityDescription'

export default function Character({ thumb, info: { data: { name, hability, description } } , onClick }){
    return(
        <div className="character__wrapper">
            <div className="character__image">
                <img src={thumb} alt={`Class hero ${name}`} style={{width:'300px'}}/>
            </div>
            <div className="character__info">
                <span>{ name }</span>
                <HabilityDescription name={name} hability={hability}/>
                <div className="character__description mt-2">{description.substr(0,100) + '...'}</div>
                <button type="button" onClick={(e) => onClick() } className="btn btn-outline-dark mt-4">See More</button>
            </div>
        </div>
    )
}