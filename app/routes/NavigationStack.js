import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';



import Splash from '../screens/onboarding/Splash';
import LoginorSignUp from '../screens/onboarding/LoginorSignUp';
import Login from '../screens/onboarding/login/Login';
import Register from '../screens/onboarding/register/Register';

import Home from '../screens/home/Home';
import ImageCapture from '../screens/imagecapture/ImageCapture';
import AugmentedReality from '../screens/augmentedreality/AugmentedReality';
import Chat from '../screens/chat/Chat';
import AboutUs from '../screens/aboutus/AboutUs';
import ContactUs from '../screens/contactus/ContactUs';

import CustomDrawer from '../components/CustomDrawer';

import Ionicons from 'react-native-vector-icons/Ionicons'



const onboardingScreens = {
  splash: {screen: Splash},
  loginorsignup: {screen: LoginorSignUp},
  login: {screen: Login},
  register: {screen: Register},

};

const signInScreens = {
  Home: {screen: Home,iconName:'home-outline'},
  Math_Scanner: {screen:ImageCapture,iconName:'camera-reverse-outline'},
  AR_Math_Solver: {screen:AugmentedReality,iconName:'ios-videocam-outline'},
  Algebraic_Assistant: {screen: Chat,iconName:'chatbox-ellipses-outline'},
  AboutUs: {screen: AboutUs,iconName:'information-circle-outline'},
  ContactUs: {screen: ContactUs,iconName:'ios-call-outline'},
};


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export const MainStack = () => {
  let screens = [];
  for (let key in signInScreens) {
    if (signInScreens.hasOwnProperty(key)) {
      screens.push(
        <Drawer.Screen
          key={key}
          name={key}
          component={signInScreens[key].screen}
          options={{
            drawerIcon: ({color})=>(
              <Ionicons name={signInScreens[key].iconName} size={22} color={color}/>
            )
          }}
        />,
      );
    }
  }
  return (
    <Drawer.Navigator

      screenOptions={{
        headerShown: false,
      }} 
      drawerContent={props=><CustomDrawer {...props}/>}
      >
      {screens}
    </Drawer.Navigator>
  );
};



export const Onboarding = () => {
  let screens = [];
  for (let key in onboardingScreens) {
    if (onboardingScreens.hasOwnProperty(key)) {
      screens.push(
        <Stack.Screen
          key={key}
          name={key}
          component={onboardingScreens[key].screen}
        />,
      );
    }
  }
  return (
    <Stack.Navigator
      initialRouteName="splash"
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
      }}>
      {screens}
    </Stack.Navigator>
  );
};
