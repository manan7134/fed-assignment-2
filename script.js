const clientId = 'aff49f2ef886479684fcecf37899073f';
const redirectUri = 'https://open.spotify.com'; // Specify your redirect URI
const scopes = 'user-read-playback-state';

const loginButton = document.getElementById('login-btn');
const playButton = document.getElementById('play-btn');
const pauseButton = document.getElementById('pause-btn');
const trackList = document.getElementById('track-list');

let accessToken = null;

loginButton.addEventListener('click', () => {
  window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${encodeURIComponent(scopes)}&response_type=token`;
});

window.addEventListener('hashchange', () => {
  accessToken = window.location.hash.substring(1).split('&')[0].split('=')[1];
  console.log('Access Token:', accessToken);
});

playButton.addEventListener('click', () => { //play
  
});

pauseButton.addEventListener('click', () => { //pause
  
});

