import { useState } from "react";
import { Button, View, TextInput } from "react-native";
import { firebaseAuth, createUserWithEmailAndPassword } from "../config/firebaseauth";
import {db, collection, addDoc} from "../config/firestore";


export default function Register(props){
    const [input, setInput] = useState({name:"", email:"", password:""})
    const signUp = async () => {
        try {
            
            const result = await createUserWithEmailAndPassword(firebaseAuth, input.email, input.password)
            // console.log(result)
            // console.log(firebaseAuth)
            const docRef = await addDoc(collection(db,"Users"), {email: input.email, password: input.password})
        } catch (error) {
            console.log(error)
        }
    }


    console.log(input)
    return(
        <View>
            <TextInput placeholder="name" onChangeText={(name) => setInput({...input, name})} ></TextInput>
            <TextInput placeholder="email" onChangeText={(email) => setInput({...input, email})} ></TextInput>
            <TextInput placeholder="password" onChangeText={(password) => setInput({...input, password})} ></TextInput>

            <Button  title="Signup" onPress={() => signUp()} />
        </View>
    )
}