import { GET_USERS,GET_CURRENTUSERS } from "../actions/actionType";


const initialState = {users:[], currentUser:{}};

export default function userReducer(state = initialState, action){

    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case GET_CURRENTUSERS:
            return {

                ...state,
                currentUser:action.payload
            }
            
        default:
            return state;
    }
}