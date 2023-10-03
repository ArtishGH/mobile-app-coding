import React from 'react';
import { View, Text, Image, Button, Modal, StyleSheet, ImageBackground } from 'react-native';
import { Album } from './Song';
import CustomSlider from './CustomSlider';

interface AlbumDetailsViewProps {
  album: Album | null;
  onClose: () => void;
  modalVisible: boolean;
}

export const AlbumDetailsView: React.FC<AlbumDetailsViewProps> = ({ album, onClose, modalVisible }) => {
  const [sliderValue, setSliderValue] = React.useState(0);

  return (
    <ImageBackground source={{ uri: album?.albumImage }} style={{ width: 1000, height: 1000, borderRadius: 10 }} blurRadius={70}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.modalContainer}>
          {album && (
            <View>
              <Image source={{ uri: album.albumImage }} style={{ width: 350, height: 350, marginHorizontal: 50, marginTop: 50, borderRadius: 10 }}/>
              <Text style={{ marginHorizontal: 50, marginTop: 20, fontSize: 24 }}>{album.albumTitle}</Text>
              <Text style={{ marginHorizontal: 50, marginTop: 5, fontSize: 20, color: 'gray' }}>{album.artist}</Text>
              <CustomSlider
                value={sliderValue}
                onValueChange={(newValue) => setSliderValue(newValue)}
              />
              {/* Add more album details here */}
              <View style={{ margin: 10 }}>
                <Button title="Close" onPress={onClose} />
              </View>
            </View>
          )}
        </View>
      </Modal>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
