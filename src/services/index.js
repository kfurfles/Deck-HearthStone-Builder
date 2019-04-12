import { Instance } from './config'
export const get = (query,locale = false) => {
    return locale ? Instance.get(`${query}?locale=${locale}`) : Instance.get(`${query}`) 
}
