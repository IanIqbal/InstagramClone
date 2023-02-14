import { GET_POSTS } from "../actions/actionType"

const initialState={posts:[]}
export default function postReducer(state=initialState, action){

    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
               posts: action.payload
            }
    
        default:
        return state
    }

}