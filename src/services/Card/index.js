import { get } from '../index'

const BASE_URL = 'cards'

function getCardByName(name){
    return get(`/${BASE_URL}/${name}`)
}