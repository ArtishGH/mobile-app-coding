import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const data = [
  { id: '1', title: 'Song 1', image: 'https://via.placeholder.com/200' },
  { id: '2', title: 'Song 2', image: 'https://via.placeholder.com/200' },
  { id: '3', title: 'Song 3', image: 'https://via.placeholder.com/200' },
  { id: '4', title: 'Song 4', image: 'https://via.placeholder.com/200' },
  { id: '5', title: 'Song 5', image: 'https://via.placeholder.com/200' },
  { id: '6', title: 'Song 6', image: 'https://via.placeholder.com/200' },
  { id: '7', title: 'Song 7', image: 'https://via.placeholder.com/200' },
  { id: '8', title: 'Song 8', image: 'https://via.placeholder.com/200' },
  // Add more songs here
];

const GalleryView = () => {
  const renderItem = ({ item }: { item: { id: string; title: string; image: string } }) => (
    <TouchableOpacity style={{ margin: 10 }} onPress={() => console.log('Song selected:', item.title)}>
      <Image source={{ uri: item.image }} style={{ width: 150, height: 150 }} />
      <Text style={{ textAlign: 'center', marginTop: 5 }}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={{ overflow: 'hidden' }}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ paddingBottom: 16 }} // Add your styles here
      />
    </View>
    </ScrollView>
  );
};

function ListenNowScreen() {
  return <GalleryView />;
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Library</Text>
    </View>
  );
}

const SearchView = () => {
    
};



function SearchScreen() {
  return null;
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
