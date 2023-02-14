import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './components/Landing';
import Register from './components/Register';
import Login from './components/Login';
import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { firebaseAuth, onAuthStateChanged } from './config/firebaseauth';
import store from './store';
import { Provider } from 'react-redux';
import Main from './components/Main';
import Save from './components/Save';
import Stories from './components/Stories';
import Content from './components/Content';


const Stack = createStackNavigator();
export default function App() {
  const [loaded, setLoaded] = useState("false");
  const [loggedIn, setLoggedIn] = useState("false");

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {

      if (!user) {
        setLoaded(true);
        setLoggedIn(false)
      } else {
        setLoaded(true);
        setLoggedIn(true)
      }
    })
  }, [])
  // console.log(loaded);
  // console.log(loggedIn)

  if (!loaded) {
    console.log("test")
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text>
          Loading
        </Text>
      </View>
    )
  }

  if (!loggedIn) {
    return (
      <Provider store={store}>

        <NavigationContainer>
          <Stack.Navigator initialRouteName='Landing'>
            <Stack.Screen name='Landing' component={Landing} options={{ headerShown: false }} ></Stack.Screen>
            <Stack.Screen name='Register' component={Register} ></Stack.Screen>
            <Stack.Screen name='Login' component={Login} ></Stack.Screen>


          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }


  return (
    <Provider store={store} >

      <NavigationContainer>
        <Stack.Navigator initialRouteName='Main'>
          <Stack.Screen name='Main' component={Main} options={{headerShown:false}}></Stack.Screen>
          <Stack.Screen name='Stories' component={Stories}  ></Stack.Screen>
          <Stack.Screen name='Content' component={Content} options={{headerShown:false}} ></Stack.Screen>

          
          <Stack.Screen name="Save" component={Save}></Stack.Screen> 
          
        </Stack.Navigator>

      </NavigationContainer>
    </Provider>
  )
}


