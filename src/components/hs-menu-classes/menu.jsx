import React from 'react'
import MagicGrid from "magic-grid"

import { data } from './data'
import './hs-menu-classes.css'
import Character from './character'
import { isNull } from 'util';

export default class MenuClasses extends React.Component {
    state = {
        list: data,
        selected: null,
        auxClass: ''
    }
    constructor(){
        super()
        this.el = React.createRef();
        this.magicGrid = ''
        this.onSelected.bind(this)
    }
    render(){
        const { list, auxClass } =this.state
        
        return (
            <div >
                <div className="text-center">
                    <h1>HearthStone</h1>
                </div>
                <div className={`hs-menu-classes `+ auxClass } ref={this.el}>
                {list.map((chr,i) =>{
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
        }, ()=>{
            this.magicGrid.positionItems();
            this.setState({ auxClass: '' })
        })
        
        window.scrollTo(0, 0);
    }

    onClose(){
        this.setState({ auxClass: 'overlay' })
        this.setState({
            ...this.state,
            selected: null
        })
        this.mountGrid()
    }

    mountGrid(){
        this.setState({ auxClass: 'overlay' })
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
        }, 200);
        setTimeout(() => {
            this.setState({ auxClass: '' })
        }, 600);
        
    }
    componentDidMount() {        
        this.mountGrid()
    }
}