const DB_NAME = 'hearthStone_DB';

const getData = () => JSON.parse(localStorage.getItem(DB_NAME)) || {}
const setData = value => localStorage.setItem(DB_NAME, JSON.stringify(value)) 
const $className = $class => $class.toLowerCase()
export function getListByClass($class){
    return getData()[$className($class)] || []
}

export function setListByClass($class,$data){
    const list = getData()
    setData({
        ...list,
        [$className($class)]: $data
    })
}

export function hasClassData($class){
    const list = getData()
    return !!(list && list[$className($class)]) 
} 
