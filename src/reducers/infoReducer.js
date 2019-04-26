import  * as actionTypes from './../actions/hearthStone/actionTypes'

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
        return { 
            ...state,
            ...action.payload
        }
    
        default:
            return state
    }
}