import * as actionsTypes from './actionTypes'

export const setInfo = value => ({
    type: actionsTypes.INFO_SET_INFO,
    payload: value
})