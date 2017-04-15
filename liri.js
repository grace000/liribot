// Grabs the keys
const keys = require("./keys.js");

//use command-line to supply search keyword
// const query = process.argv[2].replace('-','').toLowerCase();



var action = process.argv[2];

// We will then create a switch-case statement.
// The switch-case will direct which function gets run.
switch (action) {
  case "spotify-this-song":
    Spotify();
    break;

  case "movie-this":
    movie();
    break;

  case "my-tweets":
    myTweets();
    break;

  case "do-what-it-says":
    doIt();
    break;
}

 function myTweets() {
	console.log("tweets here");

};


function Spotify(options) {
	this.artist = options.artist;
	this.songName = options.songName;
	this.preview = options.preview;
	this.album = options.album;
	this.printSong = function () {
		console.log(this.artist);
		console.log(this.songName);
		console.log(this.preview);
		console.log(this.album);
	};
};

var urlacher = new Spotify ({
	artist: "urlacher",
	songName: "linebacker",
	preview: 7,
	album: 10
});

urlacher.printSong();

// my-tweets
// spotify-this-song
// movie-this
// do-what-it-says