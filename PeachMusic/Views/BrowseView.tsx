import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Song, Album } from './Song';

export const BrowseView = ({ data }: { data: (Song | Album)[] }) => {
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
      if (dateA > dateB) {
        return -1;
      } else if (dateA < dateB) {
        return 1;
      }
      return 0;
    }
    return 0;
  });
  const sortedDataByloved = [...data]
  .filter(item => 'loved' in item && item.loved)
  .sort((a, b) => {
    if ('loved' in a && 'loved' in b) {
      return a.loved === b.loved ? 0 : a.loved ? -1 : 1;
    }
    return 0;
  });

  const renderItem = ({ item }: { item: Song | Album }) => {
    if ('title' in item) {
      // Render a song
      return (
        <TouchableOpacity style={{ margin: 10 }} onPress={() => console.log('Song selected:', item.title)}>
          <Image source={{ uri: item.image }} style={{ width: 150, height: 150, borderRadius: 10 }} />
          <Text style={{ textAlign: 'left', marginTop: 5 }}>{item.title}</Text>
          <Text style={{ textAlign: 'left', color: 'gray' }}>{item.artist}</Text>
        </TouchableOpacity>
      );
    } else {
      // Render an album
      return (
        <TouchableOpacity style={{ margin: 10 }} onPress={() => console.log('Album selected:', item.albumTitle)}>
          <Image source={{ uri: item.albumImage }} style={{ width: 150, height: 150, borderRadius: 5 }} />
          <Text style={{ textAlign: 'left', marginTop: 5 }}>{item.albumTitle}</Text>
          <Text style={{ textAlign: 'left', color: 'gray' }}>{item.artist}</Text>
        </TouchableOpacity>
      );
    }
  };

  const renderBestSongs = ({ item }: { item: Song | Album }) => {
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

  const albums = data.filter(item => 'albumTitle' in item);
  const songs = data.filter(item => 'title' in item);

  const groupedBestSongs = [];
  for (let i = 0; i < songs.length; i += 4) {
    groupedBestSongs.push(songs.slice(i, i + 4));
  }

  const groupedYouNeedToHearSongs = [];
  for (let i = 0; i < songs.length; i += 2) {
    groupedYouNeedToHearSongs.push(songs.slice(i, i + 2));
  }

  // Create a function to group data into rows, similar to groupedYouNeedToHearSongs
const groupDataIntoRows = (data: any[], itemsPerRow: number) => {
  const groupedData = [];
  for (let i = 0; i < data.length; i += itemsPerRow) {
    groupedData.push(data.slice(i, i + itemsPerRow));
  }
  return groupedData;
};

// Define how many items you want per row for the "New Music" section
const itemsPerRowForNewMusic = 2; // You can adjust this as needed

// Group the sortedDataByDate into rows for the "New Music" section
const groupedNewMusic = groupDataIntoRows(sortedDataByDate, itemsPerRowForNewMusic);


  return (
    <ScrollView style={{ flex: 1 }}>
      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: 10, marginTop: 10 }}>
          You Gotta Hear
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled>
          {groupedYouNeedToHearSongs.map((row, index) => (
            <View key={index} style={{ flexDirection: 'column', width: 207}}>
              {row.map((item) => (
                <TouchableOpacity style={{ margin: 10 }}
                  key={item.id}
                  onPress={() => {
                    if ('title' in item) {
                      console.log('Song selected:', item.title);
                    } else {
                      console.log('Album selected:', item.albumTitle);
                    }
                  }}
                >
                  <Image source={{ uri: 'title' in item ? item.image : item.albumImage }} style={{ width: 150, height: 150, borderRadius: 10 }} />
                  <View style={styles.itemInfo}>
                    <Text style={styles.itemTitle}>{'title' in item ? item.title : item.albumTitle}</Text>
                    <Text style={styles.itemSubTitle}>
                      {'title' in item ? 'Song • ' : 'Album • '}
                      {item.artist}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
      {/* Here's gonna music based on preference and stuff - Im putting Loved songs here for now */}
      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: 10, marginTop: 10 }}>Loved By You</Text>
        <FlatList
          data={sortedDataByloved}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: 10, marginTop: 10 }}>New Music</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled>
          {groupedNewMusic.map((row, index) => (
            <View key={index} style={{ flexDirection: 'column', width: 207 }}>
              {row.map((item) => (
                <TouchableOpacity
                  style={{ margin: 10 }}
                  key={item.id}
                  onPress={() => {
                    if ('title' in item) {
                      console.log('Song selected:', item.title);
                    } else {
                      console.log('Album selected:', item.albumTitle);
                    }
                  }}
                >
                  <Image source={{ uri: 'title' in item ? item.image : item.albumImage }} style={{ width: 150, height: 150, borderRadius: 10 }} />
                  <View style={styles.itemInfo}>
                    <Text style={styles.itemTitle}>{'title' in item ? item.title : item.albumTitle}</Text>
                    <Text style={styles.itemSubTitle}>
                      {'title' in item ? 'Song • ' : 'Album • '}
                      {item.artist}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </ScrollView>
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
      {/* Best New Songs, similar to what I used in SearchView - Look up in Apple Music */}
      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: 10, marginTop: 10 }}>
          Best New Songs
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled>
          {groupedBestSongs.map((row, index) => (
            <View key={index} style={{ flexDirection: 'column', width: 415}}>
              {row.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.itemContainer}
                  onPress={() => {
                    if ('title' in item) {
                      console.log('Song selected:', item.title);
                    } else {
                      console.log('Album selected:', item.albumTitle);
                    }
                  }}
                >
                  <Image source={{ uri: 'title' in item ? item.image : item.albumImage }} style={styles.itemImage} />
                  <View style={styles.itemInfo}>
                    <Text style={styles.itemTitle}>{'title' in item ? item.title : item.albumTitle}</Text>
                    <Text style={styles.itemSubTitle}>
                      {'title' in item ? 'Song • ' : 'Album • '}
                      {item.artist}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </ScrollView>
      </View>

    </ScrollView>
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
