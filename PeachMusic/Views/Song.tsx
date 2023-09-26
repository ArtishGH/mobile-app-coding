export interface Song {
  id: string;
  title: string;
  image: string;
  gen: string;
  artist: string;
  liked: boolean;
}

export interface Album {
  id: string;
  albumTitle: string;
  albumImage: string;
  artist: string;
}

export const data: (Song | Album)[] = [
  { id: '1', title: 'WOLF', gen: 'Pop', artist: 'Tyler, The Creator', liked: true, image: 'https://arrestedmotion.com/wp-content/uploads/2013/02/cover1.jpg' },
  { id: '2', title: 'Sorry Not Sorry', gen: 'Pop', artist: 'Tyler, The Creator', liked: true, image: 'https://e0.pxfuel.com/wallpapers/1015/856/desktop-wallpaper-story-behind-tyler-the-creator-s-call-me-if-you-get-lost-album-cover-complex.jpg' },
  { id: '3', title: 'See you again', gen: 'Pop', artist: 'Tyler, The Creator', liked: true, image: 'https://preview.redd.it/ybiba2fuurs51.jpg?width=960&crop=smart&auto=webp&s=b97534abf4b3d8233e6beaf0a4c91ed0841f69c8' },
  { id: '4', title: 'Gelato', gen: 'Pop', artist: 'Taco Hemingway', liked: true, image: 'https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2F6d1ab6c40b643ba8d4dcdf8e9c95de72.1000x1000x1.jpg' },
  { id: '5', title: 'Mangolia', gen: 'Rap', artist: 'Carti', liked: true, image: 'https://m.media-amazon.com/images/I/5111jUBD71L._SX300_SY300_QL70_FMwebp_.jpg' },
  { id: '6', title: 'Snooze', gen: 'Pop', artist: 'SZA', liked: true, image: 'https://media.pitchfork.com/photos/638902d2e5592afa444298b9/master/w_1600,c_limit/SZA-SOS.jpg' },
  { id: '7', title: 'SICKO MODE', gen: 'Pop', artist: 'Travis Scott', liked: true, image: 'https://townsquare.media/site/812/files/2018/07/travis-scott-astroworld-cover-art-full.jpg?w=1080&h=1080&q=75' },
  { id: '8', title: 'Pray 4 Love', gen: 'Pop', artist: 'Travis Scott', liked: true, image: 'https://lastfm.freetls.fastly.net/i/u/770x0/c7e53ead537dc20ad3915ee0f6332bfe.jpg#c7e53ead537dc20ad3915ee0f6332bfe' },
  { id: '9', title: 'Hotline Bling', gen: 'Pop', artist: 'Drake', liked: true, image: 'https://m.media-amazon.com/images/I/71fXWX04klL.__AC_SX300_SY300_QL70_ML2_.jpg' },
  { id: '10', title: 'Earfquake', gen: 'Pop', artist: 'Tyler, The Creator', liked: true, image: 'https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2F99d79385685ab3a4b7a7ccbc6fd27310.1000x1000x1.png' },
  { id: '11', title: 'Goosebumps', gen: 'Pop', artist: 'Travis Scott', liked: true, image: 'https://e-cdn-images.dzcdn.net/images/cover/a2f66f08468fb9897019e82ffb7a5fcb/264x264-000000-80-0-0.jpg' },
  { id: '12', title: 'Blinding Lights', gen: 'Pop', artist: 'The Weeknd', liked: true, image: 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png' },
  { id: '13', title: 'God\'s Plan', gen: 'Pop', artist: 'Drake', liked: true, image: 'https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg' },
  { id: '14', title: 'IFHY', gen: 'Pop', artist: 'Tyler, The Creator', liked: true, image: 'https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2Fdde81a162bfe7b81092c8630cdf16d70.1000x1000x1.jpg' },
  { id: '15', title: 'BUTTERFLY EFFECT', gen: 'Pop', artist: 'Travis Scott', liked: true, image: 'https://townsquare.media/site/812/files/2018/07/travis-scott-astroworld-cover-art-full.jpg?w=1080&h=1080&q=75' },
  { id: '16', title: 'Save Your Tears', gen: 'Pop', artist: 'The Weeknd', liked: true, image: 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png' },
  // Add more songs here
  { id: '17', albumTitle: 'DAMN', artist: 'Kendrick Lamar', albumImage: 'https://e0.pxfuel.com/wallpapers/708/623/desktop-wallpaper-kendrick-lamar-damn-album-cover.jpg' },
  { id: '18', albumTitle: 'Good Kid, M.A.A.D City', artist: 'Kendrick Lamar', albumImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Kendrick_Lamar_-_Good_Kid%2C_M.A.A.D_City.png/220px-Kendrick_Lamar_-_Good_Kid%2C_M.A.A.D_City.png' },
  { id: '19', albumTitle: 'My Beautiful Dark Twisted Fantasy', artist: 'Kanye West', albumImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/Kanye_West_-_My_Beautiful_Dark_Twisted_Fantasy.jpg/220px-Kanye_West_-_My_Beautiful_Dark_Twisted_Fantasy.jpg' },
  { id: '20', albumTitle: 'Blonde', artist: 'Frank Ocean', albumImage: 'https://jazzsoul.pl/images//2016/08/Frank-Ocean-Blonde-cover.jpg' },
  { id: '21', albumTitle: 'Astroworld', artist: 'Travis Scott', albumImage: 'https://townsquare.media/site/812/files/2018/07/travis-scott-astroworld-cover-art-full.jpg?w=1080&h=1080&q=75' },
  { id: '22', albumTitle: 'Take Care', artist: 'Drake', albumImage: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Drake_-_Take_Care_cover.jpg' },
  { id: '23', albumTitle: 'Rodeo', artist: 'Travis Scott', albumImage: 'https://lastfm.freetls.fastly.net/i/u/770x0/c7e53ead537dc20ad3915ee0f6332bfe.jpg#c7e53ead537dc20ad3915ee0f6332bfe' },
  { id: '24', albumTitle: 'Scorpion', artist: 'Drake', albumImage: 'https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg' },
  // Add more albums here
];