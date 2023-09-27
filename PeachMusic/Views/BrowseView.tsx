import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Song, Album } from './Song';

export const BrowseView = ({ data }: { data: (Song | Album)[]; }) => {
  const sortedDataByViews = [...data].sort((a, b) => {
    if ('views' in a && 'views' in b) {
      return b.views - a.views;
    }
    return 0;
  });
  const sortedDataByDate = [...data].sort((a, b) => {
    if ('date' in a && 'date' in b) {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
  
      // Compare the two date objects
      if (dateA > dateB) {
        return -1;
      } else if (dateA < dateB) {
        return 1;
      }
      return 0;
    }
    return 0;
  });
  
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
      <ScrollView>
      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: 10, marginTop: 10 }}>You Gotta Hear</Text>
        <FlatList
          data={albums}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: 10, marginTop: 10 }}>Read Your Goals</Text>
        <FlatList
          data={songs}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: 10, marginTop: 10 }}>New Music</Text>
        <FlatList
          data={sortedDataByDate}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: 10, marginTop: 10 }}>Daily Top 100s</Text>
        <FlatList
          data={sortedDataByViews}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {/* Best New Songs, similat to what I used in SearchView - Look up in Apple Music */}
      </ScrollView>
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