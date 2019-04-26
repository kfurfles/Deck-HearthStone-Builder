import React, { Component } from 'react';
import { InputEl, ButtonEl, SelectEl } from './formElements'

class Form extends Component {
    constructor(){
        super()
        this.state = {
            options:[
                { text: '1foo', value: '1zoo '},
                { text: '2foo', value: '2zoo '},
                { text: '3foo', value: '3zoo '}
            ],
            form: {
                name: 'Teste',
                type: null
            }
        } 
    }
    
    handleInput(field, value){
        console.log(field,value)
    }
    render() {
        let loader = '';
        const form = this.state.form
        if(this.props.busy){
            loader = <div className="ml-2 spinner-border text-light  form__button--loader" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
        }
        return(
        <form>
            <div className="row">
                <div className="col">
                    <InputEl value={form.name} onInput={this.handleInput.bind()} busy={this.props.busy} name={'name'} placeholder={ 'Digite seu Nome' } />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <SelectEl busy={this.props.busy} options={this.state.options}></SelectEl>
                </div>
            </div>
            <div className="d-flex ml-auto mr-auto align-items-center justify-content-center">
                <div className="col">
                    <ButtonEl>
                    Submit
                    {loader}
                    </ButtonEl>
                </div>
            </div>       
        </form>

    )}

    componentDidMount(){}
}

export default Form