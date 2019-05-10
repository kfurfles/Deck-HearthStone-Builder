import React from 'react'

import CharacterFront from './character-front';
import CharacterBack from './character-back';
import { getCardsByClass } from './../../services/Card'
import { isLoading, close } from './../../helpers/swal'

export default class Character extends React.Component{    
    constructor(props){
        super(props)
    }

    get name(){
        return this.props.chr.data.name
    }
    get sideCard(){
        if (this.props.details) {
            return <CharacterBack info={this.props.chr} onClose={this.props.onClose.bind(this)}/>
        } else {
            return <CharacterFront info={this.props.chr} thumb={this.props.chr.thumb} onClick={this.onClickFront.bind(this)}/>
        }
    }
    get computedStyle(){
        let isFade = this.props.show? '': 'isFade'
        let showDetails = this.props.details ? 'isDetails' : ''
        return  `${showDetails} ${isFade} ${this.name}`
    }

    async onClickFront(){
        isLoading()
        const { data } = await getCardsByClass(this.props.chr.data.classType)
        console.log(data) 
        this.props.onClick(this.props.index)
        close()
    }
    colorStyle(){
        return `.${this.name} [hero="${this.name}"]{
            color: ${this.props.chr.data.hability.color};
        }`
    }
    

    render(){
        return( <div className={`character card ${this.computedStyle}`}>
                    <style jsx="true">{this.colorStyle()}</style>
                    {this.sideCard}
                </div>)
    }
}