import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Song, Album } from './Song';

export const GalleryView = ({ data }: { data: (Song | Album)[]; }) => {
  const renderItem = ({ item }: { item: Song | Album; }) => {
    if ('title' in item) {
      // Render a song
      return (
        <TouchableOpacity style={{ margin: 10 }} onPress={() => console.log('Song selected:', item.title)}>
          <ScrollView horizontal contentContainerStyle={{ flexDirection: 'row' }}>
            <Image source={{ uri: item.image }} style={{ width: 150, height: 150, borderRadius: 10 }} />
            </ScrollView>
            <Text style={{ textAlign: 'center', marginTop: 5 }}>{item.title}</Text>
        </TouchableOpacity>
      );
    } else {
      // Render an album
      return (
        <TouchableOpacity style={{ margin: 10 }} onPress={() => console.log('Album selected:', item.albumTitle)}>
          <ScrollView horizontal contentContainerStyle={{ flexDirection: 'row' }}>
            <Image source={{ uri: item.albumImage }} style={{ width: 150, height: 150, borderRadius: 5 }} />
            </ScrollView>
            <Text style={{ textAlign: 'center', marginTop: 5 }}>{item.albumTitle}</Text>
            <Text style={{ textAlign: 'center', marginTop: 5, color: 'gray' }}>{item.artist}</Text>
        </TouchableOpacity>
      );
    }
  };

  const albums = data.filter(item => 'albumTitle' in item);
  const songs = data.filter(item => 'title' in item);

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: 10, marginTop: 10 }}>Albums</Text>
        <FlatList
          data={albums}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: 10, marginTop: 10 }}>Songs</Text>
        <FlatList
          data={songs}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemImage: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 4,
  },
  itemInfo: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemSubTitle: {
    fontSize: 12,
    color: 'gray',
  },
  noResultsText: {
    fontSize: 18,
    color: 'gray',
    paddingTop: 10,
    textAlign: 'center',
  },
});