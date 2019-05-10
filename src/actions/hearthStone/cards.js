import * as actionsTypes from './actionTypes'

export const setCards = value =>({
    type: actionsTypes.CARDS_SET_LIST,
    payload: value
})