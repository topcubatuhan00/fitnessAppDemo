import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

import LoginPage from './pages/LoginPages';
import MemberPage from './pages/MemberSign';
import MainlyFirst from './pages/MainlyFirst';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="MemberSign" component={MemberPage} />
        <Stack.Screen name="MainlyFirst" component={MainlyFirst} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
