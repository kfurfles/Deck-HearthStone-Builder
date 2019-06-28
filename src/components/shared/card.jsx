import React from 'react'
// import LazyImage from './lazyImg'
import './card.css'

export default class Card extends React.Component{
    render(){
        const { data: { img, name, rarity, type } } = this.props
        return (
            <div className="col col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card-container">
                    <img className="card-img-top" src={img} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{ name }</h5>
                        <p className="card-text">
                            <span className="badge badge-primary mr-2">rarity: {rarity}</span>
                            <span className="badge badge-info">type: {type}</span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}