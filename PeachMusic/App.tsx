import React from 'react';
import { View, Text, ScrollView, useColorScheme } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchView } from './Views/SearchView';
import { GalleryView } from './Views/GalleryView';
import { data } from './Views/Song';
import { LibraryView } from './Views/LibraryView';
import { BrowseView } from './Views/BrowseView'

function ListenNowScreen() {
  return <GalleryView {...{data}} />;
}

function BrowseScreen() {
  return <BrowseView {...{data}} />;
}

function RadioScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Radio</Text>
    </View>
  );
}

function LibraryScreen() {
  return <LibraryView {...{data}} />;
}

function SearchScreen() {
  return (
    <SearchView />
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
  const theme = useColorScheme();
  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
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
