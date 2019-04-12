import  * as actionTypes from './../actions/hearthStone/actionTypes'
import { connect } from 'react-redux'

const initialState = {
    classes: [],
    factions: [],
    locales: [],
    qualities: [],
    races: [],
    standard: [],
    types: [],
    sets: [],
    wild: []

}

export const infoReducer = (state = initialState, action) =>{
    switch (action.type) {
        case actionTypes.INFO_SET_INFO:
        console.log(action.payload)
        return { 
            ...state,
            ...action.payload
        }
    
        default:
            return state
    }
}