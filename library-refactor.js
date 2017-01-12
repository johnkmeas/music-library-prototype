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
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
//console.log(library.playlists)

var printPlaylists = function (list) {
    var playlistNames = list.playlists;

    for(var item in playlistNames){
      var trackName = playlistNames[item].name;
      var trackCount = playlistNames[item].tracks.length;

      console.log(item + ':',trackName, '-', trackCount, 'tracks')
    }
}
// printPlaylists(library)

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function (list) {
  var tracks = list.tracks

  for(var item in tracks){
    var trackId = tracks[item].id;
    var trackName = tracks[item].name;
    var trackArtist = tracks[item].artist;
    var trackAlbum = tracks[item].album;

    console.log(trackId+ ':', trackName, 'by', trackArtist, '(' + trackAlbum + ')')
  }
}
// printTracks(library)

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var tracks = library.playlists[playlistId].tracks
  var playListName = library.playlists[playlistId].name
  var numberOfTracks = tracks.length

  console.log(playlistId+':', playListName, '-', numberOfTracks, 'tracks');

  for(var item in tracks){
    var keyOfTrack = tracks[item]
    var trackObj = library.tracks[keyOfTrack]

    console.log(trackObj.id+ ':', trackObj.name, 'by', trackObj.artist, '(' + trackObj.album + ')')
  }

}
// printPlaylist('p01')

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  var playlist = library.playlists[playlistId]
  var tracks = playlist.tracks
  tracks.push(trackId)
  console.log(playlist)
}

// addTrackToPlaylist('t03', 'p01')

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// adds a track to the library

var addTrack = function (name, artist, album) {

  var newTrack = {
    id: 't0' + uid(),
    name: name,
    artist: artist,
    album: album
  }

  //Generates the next track numebr in consistent format
  var addKeys = Number(Object.keys(library.tracks).length) + 1
  var addId = 't0' + addKeys;
  var newId = newTrack.id

  library.tracks[addId] =  newTrack
  console.log(library.tracks)
}

//Some tracks to add to library for testing
var buddy = 'Buddy Holly';
var peggySue = 'Peggy Sue';
var buddyAlbum = 'Best of Buddy Holly and the Crickets'

var james = 'James Brown';
var feelGood = 'I feel Good';
var jamesAlbum = 'Best of James Brown';

// addTrack(peggySue, buddy, buddyAlbum)
// addTrack(feelGood, james, jamesAlbum)




// adds a playlist to the library

var addPlaylist = function (name) {
  //Generates next playlist number in consistent format
  var addKeys = Number(Object.keys(library.playlists).length) + 1
  var addId = 'p0' + addKeys;
  var newPlayList = {
    id: 'p0'+ uid(),
    name: name,
    tracks:[]
  }

  library.playlists[addId] =  newPlayList
  console.log(library.playlists)
}

//Some Playlists to add for testing
var myPlayList = 'John\s Rockabilly';
var myPlayList2 = 'Chiptunes'

addPlaylist(myPlayList)
console.log('-------------')
addPlaylist(myPlayList2)


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
