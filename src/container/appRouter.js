import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Search from '../views/search'
import Deck from '../views/deck'

export default function AppRouter (props) {
    return(
    <Router>
        {props.children}
        <div className="container">
            <Route path="/" exact component={Search}></Route>
            <Route path="/search/" component={Search}></Route>
            <Route path="/list/" component={Deck}></Route>
        </div>
    </Router>
    )
}

