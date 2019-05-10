import React from 'react'
import MagicGrid from "magic-grid"

import { data } from './data'
import './hs-menu-classes.css'
import Character from './character'
import { isNull } from 'util';

export default class MenuClasses extends React.Component {
    constructor(){
        super()
        this.state = {
            list: data,
            selected: null
        }
        this.el = React.createRef();
        this.magicGrid = ''
        this.onSelected.bind(this)
    }
    render(){
        return (
            <div className="hs-menu-classes" ref={this.el}>
                {this.state.list.map((chr,i) =>{
                    return <Character
                                key={i}
                                chr={chr}
                                index={i}
                                details={this.showDetail(i)}
                                show={this.showCard(i)}
                                onClick={this.onSelected.bind(this)} 
                                onClose={this.onClose.bind(this)}
                            />
                })}
            </div>
        )
    }

    showDetail(index){
        if(!isNull(this.state.selected)){
            return this.state.selected === index
        } else {
            return false
        }
    }
    showCard(index){
        return isNull(this.state.selected) ? true : this.state.selected === index
    }
    onSelected(heroId){
        this.setState({
            ...this.state,
            selected: heroId
        })
        setTimeout(() => {
            this.magicGrid.positionItems(); 
        }, 100);
    }

    onClose(){
        this.setState({
            ...this.state,
            selected: null
        })
        this.gridUpdate();
    }

    mountGrid(){
        const { current } = this.el
        this.magicGrid = new MagicGrid({
            container: current,
            static: true,
            animate: true,
            useMin: '100',
            gutter: 10,
            useTransform: true,
            items: this.state.list.length,
        });
        this.gridUpdate();
    }
    gridUpdate(){
        setTimeout(() => {
            this.magicGrid.listen();
            this.magicGrid.positionItems();
        }, 100);
    }
    componentDidMount() {
        this.mountGrid()
    }
    
}