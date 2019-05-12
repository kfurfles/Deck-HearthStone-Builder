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
                <div className="character__img-container mb-3">
                    <img className="character__stats-img" src={bg} />
                </div>
                <div className="character__stats-name mb-4">{data.name}</div>
                <div className="character__stats-lorem mb-3">{data.description}</div>
                <div className="character__stats-spell mb-1">Spell Hero</div>
                <HabilityDescription name={data.name} hability={data.hability}/>
                <div className="character__stats-dekcs mt-1" style={{ alignItems: 'center',display: 'flex',flexFlow: 'row wrap',justifyContent: 'center'}}>
                    <span className="mr-auto" style={{fontSize: '2rem',fontFamily: 'Belwe Bold'}}>
                        Cards: 110
                    </span>
                    <span>
                        <button type="button" className={`${data.name} btn btn-outline-dark`}>See Deck</button>
                    </span>
                </div>
            </div>
        </div>
    )
}