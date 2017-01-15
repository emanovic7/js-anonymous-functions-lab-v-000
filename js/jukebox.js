$(document).ready(function(){
  menu();
  play();
  pause();
  show();
});

var jukeboxSongs = { "taylor swift": "in the clear", "beyonce": "halo", "drake": "hotline bling"};
var artists = Object.keys(jukeboxSongs);
var theArtist = artists[Math.floor(Math.random()) * artists.length];
var songToPlay = jukeboxSongs[theArtist];

function randomNumber() {
  return Math.floor(Math.random());
}

function menu() {
  $('#menu').on('click', youCan);
}
function youCan(k){
    $('#menuOptions').html("You can play a song, pause a song, or view all the songs");
}


function play() {
  $('#play').on('click',playSong);
}
  function playSong(k){
    $('#songPlaying').html("now playing " + songToPlay + " by " + theArtist);
    return "now playing " + songToPlay + " by " + theArtist;

}

function pause() {
  $('#pause').on('click', pauseSong)
}
  function pauseSong(){
    $('#songPaused').html(songToPlay + " is paused");
}

function show() {
  $('#show').on('click', available)
}
function available(){
    var songs = "";
    for (var key in jukeboxSongs) {
      songs += jukeboxSongs[key] + " by " + key +  " is available to play. "
    }
    $('#showSongs').html(songs);
}
