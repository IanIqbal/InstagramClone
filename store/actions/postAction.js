import { GET_POSTS } from "./actionType";
import axios from "axios";

const getpostDone = (payload) => {

    return {
        type:GET_POSTS,
        payload
    }
}

export default function getPosts(){
    return async(dispatch)=>{
        try {
            
            const {data} = await axios({
                url:"https://api.jsonbin.io/v3/b/63bd23fe15ab31599e3290c1",
                method:"get"
            })

            dispatch( getpostDone(data.record.data) )
        } catch (error) {
            console.log(error);
        }
    }
}