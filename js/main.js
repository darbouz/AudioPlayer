var songs = ["Alan Walker - Faded (Lyrics Video).mp3", "Ed Sheeran - Shape of You [Official Video].mp3", "muse - butterflies and hurricanes - lyrics.mp3"];

var poster = ["", "", ""];

var songTitle = document.getElementById("songTitle");
var fillBar = document.getElementById('fill');

var song = new Audio();
var currentSong = 0;

window.onload = playSong;

function playSong() {
  song.src = "audio/" + songs[currentSong];
  songTitle.textContent = songs[currentSong];
  song.play();
}

function PlayOrPauseSong() {
  if (song.paused) {
    song.play();
    document.getElementById("play").textContent = "||";
  } else {
    song.pause();
    document.getElementById("play").textContent = "PLAY";
  }
}

song.addEventListener('timeupdate', function () {
  var position = song.currentTime / song.duration;
  fillBar.style.width = position * 100 + '%';
  if (song.currentTime == song.duration) {
    next();
  }
});

function next() {
  currentSong++;
  if (currentSong > 2) {
    currentSong = 0;
  }

  for (var i = 0; i < document.getElementsByTagName("img").length; i++) {
    document.getElementsByTagName("img")[i].setAttribute("src", "img/" + (currentSong + 1) + ".jpg");
  }
  playSong();
  document.getElementById("play").textContent = "||";
}

function prev() {
  currentSong--;
  if (currentSong < 0) {
    currentSong = 2;
  }
  for (var i = 0; i < document.getElementsByTagName("img").length; i++) {
    document.getElementsByTagName("img")[i].setAttribute("src", "img/" + (currentSong + 1) + ".jpg");
  }
  playSong();
  document.getElementById("play").textContent = "||";
}