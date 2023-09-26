import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { Album } from './Song'

export function AlbumDetailsView({ album, onClose }: { album: Album | null; onClose: () => void; }) {
  if (album === null) {
    return null; // or return a message indicating that no album is selected
  }

  return (
    <View>
      <Image source={{ uri: album.albumImage }} style={{ width: 150, height: 150 }} />
      <Text style={{ textAlign: 'center', marginTop: 5 }}>{album.albumTitle}</Text>
      <Text style={{ textAlign: 'center', marginTop: 5, color: 'gray' }}>{album.artist}</Text>
      {/* Add more album details here */}
      <Button title="Close" onPress={onClose} />
    </View>
  );
}
