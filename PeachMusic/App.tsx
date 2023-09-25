import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function ListenNow() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Listen Now</Text>
    </View>
  );
}
function Browse() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Browse</Text>
    </View>
  );
}
function Radio() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Radio</Text>
    </View>
  );
}
function Library() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Library</Text>
    </View>
  );
}
function Search() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Listen Now" component={ListenNow} />
        <Tab.Screen name="Browse" component={Browse} />
        <Tab.Screen name="Radio" component={Radio} />
        <Tab.Screen name="Library" component={Library} />
        <Tab.Screen name="Search" component={Search} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}