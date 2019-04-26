import React, { Component } from 'react'

import MenuClasses from './../components/hs-menu-classes/menu.jsx'

export default class Search extends Component {
    state = {
        busy: !true,
        form: {}
    }
    render () {
        return(
        <div className="row"> 
            <div className="col">
                <MenuClasses/>
            </div>
        </div>
        )
    }
}