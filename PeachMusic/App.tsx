import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchView } from './Views/SearchView';
import { GalleryView } from './Views/GalleryView';
import { data } from './Views/Song';
import { LibraryView } from './Views/LibraryView';

function ListenNowScreen() {
  return <GalleryView {...{data}} />;
}

function BrowseScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Browse</Text>
    </View>
  );
}

function RadioScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Radio</Text>
    </View>
  );
}

function LibraryScreen() {
  return (
    <LibraryView />
  );
}

function SearchScreen() {
  return (
    <SearchView />
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Listen Now" component={ListenNowScreen} />
        <Tab.Screen name="Browse" component={BrowseScreen} />
        <Tab.Screen name="Radio" component={RadioScreen} />
        <Tab.Screen name="Library" component={LibraryScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
