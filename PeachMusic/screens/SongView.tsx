import React from 'react';
import { View, Text, Image, Button, Modal, StyleSheet, ImageBackground } from 'react-native';
import { Song } from '../data/Database';
import CustomSlider from './CustomSlider';

interface SongDetailsViewProps {
    song: Song | null;
    onClose: () => void;
}

export const SongDetailsView: React.FC<SongDetailsViewProps> = ({ song, onClose }) => {
    const [sliderValue, setSliderValue] = React.useState(0);

    return (
        <ImageBackground source={{ uri: song?.image }} style={{ width: 1000, height: 1000, borderRadius: 10 }} blurRadius={70}>
            <Modal
                animationType="slide"
                transparent={true}
            >
                <View style={styles.modalContainer}>
                    {song && (
                        <View>
                            <Image source={{ uri: song.image }} style={{ width: 350, height: 350, marginHorizontal: 50, marginTop: 50, borderRadius: 10 }} />
                            <Text style={{ marginHorizontal: 50, marginTop: 20, fontSize: 24 }}>{song.title}</Text>
                            <Text style={{ marginHorizontal: 50, marginTop: 5, fontSize: 20, color: 'gray' }}>{song.artist}</Text>
                            <CustomSlider
                                value={sliderValue}
                                onValueChange={(newValue) => setSliderValue(newValue)}
                            />
                            {/* Add more song details here */}
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                {/* Add playback controls here */}
                            </View>
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
