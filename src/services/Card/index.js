import { get } from '../index'
import { getListByClass, setListByClass, hasClassData } from './../db'

const BASE_URL = 'cards'

export function getCardByName(name){
    return get(`/${BASE_URL}/${name}`)
}

export async function getCardsByClass(className){
    if(hasClassData(className)){
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve({
                    data: getListByClass(className)
                })      
            }, 500);
        })
    } else {
        const onlyValidServer = (card) => {
            if (card.img) {
                return !/wow\./.test(card.img)
            } else {
                return false
            }
        }
        let resp = await get(`/${BASE_URL}/classes/${className}`)
        resp = resp.data.filter(onlyValidServer)
        setListByClass(className, resp)
        return {
            ...resp,
            data: resp
        }
    }
}