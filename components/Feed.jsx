import { Text, View, StatusBar, ScrollView } from "react-native"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Feather from "react-native-vector-icons/Feather"
import Stories from "./Stories"
import Posts from "./Posts"

export default function Feed() {

    return (
        <View style={{ backgroundColor: "white", height: "100%" }}>
            <StatusBar backgroundColor="white" barStyle="dark-content" animated={true} />
            <View style={{
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 15
            }} >

                <FontAwesome name="plus-square-o" style={{ fontSize: 24 }} />
                <Text style={{  fontSize: 25, fontWeight: "500" }} >
                    YoRipe
                </Text>

                <Feather name="navigation" style={{ fontSize: 25 }} />
            </View>
            <ScrollView>
                <Stories />
                <Posts/>
            </ScrollView>

        </View>
    )
}