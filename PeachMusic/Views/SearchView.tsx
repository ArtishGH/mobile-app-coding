import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Keyboard, StyleSheet } from 'react-native';
import { SearchBar } from '@rneui/themed';
import { Song, Album, data } from './Database';

export function SearchView() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchedData, setSearchedData] = useState<(Song | Album)[]>([]);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    const filteredData = data.filter((item) => ('title' in item && item.title.toLowerCase().includes(text.toLowerCase())) ||
      ('artist' in item && item.artist.toLowerCase().includes(text.toLowerCase())) || ('albumTitle' in item && item.albumTitle.toLowerCase().includes(text.toLowerCase()))
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
        <TouchableOpacity style={styles.itemContainer} onPress={() => console.log('Song selected:', item.title)}>
          <Image source={{ uri: item.image }} style={styles.itemImage} />
          <View style={styles.itemInfo}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemSubTitle}>{'Song • ' + item.artist}</Text>
          </View>
        </TouchableOpacity>
      );
    } else {
      // Render an album
      return (
        <TouchableOpacity style={styles.itemContainer} onPress={() => console.log('Album selected:', item.albumTitle)}>
          <Image source={{ uri: item.albumImage }} style={styles.itemImage} />
          <View style={styles.itemInfo}>
            <Text style={styles.itemTitle}>{item.albumTitle}</Text>
            <Text style={styles.itemSubTitle}><Text style={{ color: 'black' }}>{'Album • '}</Text>{item.artist}</Text>
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
          numColumns={1} // Display one item per row
          contentContainerStyle={{ paddingBottom: 16 }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <Text style={styles.noResultsText}>No results found</Text>
      )}
    </View>
  );
}

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
