import React from 'react';
import { View, Text, useColorScheme } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchView } from './screens/SearchView';
import { ListenNowView } from './screens/ListenNowView';
import { data } from './data/Database';
import { LibraryView } from './screens/LibraryView';
import { BrowseView } from './screens/BrowseView'

function ListenNowScreen() {
  return <ListenNowView {...{data}} />;
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
