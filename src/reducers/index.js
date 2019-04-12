import { combineReducers } from 'redux';
import { infoReducer } from './infoReducer'

export const Reducers = combineReducers({
    infoState: infoReducer
})