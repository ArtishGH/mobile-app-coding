import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const data = [
  { id: '1', title: 'Song 1', image: 'https://arrestedmotion.com/wp-content/uploads/2013/02/cover1.jpg' },
  { id: '2', title: 'Song 2', image: 'https://e0.pxfuel.com/wallpapers/1015/856/desktop-wallpaper-story-behind-tyler-the-creator-s-call-me-if-you-get-lost-album-cover-complex.jpg' },
  { id: '3', title: 'Song 3', image: 'https://preview.redd.it/ybiba2fuurs51.jpg?width=960&crop=smart&auto=webp&s=b97534abf4b3d8233e6beaf0a4c91ed0841f69c8' },
  { id: '4', title: 'Song 4', image: 'https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2F6d1ab6c40b643ba8d4dcdf8e9c95de72.1000x1000x1.jpg' },
  { id: '5', title: 'Song 5', image: 'https://m.media-amazon.com/images/I/5111jUBD71L._SX300_SY300_QL70_FMwebp_.jpg' },
  { id: '6', title: 'Song 6', image: 'https://media.pitchfork.com/photos/638902d2e5592afa444298b9/master/w_1600,c_limit/SZA-SOS.jpg' },
  { id: '7', title: 'Song 7', image: 'https://townsquare.media/site/812/files/2018/07/travis-scott-astroworld-cover-art-full.jpg?w=1080&h=1080&q=75' },
  { id: '8', title: 'Song 8', image: 'https://lastfm.freetls.fastly.net/i/u/770x0/c7e53ead537dc20ad3915ee0f6332bfe.jpg#c7e53ead537dc20ad3915ee0f6332bfe' },
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ paddingBottom: 16 }} // Add your styles here
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
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
