import { LOAD_POSTS } from "../types"

const initState = {
    allPosts: []
}

export const postReducer = (state = initState, action) => {
    switch (action.type) {
        case LOAD_POSTS:
            return {
                ...state,
                allPosts: action.payload
            }
        default:
            return state
    }
}