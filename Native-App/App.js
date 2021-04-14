import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useEffect,useState} from 'react';
import { StyleSheet, Text, View, Image,ScrollView,TextInput, Button,TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from './Components/Modals/Homescreen';
import HandDrip from './Components/Modals/HandDrip';
import BatchBrew from './Components/Modals/HandDrip';
import ColdBrew from './Components/Modals/ColdBrew';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'

const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
          <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Homescreen} 
        options={{headerShown: false}}
        // options={{ headerTitle: props => <Navbar {...props} /> }}
        />
        <Stack.Screen name="Hand Drip" component={HandDrip} />
        <Stack.Screen name="Batch Brew" component={BatchBrew} />
        <Stack.Screen name="Cold Brew" component={ColdBrew} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>

  );
}

export default App;
