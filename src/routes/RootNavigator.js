import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screens/onBoarding/Splash';
import Login from '../screens/auth/Login';

const RootStack = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Splash">
        <RootStack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Login"
          component={Login}
          options={{headerShown: true}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
