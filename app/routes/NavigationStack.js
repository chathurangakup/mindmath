import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';



import Splash from '../screens/onboarding/Splash';
import LoginorSignUp from '../screens/onboarding/LoginorSignUp';
import Login from '../screens/onboarding/login/Login';
import Register from '../screens/onboarding/register/Register';
import Home from '../screens/home/Home';

// import CustomDrawer from '../components/CustomDrawer';



const onboardingScreens = {
  splash: {screen: Splash},
  loginorsignup: {screen: LoginorSignUp},
  login: {screen: Login},
  register: {screen: Register},

};

const signInScreens = {
  home: {screen: Home},
};

// const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

// export const MainStack = () => {
//   let screens = [];
//   for (let key in signInScreens) {
//     if (signInScreens.hasOwnProperty(key)) {
//       screens.push(
//         <Drawer.Screen
//           key={key}
//           name={key}
//           component={signInScreens[key].screen}
//         />,
//       );
//     }
//   }
//   return (
//     <Drawer.Navigator

//       screenOptions={{
//         headerShown: false,
//       }} 
//       drawerContent={props=><CustomDrawer {...props}/>}
//       >
//       {screens}
//     </Drawer.Navigator>
//   );
// };



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
