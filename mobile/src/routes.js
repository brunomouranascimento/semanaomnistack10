import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="DevRadar"
      screenOptions={{
        gestureEnabled: false,
        headerStyle: { backgroundColor: '#7D40E7' },
        headerTintColor: '#FFFFFF'
      }}
    >
      <Stack.Screen name="DevRadar" component={Main} />
      <Stack.Screen name="Perfil no Github" component={Profile} />
    </Stack.Navigator>
  );
}

export default Routes;
