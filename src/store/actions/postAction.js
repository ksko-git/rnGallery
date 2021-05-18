import { DATA } from '../../DATA'
import { LOAD_POSTS } from '../types'


export const loadPosts = () => {
    return async dispatch => {
        dispatch({
            type: LOAD_POSTS,
            payload: DATA
        })
    }  
}