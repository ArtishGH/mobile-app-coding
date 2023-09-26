import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Keyboard } from 'react-native';
import { SearchBar } from '@rneui/themed';
import { Song, Album, data } from './Song';

export function SearchView() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchedData, setSearchedData] = useState<(Song | Album)[]>([]);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    const filteredData = data.filter((item) => ('title' in item && item.title.toLowerCase().includes(text.toLowerCase())) ||
      ('artist' in item && item.artist.toLowerCase().includes(text.toLowerCase()))
    );
    setSearchedData(filteredData);
  };

  const handleClear = () => {
    setSearchQuery('');
    setSearchedData([]); // Clear the search results
    Keyboard.dismiss(); // Dismiss the keyboard
  };

  const renderSearchedItem = ({ item }: { item: Song | Album; }) => {
    if ('title' in item) {
      // Render a song
      return (
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }} onPress={() => console.log('Song selected:', item.title)}>
          <Image source={{ uri: item.image }} style={{ width: 50, height: 50, marginRight: 10 }} />
          <View>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
            <Text style={{ fontSize: 12, color: 'gray' }}>{'Song • ' + item.artist}</Text>
          </View>
        </TouchableOpacity>
      );
    } else {
      // Render an album
      return (
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }} onPress={() => console.log('Album selected:', item.albumTitle)}>
          <Image source={{ uri: item.albumImage }} style={{ width: 50, height: 50, marginRight: 10 }} />
          <View>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.albumTitle}</Text>
            <Text style={{ fontSize: 12, color: 'gray' }}>{'Album • ' + item.artist}</Text>
          </View>
        </TouchableOpacity>
      );
    }
  };

  return (
    <View>
      <SearchBar
        placeholder="Search for songs..."
        onChangeText={handleSearch}
        value={searchQuery}
        onClear={handleClear} // Handle the clear event
      />
      {searchQuery ? (
        <FlatList
          data={searchedData}
          renderItem={renderSearchedItem}
          keyExtractor={(item) => ('title' in item ? item.id : item.albumTitle)}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          contentContainerStyle={{ paddingBottom: 16 }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <Text style={{ fontSize: 18, color: 'gray', paddingTop: 10, textAlign: 'center' }}>No results found</Text>
      )}
    </View>
  );
}
