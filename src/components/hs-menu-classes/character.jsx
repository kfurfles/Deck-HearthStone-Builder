import React from 'react'

function customStyle(name, { color, text }){
    return `
        .${name}{
            color: ${color};
        }
        .${name} .btn{
            color: ${color};
            border-color: ${color};
        }
        .${name} .btn:hover{
            background: ${color};
            color: ${text};
        }`;
}
export default function Character({ imgPath, name, hability, description }){
    return(
        <div>
            <style scoped jsx="true">{customStyle(name,hability) }</style>
            <div className={`character card ${name}`}>
                <div className="character__wrapper">
                    <div className="character__image">
                        <img src={imgPath} alt={`Class hero ${name}`}/>
                    </div>
                    <div className="character__info">
                        <span>{ name }</span>
                        <div className="character__heroPower">
                            <span className="heroPower__name">{hability.heroPower}: </span>
                            <span>{hability.description}</span>
                        </div>
                        <div className="character__description mt-2">{description.substr(0,100) + '...'}</div>
                        <button type="button" className="btn btn-outline-dark mt-4">See More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}