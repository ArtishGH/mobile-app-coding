import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList, ImageBackground} from 'react-native';
import { Album, Song, data } from './Database';

interface AlbumDetailsViewProps {
    album: Album;
    onClose: () => void;
}

export const AlbumDetailsView: React.FC<AlbumDetailsViewProps> = ({ album, onClose }) => {
    // Filter songs connected to the album
    const albumSongs = data.filter((item) => 'id' in item && album.songIds.includes(item.id)) as Song[];

    return (
        <ImageBackground source={{ uri: album.albumImage }} style={{ width: 1000, height: 1000, borderRadius: 10 }} blurRadius={70}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginTop: 100 }}>
                {/* Album Cover, Title, and Artist */}
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <Image source={{ uri: album.albumImage }} style={{ width: 200, height: 200, borderRadius: 10 }} />
                    <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>{album.albumTitle}</Text>
                    <Text style={{ textAlign: 'center', color: 'gray' }}>{album.artist}</Text>
                    <Text style={{ textAlign: 'center', color: 'gray' }}>{album.date}</Text>
                </View>

                {/* Songs List */}
                <FlatList
                    data={albumSongs}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', margin: 5 }} key={item.id}>
                            <Image source={{ uri: item.image }} style={{ width: 60, height: 60, borderRadius: 5, marginRight: 10 }} />
                            <View>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
                                <Text style={{ color: 'gray' }}>{item.artist}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />

                {/* Close Button */}
                <TouchableOpacity style={{ margin: 10, backgroundColor: 'lightgray', padding: 10, borderRadius: 5, marginBottom: 200 }} onPress={onClose}>
                    <Text style={{ textAlign: 'center' }}>Close</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};
