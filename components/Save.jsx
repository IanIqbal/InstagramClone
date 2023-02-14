import { useState } from "react"
import { View, TextInput, Image, Button } from "react-native"
import storage from "../config/firebasestorage"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { useSelector } from "react-redux"
import { db, collection, addDoc, doc, serverTimestamp, setDoc } from "../config/firestore"

export default function Save({ route, navigation }) {
    const { image } = route.params
    const [caption, setCaption] = useState("")
    const currentUser = useSelector((state) => state.userReducer.currentUser)

    const uploadImage = async () => {
        try {

            const response = await fetch(image)
            const blobFile = response.blob()

            const storageRef = ref(storage, `posts/${currentUser.document}/${Math.random().toString(36)}`)

            const uploadTask = uploadBytesResumable(storageRef, blobFile)

            const taskOnProgres = (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + (snapshot.bytesTransferred / snapshot.totalBytes) * 100 + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            }

            const taskError = (error) => {
                throw { error }
            }

            const taskCompleted = () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);

                    savePost(downloadURL)
                });
            }

            uploadTask.on("state_changed", taskOnProgres, taskError, taskCompleted)
        } catch (error) {
            console.log(error)
        }


        const savePost = async (downloadUrl) => {
            try {

                // const posts = collection(db, "Posts")

                // await addDoc(posts, currentUser.document)

                // const userPost = collection(db, "UserPosts")

                // const docRef = collection(db, `Users/${currentUser.document}/UserPosts`)
                // await addDoc(docRef, { 
                //     downloadUrl,
                //     caption,
                //     timeStamp:serverTimestamp()
                // }  )

                // db.collection("Posts").doc(currentUser.document).collection("UserPosts").set({
                //     downloadUrl,
                //     caption,
                //     timeStamp: serverTimestamp()
                // })
                //     .then(() => navigation.popToTop())


                // const postRef = doc(db, "Posts", currentUser.document)

                // await setDoc(postRef, { 
                //     downloadUrl,
                //     caption,
                //     timeStamp:serverTimestamp()
                // })

                // await setDoc()

                const docRef = doc(db, "Posts", currentUser.document);
                const colRef = collection(docRef, "UserPosts")
                addDoc(colRef, {
                    downloadUrl,
                    caption,
                    timeStamp: serverTimestamp()
                });

                navigation.navigate("Feed")
            } catch (error) {
                console.log(error)
            }

        }

    }
    return (

        <View>
            <Image source={{ uri: image }} ></Image>
            <TextInput placeholder="Write caption" onChangeText={(text) => setCaption(text)} ></TextInput>

            <Button title="Save" onPress={() => uploadImage()} ></Button>
        </View>
    )
}