
import React from "react";
import Stdhome from "./Stdhome";
import course from './Course'
import Admissioncourse from "./Admissioncourse";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function BottomNav(){
  return (
    <Tab.Navigator>
      <Tab.Screen name="students" component={Stdhome}  options={{headerShown: false}}/>
      <Tab.Screen name="course" component={course} options={{headerShown: false}} />
      <Tab.Screen name="Apply" component={Admissioncourse} options={{headerShown: false}} />
    </Tab.Navigator>
  );
}