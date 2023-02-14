
import { View, StatusBar, TextInput, Text, Image, Touchable, Animated } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

import Ionic from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import { useEffect, useState } from "react"



export default function Content({ route, navigation }) {
    const { name } = route.params
    const { content } = route.params
    const { profilePicture } = route.params

    const [progress, setProgress] = useState( new Animated.Value(0))
    const progressAnimation = progress.interpolate({inputRange:[0,5], outputRange:["0%", "100%"] })

    useEffect(()=> {
        let countDown = setTimeout(() => {
            navigation.goBack()
        }, 10000);

        Animated.timing(progress, {
            toValue:5,
            duration:10000,
            useNativeDriver:false
        }).start()

        return () => clearTimeout(timer)
    }, [])

    return (
        <View style={{ backgroundColor: "black", height: "100%", position: "relative", alignItems: "center", justifyContent: "center" }}>
            <StatusBar style={{ backgroundColor: "black" }} barStyle="light-content" />

            <View style={{ height: 3, width: "95%", borderWidth: 1, backgroundColor: "gray", position: "absolute", top: 18 }} >
                <Animated.View style={{
                    height: "100%",
                    width: progressAnimation,
                    backgroundColor: "white"
                }}>
                </Animated.View>
            </View>

            <View style={{ padding: 15, flexDirection: "row", alignItems: "center", position: "absolute", top: 12, left: 0, width: "90%" }} >
                <View style={{ borderRadius: 100, width: 30, height: 30, justifyContent: "center", alignItems: "center" }} >
                    <Image source={profilePicture} style={{ backgroundColor: "orange", borderRadius: 100, resizeMode: "cover", width: "92%", height: "92%" }} />
                </View>

                <View style={{ justifyContent: "space-between", flexDirection: "row", width: "100%" }} >
                    <Text style={{ color: "white", fontSize: 15, paddingLeft:10 }} >
                        {name}
                    </Text>

                    <TouchableOpacity onPress={() => navigation.goBack() } >
                        <Ionic name="close" style={{ fontSize: 20, color: "white", opacity: 0.6 }} />
                    </TouchableOpacity>
                </View>
            </View>
            <Image style={{position:"absolute", width:"100%", height:600}} source={content} ></Image>

            <View style={{position:"absolute", bottom:0, left:0, flexDirection:"row", justifyContent:"space-around", alignItems:"center", marginVertical:10, width:"100%"}} >

                <TextInput placeholder="Send message" placeholderTextColor="white" style={{borderColor:"white", borderRadius:25, width:"85%", height:50, paddingLeft:20, borderWidth:1, fontSize:20, color:"white"}} ></TextInput>
                <Feather name="navigation" style={{fontSize:30, color:"white"}} />
            </View>
        </View>
    )
}