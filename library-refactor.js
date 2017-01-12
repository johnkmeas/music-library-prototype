var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists : function (list) {
    var playlistNames = this.playlists;

    for(var item in playlistNames){
      var trackName = playlistNames[item].name;
      var trackCount = playlistNames[item].tracks.length;

      console.log(item + ':',trackName, '-', trackCount, 'tracks')
    }
  },
  printTracks: function (list) {
    var tracks = this.tracks

    for(var item in tracks){
      var trackId = tracks[item].id;
      var trackName = tracks[item].name;
      var trackArtist = tracks[item].artist;
      var trackAlbum = tracks[item].album;

      console.log(trackId+ ':', trackName, 'by', trackArtist, '(' + trackAlbum + ')')
    }
  },
  printPlaylist: function (playlistId) {
    var tracks = library.playlists[playlistId].tracks
    var playListName = library.playlists[playlistId].name
    var numberOfTracks = tracks.length

    console.log(playlistId+':', playListName, '-', numberOfTracks, 'tracks');

    for(var item in tracks){
      var keyOfTrack = tracks[item]
      var trackObj = library.tracks[keyOfTrack]

      console.log(trackObj.id+ ':', trackObj.name, 'by', trackObj.artist, '(' + trackObj.album + ')')
    }

  },
  addTrackToPlaylist: function (trackId, playlistId) {
    var playlist = this.playlists[playlistId]
    var tracks = playlist.tracks
    tracks.push(trackId)
    console.log(playlist)
  },
  addTrack: function (name, artist, album) {
    var newTrack = {
      id: 't0' + uid(),
      name: name,
      artist: artist,
      album: album
    }

    //Generates the next track numebr in consistent format
    var addKeys = Number(Object.keys(this.tracks).length) + 1
    var addId = 't0' + addKeys;
    var newId = newTrack.id

    this.tracks[addId] =  newTrack
    console.log(this.tracks)
  },
  addPlaylist: function (name) {
    //Generates next playlist number in consistent format
    var that = this.playlists
    var addKeys = Number(Object.keys(that).length) + 1
    var addId = 'p0' + addKeys;
    var newPlayList = {
      id: 'p0'+ uid(),
      name: name,
      tracks:[]
    }

    that[addId] =  newPlayList
    console.log(that)
  }

}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
//console.log(library.playlists)

library.printPlaylists()

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

library.printTracks()

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
//console.log(Object.keys(library.playlists)[0])

 var playlistInput = Object.keys(library.playlists)[0];
 var trackInput = Object.keys(library.tracks)[2];
 library.printPlaylist(playlistInput)

// adds an existing track to an existing playlist

library.addTrackToPlaylist(trackInput, playlistInput)

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// adds a track to the library

//Some tracks to add to library for testing
var buddy = 'Buddy Holly';
var peggySue = 'Peggy Sue';
var buddyAlbum = 'Best of Buddy Holly and the Crickets'

var james = 'James Brown';
var feelGood = 'I feel Good';
var jamesAlbum = 'Best of James Brown';

library.addTrack(peggySue, buddy, buddyAlbum)
library.addTrack(feelGood, james, jamesAlbum)
// adds a playlist to the library

//Some Playlists to add for testing
var myPlayList = 'John\s Rockabilly';
var myPlayList2 = 'Chiptunes'

library.addPlaylist(myPlayList)
console.log('-------------')
library.addPlaylist(myPlayList2)


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// var printSearchResults = function(query) {
//   var str = 'James'
//   var tracks = library.tracks;
//   for(var item in tracks){
//     //.log(item)
//     var trackName = library.tracks[item].name
//     var trackArtist = library.tracks[item].artist
//     var trackAlbum = library.tracks[item].album
//     console.log(trackName)
//     console.log(trackArtist)
//     console.log(trackAlbum)
//   }
//   //console.log(str.search(query))
// }

// printSearchResults('Monkey')
