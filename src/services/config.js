import axios from 'axios'
const { key, host } = require('./key.json')

const Instance = axios.create({
    baseURL: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/'
});

Instance.defaults.headers.get['X-RapidAPI-Key'] = key
Instance.defaults.headers.get['X-RapidAPI-Host'] = host

export { Instance };