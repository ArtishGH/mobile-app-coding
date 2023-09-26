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
  { id: '9', title: 'Hotline Bling', gen: 'Pop', artist: 'Drake', liked: true, image: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Hotline_Bling_-_Drake.png/220px-Hotline_Bling_-_Drake.png' },
  { id: '10', title: 'Earfquake', gen: 'Pop', artist: 'Tyler, The Creator', liked: true, image: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Tyler%2C_The_Creator_-_IGOR.png/220px-Tyler%2C_The_Creator_-_IGOR.png' },
  { id: '11', title: 'Goosebumps', gen: 'Pop', artist: 'Travis Scott', liked: true, image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Travis_Scott_-_Goosebumps.png/220px-Travis_Scott_-_Goosebumps.png' },
  { id: '12', title: 'Blinding Lights', gen: 'Pop', artist: 'The Weeknd', liked: true, image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/The_Weeknd_-_Blinding_Lights.png/220px-The_Weeknd_-_Blinding_Lights.png' },
  { id: '13', title: 'God\'s Plan', gen: 'Pop', artist: 'Drake', liked: true, image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Drake_-_God%27s_Plan.png/220px-Drake_-_God%27s_Plan.png' },
  { id: '14', title: 'IFHY', gen: 'Pop', artist: 'Tyler, The Creator', liked: true, image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Ifhy-single-by-tyler-the-creator.jpg/220px-Ifhy-single-by-tyler-the-creator.jpg' },
  { id: '15', title: 'STARGAZING', gen: 'Pop', artist: 'Travis Scott', liked: true, image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Stargazing_%28song%29.png/220px-Stargazing_%28song%29.png' },
  { id: '16', title: 'Save Your Tears', gen: 'Pop', artist: 'The Weeknd', liked: true, image: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/The_Weeknd_-_Save_Your_Tears.png/220px-The_Weeknd_-_Save_Your_Tears.png' },
  // Add more songs here
  { id: '17', albumTitle: 'DAMN', artist: 'Kendrick Lamar', albumImage: 'https://e0.pxfuel.com/wallpapers/708/623/desktop-wallpaper-kendrick-lamar-damn-album-cover.jpg' },
];