import { get } from '../index'

const BASE_URL = 'info'

export async function getInfo(){
    const { data } = await get(`/${BASE_URL}`)
    return data
}