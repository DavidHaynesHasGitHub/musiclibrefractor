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

var printPlaylists = function() {
  var playlistList = '';

  for (var printPlay in library.playlists){
      var id = library.playlists[printPlay].id
      var name = library.playlists[printPlay].name
      var tracks = library.playlists[printPlay].tracks

      playlistList += id +': ' + name + " - " + tracks.length + ' tracks' + '\n'
    }

    return playlistList
}

console.log(printPlaylists())



// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  var trackList = '';

  for (var tList in library.tracks){
      var id = library.tracks[tList].id
      var name = library.tracks[tList].name
      var artist = library.tracks[tList].artist
      var album = library.tracks[tList].album

      trackList += id +': ' + name + ' by ' + artist + ' ' + album + ' tracks' + '\n'
    }

    return trackList
}
console.log(printTracks())

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)


var printPlaylist = function(playListId) {

    var playId = playListId
        var id = library.playlists[playId].id
        console.log(id);
        var tracks = library.playlists[playId].tracks
        console.log(tracks);
        var name = library.playlists[playId].name
        console.log(name);

    }

console.log(printPlaylist('p01'))


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {

}


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {

}


// adds a playlist to the library

var addPlaylist = function (name) {

}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}
