import React from 'react'

import { data } from './data'
import './hs-menu-classes.css'
import Character from './character'

export default class MenuClasses extends React.Component {
    constructor(){
        super()
        this.state = {
            list: data
        }
    }
    render(){
        return (
            <div className="hs-menu-classes card-columns">
                {this.state.list.map((chr,i) =>{
                    return <Character description={chr.data.description} imgPath={chr.full} hability={chr.data.hability} name={chr.data.name} key={i}/>
                })}
            </div>
        )
    }
}