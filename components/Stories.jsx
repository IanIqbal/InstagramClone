import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native"
import Entypo from "react-native-vector-icons/Entypo"
import { useNavigation } from "@react-navigation/native"

import content1 from "../assets/storiesprofile/content1.jpg"
import content2 from "../assets/storiesprofile/content2.jpg"
import content3 from "../assets/storiesprofile/content3.jpg"
import content4 from "../assets/storiesprofile/content4.jpg"
import content5 from "../assets/storiesprofile/content5.jpg"

export default function Stories(){
    const navigation = useNavigation()
    const stories = [
        {   
            "id" : 1,
            "content": content1,
            "user": {
                "username": "beingsalmankhan",
                "profile_picture": "https://igcdn-photos-f-a.akamaihd.net/hphotos-ak-xta1/t51.2885-19/10810066_708040225931789_33645907_a.jpg",
                "id": "1547627005",
                "full_name": "Salman Khan"
                }
        },
        {
            "id" : 2,
            "content":content2,
            "user": {
                "username": "carinstagram",
                "profile_picture": "https://instagramimages-a.akamaihd.net/profiles/profile_23275345_75sq_1381623938.jpg",
                "id": "23275345",
                "full_name": "Kik:SoLeimanRT"
                }
        },
        {
            "id" : 3,
            "content":content3,
            "user": {
                "username": "linkinpark",
                "profile_picture": "https://igcdn-photos-f-a.akamaihd.net/hphotos-ak-xfp1/t51.2885-19/11008267_1563640687237549_939346370_a.jpg",
                "id": "4890736",
                "full_name": "LINKIN PARK"
                }
        },
        {
            "id" : 4,
            "content":content4,
            "user": {
                "username": "sert_mehmet",
                "profile_picture": "https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/t51.2885-19/11032891_610949965673163_728033182_a.jpg",
                "id": "7563629",
                "full_name": "Mehmet Se®t"
                }
        },
        {
            "id" : 5,
            "content":content5,
            "user": {
                "username": "jiffpom",
                "profile_picture": "https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-19/10534848_1445438965724038_834552885_a.jpg",
                "id": "194146115",
                "full_name": "jiff"
                }
        }
    ]

    return (

    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingVertical:20}} >
    {
        stories.map((el) => {
            return (
                <TouchableOpacity key={el.id} onPress={() => {navigation.navigate("Content", {name:el.user.username, content:el.content, profilePicture:el.user.profile_picture})} } >

                <View style={{flexDirection:"column", paddingHorizontal:8, position:"relative"}} >

                  

                   <View style={{width:68, height:68, backgroundColor:"white", borderWidth:1.8, borderRadius:100, borderColor:"#c13584", justifyContent:"center", alignItems:"center"}} >
                    <Image source={el.user.profile_picture} style={{resizeMode:"cover", width:"92%", height:"92%", borderRadius:100, backgroundColor:"orange"}} />
                   </View>

                   <Text style={{textAlign:"center", fontSize:10}} >
                        {el.user.username}
                   </Text>

                </View>
        
                </TouchableOpacity>
            )
        })
    }
       
    </ScrollView>
        
    )
}