import React from 'react';
import { View, Text, Image, Button, Modal, StyleSheet } from 'react-native';
import { Album } from './Song';

export function AlbumDetailsView({ album, onClose, modalVisible }: { album: Album | null; onClose: () => void; modalVisible: boolean; }) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible} // Use modalVisible prop here to control visibility
    >
      <View style={styles.modalContainer}>
        {album && (
          <View>
            <Image source={{ uri: album.albumImage }} style={{ width: 350, height: 350, margin: 50, borderRadius: 10 }} />
            <Text style={{ textAlign: 'center', marginTop: 5 }}>{album.albumTitle}</Text>
            <Text style={{ textAlign: 'center', marginTop: 5, color: 'gray' }}>{album.artist}</Text>
            {/* Add more album details here */}
            <Button title="Close" onPress={onClose} />
          </View>
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
