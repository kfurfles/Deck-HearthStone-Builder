import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getCardsByClass } from '../../services/Card'
import Card from '../../components/shared/card'
import BackIcon from '../../assets/arrow'
import './styles.css'

class classDeck extends Component{
    state = {
        cards: []
    }

    render(){
        return(
            <div className="container">
                <div className="d-flex align-items-center header">
                    <span onClick={this.props.history.goBack}>
                        <div className="icon-back" dangerouslySetInnerHTML={{__html: BackIcon}}></div>
                    </span>
                    <h1>Lista de Cards</h1>
                </div>
                {this.renderCards}
                 <div className="row">
                    {this.state.cards.map((card,i) => {
                        return <Card data={card} key={i}/>
                    })}
                </div>
            </div>
        )
    }

    async getCards(){
        const { data } = await getCardsByClass(this.props.match.params.id)
        this.setState({
            ...this.state,
            cards: data.slice(0,10)
        })
    
    }

    componentWillMount(){
        this.getCards()
    }
}

const mapStateToProps = state => ({
    classTypes: state.infoState.classes
})

export default connect(mapStateToProps)(classDeck)
