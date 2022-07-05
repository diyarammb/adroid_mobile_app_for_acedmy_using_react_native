
import React from "react";  
import Addcourse from "./Addcourse";
import Viewcourse from './Viewcourse'
import Admission from "./Admission"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function BottomNav(){
  return (
    <Tab.Navigator>
      <Tab.Screen name="Addcourse" component={Addcourse}  options={{headerShown: false}}/> 
      <Tab.Screen name="viewcourse" component={Viewcourse}  options={{headerShown: false}}/> 
      <Tab.Screen name="admissions" component={Admission}  options={{headerShown: false}}/> 
      
    </Tab.Navigator>
  );
}