import { useState } from "react";
import { Button, View, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { firebaseAuth, signInWithEmailAndPassword, } from "../config/firebaseauth";
import { currentUser } from "../store/actions/userAction";



export default function Login(props){
    const dispatch = useDispatch()
    
    const [input, setInput] = useState({ email:"", password:""})
    const signUp = async () => {
        try {
            
        //    const result = await firebaseAuth().createUserWithEmailAndPassword(email, password);
            const result = await signInWithEmailAndPassword(firebaseAuth, input.email, input.password)
            dispatch(currentUser(result))
            // console.log(result)
        } catch (error) {
            console.log(error)
        }
    }


    console.log(input)
    return(
        <View>
            <TextInput  placeholder="email" onChangeText={(email) => setInput({...input, email})} ></TextInput>
            <TextInput  placeholder="password" onChangeText={(password) => setInput({...input, password})} ></TextInput>

            <Button  title="Sign in" onPress={() => signUp()} />
        </View>
    )
}