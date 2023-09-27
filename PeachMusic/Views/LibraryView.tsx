import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Song, Album } from './Song';

export const LibraryView = ({ data }: { data: (Song | Album)[]; }) => {
  // Sort the data by views in descending order
  const sortedData = [...data].sort((a, b) => {
    if ('views' in a && 'views' in b) {
      return b.views - a.views; // Sort in descending order
    }
    return 0; // Default case
  });

  const renderItem = ({ item }: { item: Song | Album; }) => {
    if ('title' in item) {
      // Render a song
      return (
        <TouchableOpacity style={{ margin: 10 }} onPress={() => console.log('Song selected:', item.title)}>
          <Image source={{ uri: item.image }} style={{ width: 150, height: 150, borderRadius: 10 }} />
          <Text style={{ textAlign: 'center', marginTop: 5 }}>{item.title}</Text>
        </TouchableOpacity>
      );
    } else {
      // Render an album
      return (
        <TouchableOpacity style={{ margin: 10 }} onPress={() => console.log('Album selected:', item.albumTitle)}>
          <Image source={{ uri: item.albumImage }} style={{ width: 150, height: 150 }} />
          <Text style={{ textAlign: 'center', marginTop: 5 }}>{item.albumTitle}</Text>
          <Text style={{ textAlign: 'center', marginTop: 5, color: 'gray' }}>{item.artist}</Text>
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, color: 'black', paddingTop: 10}}>{'Popular Songs'}</Text>
      <FlatList
        data={sortedData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ paddingBottom: 16 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false} />
    </View>
  );
};
