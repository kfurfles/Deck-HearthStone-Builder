import React from 'react'

import CharacterFront from './character-front';
import CharacterBack from './character-back';
import { getCardsByClass } from './../../services/Card'
import { isLoading, close } from './../../helpers/swal'

export default class Character extends React.Component{    
    constructor(props){
        super(props)
        this.state = {
            cardList: []
        }
    }

    get name(){
        return this.props.chr.data.name
    }
    get cardData(){
        return {
            ...this.props.chr,
            ...this.props.chr.data = {
                ...this.props.chr.data,
                totalCards: this.state.cardList.length
            } 
        }
    }
    get sideCard(){
        if (this.props.details) {
            return <CharacterBack info={this.cardData} onClose={this.props.onClose.bind(this)}/>
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
        this.setState({
            ...this.state,
            cardList: data
        })
        this.props.onClick(this.props.index)
        close()
    }
    colorStyle(){
        const { hability : { color }, name } = this.props.chr.data
        return `
            .${this.name} [hero="${this.name}"]{
                color: ${this.props.chr.data.hability.color};
            }
            .${name} .btn{
                color: ${color};
                border-color: ${color};
            }
            .${name} .btn:hover{
                background: ${color};
                color: #fff;
            }
            .${name} .btn-outline-dark:not(:disabled):not(.disabled):active{
                color: #fff;
                background-color: ${color};
                border-color: ${color};
            }
            .${name} .btn-outline-dark:not(:disabled):not(.disabled):active:focus{
                box-shadow: 0 0 0 0.2rem ${this.hexToRgbA(color,'.5')};
            }
        `; 
    }
    
    hexToRgbA(hex,alpha){
        var c;
        if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
            c= hex.substring(1).split('');
            if(c.length=== 3){
                c= [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c= '0x'+c.join('');
            return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+','+ alpha +')';
        }
        throw new Error('Bad Hex');
    }

    render(){
        return( <div className={`character card ${this.computedStyle}`}>
                    <style jsx="true">{this.colorStyle()}</style>
                    {this.sideCard}
                </div>)
    }
}