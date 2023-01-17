/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Devices from './components/Devices';
import NewDevice from './components/NewDevice';

const DevicesStack = createNativeStackNavigator();
function DevicesStackScreen({route, navigation}) {
  const [devices, setDevices] = useState(route.params.devices);
  return (
    <DevicesStack.Navigator>
      <DevicesStack.Screen
        name="Devices"
        component={Devices}
        initialParams={{devices: devices}}
      />
      <DevicesStack.Screen name="NewDevice" component={NewDevice} />
    </DevicesStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

function App() {
  let devices = [
    {id: 1, name: 'Lampa', roomName: 'Kuchnia'},
    {id: 2, name: 'Roleta 1', roomName: 'Salon'},
    {id: 3, name: 'Roleta 2', roomName: 'Salon'},
    {id: 4, name: 'Lampa', roomName: 'Kuchnia'},
    {id: 5, name: 'Roleta 1', roomName: 'Salon'},
    {id: 6, name: 'Roleta 2', roomName: 'Salon'},
    {id: 7, name: 'Lampa', roomName: 'Kuchnia'},
    {id: 8, name: 'Roleta 1', roomName: 'Salon'},
    {id: 9, name: 'Roleta 2', roomName: 'Salon'},
  ];
  console.log(devices);
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="DevicesStackScreen"
          component={DevicesStackScreen}
          initialParams={{devices: devices}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
