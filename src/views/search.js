import React, { Component } from 'react'

import Form from './../components/form.jsx'

export default class Search extends Component {
    state = {
        busy: true,
        form: {}
    }
    render () {
        return(
        <div className="row"> 
            <div className="col-md-6 offset-md-3">
                <Form busy={this.state.busy} />
            </div>
        </div>
        )
    }
}