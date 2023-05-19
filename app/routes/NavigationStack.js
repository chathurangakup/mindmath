import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';


import Login from '../screens/login/Login';
import Home from '../screens/home/Home';



const onboardingScreens = {
  // splash: {screen: Splash},
  // languageChange: {screen: LanguageChange},
  login: {screen: Login},
  home: {screen: Home},
};



const Stack = createNativeStackNavigator();



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
