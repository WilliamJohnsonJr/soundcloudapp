import {client_id} from "./credentials";

var baseURL = "https://api.soundcloud.com";

SC.initialize({
  client_id: client_id
});

// stream track id 293
SC.stream('/tracks/293').then(function(player){
  player.play();
});

// SC.initialize({
//   client_id: 'YOUR_CLIENT_ID'
// });

// // find all sounds of buskers licensed under 'creative commons share alike'
// SC.get('/tracks', {
//   q: 'buskers', license: 'cc-by-sa'
// }).then(function(tracks) {
//   console.log(tracks);
// });

// 

// id, title, user.username, user.permalink_url, user.avatar_url, artwork_url

export {baseURL};