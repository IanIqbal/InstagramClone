import { useDispatch } from "react-redux";
import { db, collection , getDocs, query} from "../../config/firestore";
import { GET_CURRENTUSERS, GET_USERS } from "./actionType";


const getUsers = (payload)=>{
    return {
        type: GET_USERS,
        payload
    }
}

const getCurrentUser = (payload)=>{
    return{
        type:GET_CURRENTUSERS,
        payload
    }
}

export function fetchUsers(){

    return async(dispatch) => {
        try {
            const colRef = collection(db, "Users")
            const {_snapshot} = await getDocs ( colRef)
            // const data = await getDocs ( colRef)

            const data = _snapshot
            // console.log(data.docChanges[0].doc.key.path.segments[6], "<<<document")
            // console.log(data.docChanges[0].doc.data.value.mapValue.fields, "<<<data")

            let usersRaw = data.docChanges
            
            let users = usersRaw.map(el => {
                return {document:el.doc.key.path.segments[6], data:el.doc.data.value.mapValue.fields}
            })
            dispatch(getUsers(users))
            // console.log(docsRef);
        } catch (error) {
            console.log(error)
        }
    }
}

export function currentUser(currentUserRaw){
    return (dispatch) => {
        const currentUser = {email:currentUserRaw.user.email, document:currentUserRaw.user.uid}
        dispatch(getCurrentUser(currentUser))
    }
}
