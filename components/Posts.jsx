import { useEffect } from "react"
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native"

import Feather from "react-native-vector-icons/Feather"
import AntDesign from "react-native-vector-icons/AntDesign"
import Ionic from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons"

import { useDispatch, useSelector } from "react-redux"
import getPosts from "../store/actions/postAction"

export default function Posts() {
    const posts = useSelector((state) => state.postReducer.posts)
    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(getPosts())
    }, [])

    return (
        <View>

            {posts.map(el => {
                return (
                    <View key={el.id} style={{ paddingBottom: 10, borderBottomColor: "gray", borderBottomWidth: 0.1 }} >
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 15 }} >


                            <View style={{ flexDirection: "row", alignItems: "center" }} >
                                <Image source={el.user.profile_picture} style={{ width: 40, height: 40, borderRadius: 100 }} />
                                <View style={{ paddingLeft: 5 }}  >
                                    <Text style={{ fontSize: 15, fontWeight: "bold" }} >
                                        {el.user.username}
                                    </Text>
                                </View>
                            </View>

                            <Feather name="more-vertical" style={{ fontSize: 20 }} />

                        </View>

                        <View style={{ position: "relative", justifyContent: "center", alignItems: "center" }} >
                            <Image source={el.images.low_resolution.url} style={{ width: "100%", height: 400 }} />
                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 12, paddingVertical: 15 }} >
                            <View style={{ flexDirection: "row", alignItems: "center" }} >

                                <TouchableOpacity>
                                    <AntDesign name={el.user_has_liked ? "heart" : "hearto"} style={{ paddingRight: 10, fontSize: 20, color: el.user_has_liked ? "red" : "black" }} ></AntDesign>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Ionic name="ios-chatbubble-outline" style={{ fontSize: 20, paddingRight: 10 }} />
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Feather name="navigation" style={{ fontSize: 20 }} />
                                </TouchableOpacity>
                            </View>
                            <Feather name="bookmark" style={{ fontSize: 20 }} />
                        </View>
                            <View style={{padding:10}}  >
                                <Text>
                                    Liked by {Math.ceil(Math.random() * 5)} People
                                </Text>

                                <Text style={{fontWeight:'400', fontSize:14, paddingVertical:2}} >
                                    {el.caption.text}
                                </Text>

                                <Text style={{opacity:0.4, paddingVertical:2}} >
                                    View all comments
                                </Text>
                                <View  style={{flexDirection:"row", justifyContent:"space-between"}} >
                                    <View style={{flexDirection:"row", alignItems:"center"}} >
                                        <MaterialCommunityIcon name="account-circle"  style={{fontSize:20, marginRight:10}} />
                                        <TextInput placeholder="Add a comment" style={{opacity:0.5}} />
                                    </View>
                                    <View style={{flexDirection:"row", justifyContent:"center"}} >
                                        <Entypo name="emoji-happy"  style={{fontSize:15, color:"lightgreen", marginRight:10}} />
                                        <Entypo name="emoji-neutral"  style={{fontSize:15, color:"pink", marginRight:10}} />
                                        <Entypo name="emoji-sad"  style={{fontSize:15, color:"red"}} />

                                    </View>
                                </View>
                            </View>
                        </View>
                        )
            })}
                    </View>
                )
            }