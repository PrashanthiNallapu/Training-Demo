import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen.js';
import OnboardingScreen from './screens/OnboardingScreen.js';
import SignUpScreen from './screens/SignUpscreen.js';
import LoginScreen from './screens/Login.js';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        {/* <Stack.Screen name="Home" component={() => <></>} /> */}
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>



     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;