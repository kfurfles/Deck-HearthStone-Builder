import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { InputEl } from './formElements'

class Form extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        let loader = '';
        if(this.props.busy){
            loader = <div className="ml-2 spinner-border text-light  form__button--loader" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
        }
        return(
        <form>
            <div className="row">
                <InputEl busy={this.props.busy} name={'name'} placeholder={ 'Digite seu Nome' } />
            </div>
            <div className="row">
                <InputEl busy={this.props.busy} name={'description'} placeholder={ 'Digite a descrição' } />
            </div>
            <div className="d-flex ml-auto mr-auto align-items-center justify-content-center">
                <button type="submit" className="btn btn-primary d-flex align-items-center">
                Submit
                {loader}
                </button>
            </div>       
        </form>

    )}

    componentDidMount(){}
}

export default Form