import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import AppRouter from './container/appRouter'
import Nav from './components/nav.jsx'
import { getInfo } from './services/Info';
import { bindActionCreators } from 'redux';
import { setInfo } from './actions/hearthStone/info'
import { connect } from 'react-redux';

class App extends Component {
    async componentWillMount(){
        // this.props.setInfo(await getInfo())
    }

    render() {
        return (
            <div>
                <AppRouter>
                    <Nav/>
                </AppRouter>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ setInfo }, dispatch)
export default connect(null, mapDispatchToProps)(App)

