import React from 'react'
import { Link } from "react-router-dom";


export default function Nav(){
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-2">
            <ul className="navbar-nav bd-navbar-nav flex-row m-auto">
                <li className="nav-item mr-4 ml-4">
                    <Link className="nav-link" to="/search">Search</Link>
                </li>
                <li className="nav-item mr-4 ml-4">
                    <Link className="nav-link" to="/deck">Deck</Link>
                </li>
            </ul>
        </nav>
    )
}