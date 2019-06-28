import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import AppRouter from './container/appRouter'
import { getInfo } from './services/Info';
import { bindActionCreators } from 'redux';
import { setInfo } from './actions/hearthStone/info'
import { connect } from 'react-redux';

class App extends Component {
    constructor(){
        super() 
        this.state = {
            ready: false
        }
    }
    async componentWillMount(){
        this.switchReady(false)
        this.props.setInfo(await getInfo())
        this.switchReady()
    }

    readyData(){
        if (this.readyData) {
            return (
                <AppRouter>
                </AppRouter>
            )
        } else {
            return 'Loading ...'
        }
    }

    switchReady(status){
        this.setState({
            ...this.state,
            readyData: status || this.state.ready
        })
    }
    render() {
        return (
            <div className="pt-4 pb-4">
                {this.readyData()}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ setInfo }, dispatch)
export default connect(null, mapDispatchToProps)(App)

