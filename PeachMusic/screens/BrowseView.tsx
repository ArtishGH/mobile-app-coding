import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ScrollView, StyleSheet, Modal } from 'react-native';
import { Song, Album } from '../data/Database';
import { AlbumDetailsView } from './AlbumView';
import { SongDetailsView } from "./SongView";
import { sortDataByViews, sortDataByDate, sortDataByLoved } from '../components/sorting';

export const BrowseView = ({ data }: { data: (Song | Album)[] }) => {
  const sortedDataByViews = sortDataByViews(data);
  const sortedDataByDate = sortDataByDate(data);
  const sortedDataByLoved = sortDataByLoved(data);

  const renderOneLineItem = ({ item }: { item: Song | Album }) => {
    const handleModalPress = () => {
      if ('title' in item) {
        console.log('Song selected:', item.title);
        setSongVisible(true); // Open the modal
        setSelectedSong(item); // Set the selected song
      } else {
        console.log('Album selected:', item.albumTitle);
        setAlbumVisible(true); // Open the modal
        setSelectedAlbum(item); // Set the selected album
      }
    };

    if ('title' in item) {
      // Render a song
      return (
        <TouchableOpacity style={{ margin: 10 }} onPress={handleModalPress}>
          <Image source={{ uri: item.image }} style={{ width: 150, height: 150, borderRadius: 10 }} />
          <Text style={{ textAlign: 'left', marginTop: 5 }}>{item.title}</Text>
          <Text style={{ textAlign: 'left', color: 'gray' }}>{item.artist}</Text>
        </TouchableOpacity>
      );
    } else {
      // Render an album
      return (
        <TouchableOpacity style={{ margin: 10 }} onPress={handleModalPress}>
          <Image source={{ uri: item.albumImage }} style={{ width: 150, height: 150, borderRadius: 5 }} />
          <Text style={{ textAlign: 'left', marginTop: 5 }}>{item.albumTitle}</Text>
          <Text style={{ textAlign: 'left', color: 'gray' }}>{item.artist}</Text>
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

  const groupedAlbums = [];
    for (let i = 0; i < albums.length; i += 2) {
        groupedAlbums.push(albums.slice(i, i + 2));
    }

  // Create a function to group data into rows, similar to groupedYouNeedToHearSongs
  const groupDataIntoRows = (data: any[], itemsPerRow: number) => {
    const groupedData = [];
    for (let i = 0; i < data.length; i += itemsPerRow) {
      groupedData.push(data.slice(i, i + itemsPerRow));
    }
    return groupedData;
  };

  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [albumVisible, setAlbumVisible] = useState(false);
    const [songVisible, setSongVisible] = useState(false);


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
                <TouchableOpacity

                  style={{ margin: 10 }}
                  key={item.id}
                  onPress={() => {
                    if ('title' in item) {
                      console.log('Song selected:', item.title);
                      setSongVisible(true); // Open the modal
                      setSelectedSong(item); // Set the selected song
                    } else {
                      console.log('Album selected:', item.albumTitle);
                      setAlbumVisible(true); // Open the modal
                      setSelectedAlbum(item); // Set the selected album
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
      {/* Here's gonna music based on preference and stuff - I'm putting Loved songs here for now */}
      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: 10, marginTop: 10 }}>Loved By You</Text>
        <FlatList
          data={sortedDataByLoved}
          renderItem={renderOneLineItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: 10, marginTop: 10 }}>
          New Music
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled>
          {groupedNewMusic.map((row, index) => (
            <View key={index} style={{ flexDirection: 'column', width: 207 }}>
              {row.map((item) => (
                <TouchableOpacity
                  style={{ margin: 10}}
                  key={item.id}
                  onPress={() => {
                    if ('title' in item) {
                      console.log('Song selected:', item.title);
                      setSongVisible(true); // Open the modal
                      setSelectedSong(item); // Set the selected song
                    } else {
                      console.log('Album selected:', item.albumTitle);
                      setAlbumVisible(true); // Open the modal
                      setSelectedAlbum(item); // Set the selected album
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
          renderItem={renderOneLineItem}
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
                      setSongVisible(true); // Open the modal
                      setSelectedSong(item); // Set the selected song
                    } else {
                      console.log('Album selected:', item.albumTitle);
                      setAlbumVisible(true); // Open the modal
                      setSelectedAlbum(item); // Set the selected album
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
      <View style={styles.centeredView}>
        <Modal animationType="slide" visible={albumVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {selectedAlbum && (
                  <AlbumDetailsView album={selectedAlbum} onClose={() => setAlbumVisible(false)}/>
              )}
            </View>
          </View>
        </Modal>
      </View>
      <View style={styles.centeredView}>
        <Modal animationType="slide" visible={songVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {selectedSong && (
                  <SongDetailsView song={selectedSong} onClose={() => setSongVisible(false)} />
              )}
            </View>
          </View>
        </Modal>
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
  // ModalView
  centeredView: {
    flex: 1,
    width: 415,
  },
  modalView: {
    margin: 0,
    backgroundColor: 'white',
    borderRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    flex: 1,
  },
});
