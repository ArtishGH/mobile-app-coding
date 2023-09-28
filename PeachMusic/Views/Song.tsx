export interface Song {
  id: string;
  title: string;
  image: string;
  gen: string;
  artist: string;
  loved: boolean;
  views: number;
  date: string;
}

export interface Album {
  id: string;
  albumTitle: string;
  albumImage: string;
  artist: string;
  date: string;
}

export const data: (Song | Album)[] = [
  { id: '1', title: 'WOLF', gen: 'Pop', artist: 'Tyler, The Creator', date: '2022-05-15', loved: true, views: 68, image: 'https://arrestedmotion.com/wp-content/uploads/2013/02/cover1.jpg' },
  { id: '2', title: 'Sorry Not Sorry', gen: 'Pop', artist: 'Tyler, The Creator', date: '2021-09-20', loved: true, views: 74, image: 'https://e0.pxfuel.com/wallpapers/1015/856/desktop-wallpaper-story-behind-tyler-the-creator-s-call-me-if-you-get-lost-album-cover-complex.jpg' },
  { id: '3', title: 'See you again', gen: 'Pop', artist: 'Tyler, The Creator', date: '2020-11-12', loved: false, views: 35, image: 'https://preview.redd.it/ybiba2fuurs51.jpg?width=960&crop=smart&auto=webp&s=b97534abf4b3d8233e6beaf0a4c91ed0841f69c8' },
  { id: '4', title: 'Gelato', gen: 'Pop', artist: 'Taco Hemingway', date: '2022-02-28', loved: false, views: 25, image: 'https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2F6d1ab6c40b643ba8d4dcdf8e9c95de72.1000x1000x1.jpg' },
  { id: '5', title: 'Mangolia', gen: 'Rap', artist: 'Carti', date: '2021-08-10', loved: false, views: 18, image: 'https://m.media-amazon.com/images/I/5111jUBD71L._SX300_SY300_QL70_FMwebp_.jpg' },
  { id: '6', title: 'Snooze', gen: 'Pop', artist: 'SZA', date: '2022-03-05', loved: true, views: 3, image: 'https://media.pitchfork.com/photos/638902d2e5592afa444298b9/master/w_1600,c_limit/SZA-SOS.jpg' },
  { id: '7', title: 'SICKO MODE', gen: 'Pop', artist: 'Travis Scott', date: '2023-01-17', loved: true, views: 71, image: 'https://townsquare.media/site/812/files/2018/07/travis-scott-astroworld-cover-art-full.jpg?w=1080&h=1080&q=75' },
  { id: '8', title: 'Pray 4 Love', gen: 'Pop', artist: 'Travis Scott', date: '2020-07-02', loved: false, views: 56, image: 'https://lastfm.freetls.fastly.net/i/u/770x0/c7e53ead537dc20ad3915ee0f6332bfe.jpg#c7e53ead537dc20ad3915ee0f6332bfe' },
  { id: '9', title: 'Hotline Bling', gen: 'Pop', artist: 'Drake', date: '2021-04-19', loved: false, views: 99, image: 'https://m.media-amazon.com/images/I/71fXWX04klL.__AC_SX300_SY300_QL70_ML2_.jpg' },
  { id: '10', title: 'Earfquake', gen: 'Pop', artist: 'Tyler, The Creator', date: '2022-08-30', loved: true, views: 82, image: 'https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2F99d79385685ab3a4b7a7ccbc6fd27310.1000x1000x1.png' },
  { id: '11', title: 'Goosebumps', gen: 'Pop', artist: 'Travis Scott', date: '2020-12-05', loved: false, views: 47, image: 'https://e-cdn-images.dzcdn.net/images/cover/a2f66f08468fb9897019e82ffb7a5fcb/264x264-000000-80-0-0.jpg' },
  { id: '12', title: 'Blinding Lights', gen: 'Pop', artist: 'The Weeknd', date: '2021-11-18', loved: true, views: 32, image: 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png' },
  { id: '13', title: "God's Plan", gen: 'Pop', artist: 'Drake', date: '2020-06-08', loved: false, views: 15, image: 'https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg' },
  { id: '14', title: 'IFHY', gen: 'Pop', artist: 'Tyler, The Creator', date: '2021-03-14', loved: false, views: 28, image: 'https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2Fdde81a162bfe7b81092c8630cdf16d70.1000x1000x1.jpg' },
  { id: '15', title: 'BUTTERFLY EFFECT', gen: 'Pop', artist: 'Travis Scott', date: '2020-09-30', loved: true, views: 37, image: 'https://townsquare.media/site/812/files/2018/07/travis-scott-astroworld-cover-art-full.jpg?w=1080&h=1080&q=75' },
  { id: '16', title: 'Save Your Tears', gen: 'Pop', artist: 'The Weeknd', date: '2021-07-24', loved: false, views: 77, image: 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png' },
  // Add more songs here
  { id: '17', albumTitle: 'DAMN', artist: 'Kendrick Lamar', date: '2019-05-02', albumImage: 'https://e0.pxfuel.com/wallpapers/708/623/desktop-wallpaper-kendrick-lamar-damn-album-cover.jpg' },
  { id: '18', albumTitle: 'A Life Of Pablo', artist: 'Kanye West', date: '2016-02-14', albumImage: 'https://www.levelman.com/content/images/size/w1000/2023/08/the-life-of-pablo-kanye-west-album-cover.jpg' },
  { id: '19', albumTitle: 'Graduation', artist: 'Kanye West', date: '2007-09-11', albumImage: 'https://www.levelman.com/content/images/size/w1000/2023/08/graduation-kanye-west-album-cover.jpg' },
  { id: '20', albumTitle: 'Blonde', artist: 'Frank Ocean', date: '2016-08-20', albumImage: 'https://jazzsoul.pl/images//2016/08/Frank-Ocean-Blonde-cover.jpg' },
  { id: '21', albumTitle: 'Astroworld', artist: 'Travis Scott', date: '2018-08-03', albumImage: 'https://townsquare.media/site/812/files/2018/07/travis-scott-astroworld-cover-art-full.jpg?w=1080&h=1080&q=75' },
  { id: '22', albumTitle: 'Take Care', artist: 'Drake', date: '2011-11-15', albumImage: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Drake_-_Take_Care_cover.jpg' },
  { id: '23', albumTitle: 'Rodeo', artist: 'Travis Scott', date: '2015-09-04', albumImage: 'https://lastfm.freetls.fastly.net/i/u/770x0/c7e53ead537dc20ad3915ee0f6332bfe.jpg#c7e53ead537dc20ad3915ee0f6332bfe' },
  { id: '24', albumTitle: 'Scorpion', artist: 'Drake', date: '2018-06-29', albumImage: 'https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg' },
  // Add more albums here
];
