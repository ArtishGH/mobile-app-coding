// import React, {useState} from "react";
// import {Album, Song} from "../data/Database";
// import {Modal, StyleSheet, View} from "react-native";
// import {SongDetailsView} from "../screens/SongView";
// import {AlbumDetailsView} from "../screens/AlbumView";
//
// export const renderModal = () => {
//
//     const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
//     const [selectedSong, setSelectedSong] = useState<Song | null>(null);
//     const [albumVisible, setAlbumVisible] = useState(false);
//     const [songVisible, setSongVisible] = useState(false);
//
//     const handleAlbumPress = (album: Album) => {
//         setSelectedAlbum(album);
//         setAlbumVisible(true);
//     };
//
//     const handleSongPress = (song: Song) => {
//         setSelectedSong(song);
//         setSongVisible(true);
//     };
//
//     const handleAlbumClose = () => {
//         setAlbumVisible(false);
//     };
//
//     const handleSongClose = () => {
//         setSongVisible(false);
//     };
//
//     const renderAlbum = () => {
//         if (selectedAlbum) {
//             return (
//                 <Modal animationType="slide" visible={albumVisible}>
//                     <View style={styles.centeredView}>
//                         <View style={styles.modalView}>
//                             {selectedAlbum && (
//                                 <AlbumDetailsView album={selectedAlbum} onClose={() => setAlbumVisible(false)}/>
//                             )}
//                         </View>
//                     </View>
//                 </Modal>
//             );
//         }
//         return null;
//     };
//
//     const renderSong = () => {
//         if (selectedSong) {
//             return (
//                 <Modal animationType="slide" visible={songVisible}>
//                     <View style={styles.centeredView}>
//                         <View style={styles.modalView}>
//                             {selectedSong && (
//                                 <SongDetailsView song={selectedSong} onClose={() => setSongVisible(false)} />
//                             )}
//                         </View>
//                     </View>
//                 </Modal>
//             );
//         }
//         return null;
//     };
// }
//
// const styles = StyleSheet.create({
//     // ModalView
//     centeredView: {
//         flex: 1,
//         width: 415,
//     },
//     modalView: {
//         margin: 0,
//         backgroundColor: 'white',
//         borderRadius: 0,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 0,
//         flex: 1,
//     },
// });