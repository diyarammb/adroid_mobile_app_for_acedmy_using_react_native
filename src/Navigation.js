import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import Stdhome from "./Stdhome"
import BottomNav from './BottomNav'
import Addbottom from "./components/Admin/Adbottom"
import Admin from "./components/Admin/Addcourse"

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 



const Stack = createNativeStackNavigator(); 

function App() {

 return (
   <NavigationContainer>
   <Stack.Navigator>
    <Stack.Screen name="Home" component={Home}  options={{headerShown: false}}/>
     <Stack.Screen name="Login" component={Login}  options={{headerShown: false}}/>
     <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} /> 
     <Stack.Screen name="Stdhome" component={Stdhome} options={{headerShown: false}} /> 
     <Stack.Screen name="bottom" component={BottomNav} options={{headerShown: false}} /> 
     <Stack.Screen name="Admin" component={Admin} options={{headerShown: false}} />  
     <Stack.Screen name="adminbottom" component={Addbottom} options={{headerShown: false}} /> 

   </Stack.Navigator>
   </NavigationContainer>
 );
}

export default App;
