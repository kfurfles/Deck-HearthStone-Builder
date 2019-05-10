const DB_NAME = 'hearthStone_DB';

const getData = () => JSON.parse(localStorage.getItem(DB_NAME)) || {}
const setData = value => localStorage.setItem(DB_NAME, JSON.stringify(value)) 

export function getListByClass($class){
    return getData()[$class] || []
}

export function setListByClass($class,$data){
    const list = getData()
    setData({
        ...list,
        [$class]: $data
    })
}

export function hasClassData($class){
    const list = getData()
    return !!(list && list[$class]) 
} 
