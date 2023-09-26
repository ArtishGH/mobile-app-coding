import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Song, Album } from './Song'; // You might need to import the Album type if you haven't already

export const GalleryView = ({ data }: { data: (Song | Album)[]; }) => {
  const renderItem = ({ item }: { item: Song | Album; }) => {
    if ('title' in item) {
      // Render a song
      return (
        <TouchableOpacity style={{ margin: 10 }} onPress={() => console.log('Song selected:', item.title)}>
          <Image source={{ uri: item.image }} style={{ width: 150, height: 150 }} />
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
      <FlatList
        data={data}
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
