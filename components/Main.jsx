import { useEffect, useRef } from "react"
import { Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../store/actions/userAction"
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"

import Search from "./Search"
import Reels from "./Reels"
import Feed from "./Feed"
import Add from "./Add"
import Activity from "./Activity"
import Profile from "./Profile"

import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons"

// const Tab = createBottomTabNavigator()
const Tab = createMaterialBottomTabNavigator()
export default function Main() {
    const ref = useRef()
    const dispatch = useDispatch()
    const users = useSelector((state) => state.userReducer.users)
    const currentUser = useSelector((state) => state.userReducer.currentUser)
    useEffect(() => {

        dispatch(fetchUsers())
    }, [])

    // console.log(users)
    return (

        <Tab.Navigator initialRouteName="Feed" labeled={false} barStyle={{ backgroundColor: "orange" }} >

            <Tab.Screen name="Feed" component={Feed} options={{
                tabBarIcon: ({ color, size }) => (<MaterialCommunityIcon name="home" color={color} size={26} />)
            }} ></Tab.Screen>

            <Tab.Screen name="Search" component={Search} options={{
                tabBarIcon: ({ color, size }) => (<MaterialCommunityIcon name="magnify" color={color} size={26} />)
            }}></Tab.Screen>

            <Tab.Screen name="Reels" component={Reels} options={{
                tabBarIcon: ({color, size}) => (<MaterialCommunityIcon name="play-circle-outline" color={color} size={26} /> )
            }} ></Tab.Screen>

            <Tab.Screen name="Add" props={ref} component={Add} options={{
                tabBarIcon: ({ color, size }) => (<MaterialCommunityIcon name="plus-box" color={color} size={26} />)
            }} ></Tab.Screen>

            <Tab.Screen name="Activity" component={Activity} options={{
                tabBarIcon: ({ color, icon }) => (<MaterialCommunityIcon name="account-group" color={color} size={26} />)
            }} ></Tab.Screen>

            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({ color, size }) => (<MaterialCommunityIcon name="account-circle" color={color} size={26} />)
            }} ></Tab.Screen>

        </Tab.Navigator>

    )
}