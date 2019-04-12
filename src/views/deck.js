import React from 'react'
import Table from './../components/table'

export default class Deck extends React.Component {
    render() {
        return(
        <div className="row mt-3">
            <div className="col-md-6 offset-md-3">
                <Table/>
            </div>
        </div>
        )
    }

    componentDidMount(){}
}