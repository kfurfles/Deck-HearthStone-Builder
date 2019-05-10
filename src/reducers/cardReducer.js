import * as ActionTypes from './../actions/hearthStone/actionTypes'

const initialState = {
    cards: []
}

export const cardReducer = (state = initialState, action) =>{
    switch (action) {
        case ActionTypes.CARDS_SET_LIST:
            return {
                ...state,
                cards: action.payload
            }
        
        default:
            return state
    }
}