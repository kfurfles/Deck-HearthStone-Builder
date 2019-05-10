import React from 'react'
import HabilityDescription from './../shared/habilityDescription'

export default function CharacterBackSide({ info: { thumb, bg, data }, onClose }){
    return(
        <div className={`character__stats stats ${data.hability.variation}`} 
                style={{
                    boxShadow:` 0px 0px 10px 5px ${data.hability.color}`,
                    background: `url(${bg})`
                }}
            >
            <button className="close" onClick={onClose}>×</button>
            <div className="character__stats-info p-4" >
                <div className="character__stats-name mb-4">{data.name}</div>
                <div className="character__stats-lorem mb-3">{data.description}</div>
                <div className="character__stats-spell mb-1">Spell Hero</div>
                <HabilityDescription name={data.name} hability={data.hability}/>
            </div>
        </div>
    )
}