import React from 'react'
import HabilityDescription from './../shared/habilityDescription'
import { Link } from "react-router-dom";

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
                    <img className="character__stats-img" src={bg} alt=""/>
                </div>
                <div className="character__stats-name mb-4">{data.name}</div>
                <div className="character__stats-lorem mb-3">{data.description}</div>
                <div className="character__stats-spell mb-1">Spell Hero</div>
                <HabilityDescription name={data.name} hability={data.hability}/>
                <div className="character__stats-dekcs mt-1" style={{ alignItems: 'center',display: 'flex',flexFlow: 'row wrap',justifyContent: 'center'}}>
                    <span className="mr-auto" style={{fontSize: '2rem',fontFamily: 'Belwe Bold',backgroundColor: 'white',borderRadius: '5px',padding: '5px',color: '#666'}}>
                        Cards: {data.totalCards}
                    </span>
                    <span>
                        <Link to={`/deck/${data.classType.toLowerCase()}`} className={`${data.name} btn btn-outline-dark`}>See Deck</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}