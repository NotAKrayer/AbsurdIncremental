const songs = [
    "assets/music/protostargalaxies.mp3",
	"assets/music/protostarnewhorizon.mp3",
	"assets/music/armorofgod.mp3",
	"assets/music/genesis.mp3",
	"assets/music/winter.mp3"
];

const audio = new Audio();

audio.volume = 0.2; // volume

function startAudio() {
    // Set the source of the audio file
	if (audio.paused) {
	let currentSongIndex = Math.floor(Math.random() * songs.length);	
		
    audio.src = songs[currentSongIndex];

    // Play the audio
    audio.play();
	}
}

function switchSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length; // Loop back to the first song if reached the end
    audio.src = songs[currentSongIndex];
    audio.play();
}

function updateVolume() {
	const volume = document.getElementById("volumes").value;
	audio.volume = volume;
}

// Add event listener to start audio playback on user interaction
document.addEventListener('click', startAudio);

// Add event listener to switch to the next song when the current song ends
audio.addEventListener('ended', switchSong);

