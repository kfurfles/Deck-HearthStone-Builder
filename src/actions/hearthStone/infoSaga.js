import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getInfo } from '../../services/Info'
import { INFO_SET_INFO } from './actionTypes'

function* fetchInfo(action){
    try {
        const info = yield call(getInfo, null);
        yield put({ type: INFO_SET_INFO })
    } catch (error) {
        
    }
}

function* dispacthFetchInfo(){
    yield takeEvery()
}