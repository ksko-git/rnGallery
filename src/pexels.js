import axios from 'axios'
import { API_KEY } from './constants'

export default axios.create({
    baseURL: `https://api.pexels.com`,
    headers: {
        Authorization: API_KEY
    }
})