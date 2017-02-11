/*jshint esversion: 6 */
function Library(name, creator) {
  this.name = name;
  this.creater = creator;
  this.playlist = [];
}

function Track(title, rating, time){
  this.title = title;
  this.rating = rating;
  this.time = time;
}

function Playlist(name) {
  this.name = name;
  this.tracks = [];
}

// Playlist prototype functions
Playlist.prototype = {
  addTrack: function(track) {
    this.tracks.push(track);
  },
  overallRating: function() {
    const mapArr = this.tracks.map(function(i){
      return i.rating;
    });
    let sum = mapArr.reduce(function(a, b) {
      return a + b;
    }, 0);
    sum = Math.floor(sum / mapArr.length);
    console.log('Overall rating of tracks in playlist =>', sum);
  },
  totalDuration: function() {
    var mapped = this.tracks.map(function(i){
      return i.time;
    });
    const totalDur = timeConvert(mapped);
    console.log('Total duration of tracks in playlist =>:', totalDur);
  }
};

// Library prototype functions
Library.prototype = {
  addPlaylist: function(playlist) {
    this.playlist.push(playlist);
  }
};

// Function to return sum of hh:mm time
function timeConvert(times){
  let hours = 0;
  let minutes = 0;
  times.forEach(function(i){
    var timeSplit = i.split(':');
    let newHr = Number(timeSplit[0]);
    hours += newHr;
    let newMin = Number(timeSplit[1]);
    minutes += newMin;
  });
  let minuteOfHour = Math.floor(minutes / 60);
  let minutesLeft = minutes % 60;
  hours += minuteOfHour;
  const totalTime = hours +':'+ minutesLeft;
  return totalTime;
}

// Create instance of Library
var myLibrary = new Library('John Library', 'John');
console.log('Library Instance =>', myLibrary, '\n');

// Create instance of track
var peggySue = new Track('Peggy Sue', 5, '2:40');
console.log('Track Instance =>', peggySue, '\n');
var lovingYou = new Track('Loving You', 2, '2:10');
console.log('Track Instance =>', lovingYou, '\n');
var tooSexy = new Track('I am too Sexy', 3, '5:50');
console.log('Track Instance =>', tooSexy, '\n');

// Create instace of playlist
var myPlaylist = new Playlist('My Playlist');
console.log('Playlist Instance =>', myPlaylist, '\n');

// Pushing track into playlist
myPlaylist.addTrack(peggySue);
myPlaylist.addTrack(lovingYou);
myPlaylist.addTrack(tooSexy);

console.log('Added track to playlist =>', myPlaylist, '\n');

// Pushing playlist into track
myLibrary.addPlaylist(myPlaylist);
console.log('Added playlist to library=>', myLibrary.playlist[0], '\n');

//
myPlaylist.totalDuration();
myPlaylist.overallRating();
// console.log('overallRating =>', myPlaylist)

