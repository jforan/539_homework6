var video;

function getVid(){
	video = document.querySelector("#myVideo");
	document.querySelector('#volume').innerHTML = video.volume * 100;
}

function playVid() {
	video.play();
	console.log("Play Video");
}

function pauseVid() {
	video.pause();
	console.log("Pause Video");
}

function decreaseSpeed() {
	var speedDown = 1;
	var speedDown = video.playbackRate += speedDown * (-.2);
  console.log("Speed is " + speedDown);
}

function increaseSpeed() {
	var speedUp = 1;
	var speedUp = video.playbackRate += speedUp * (.25);
	console.log("Speed is " + speedUp);
}

// help with skip ahead https://stackoverflow.com/questions/36731230/how-to-fast-forward-or-rewind-an-html5-video-to-a-certain-time-point
function skipAhead() {
	if (video.currentTime + 60 > video.duration) {
		video.load();
		video.play();
		video.playbackRate = 1;
	}
	else {
		video.currentTime += 60;
	}
	console.log("Current location is " + video.currentTime );
}

function mute() {
	if (video.volume !== 0){
		video.volume = 0;
		document.querySelector('#mute').innerHTML = 'Unmute';
		console.log("Muted");
	}
	else {
		video.volume = 1;
		document.querySelector('#mute').innerHTML = 'Mute';
		console.log("Unmuted");
	}
}


// help with slider from https://stackoverflow.com/questions/31926221/video-volume-slider-in-html5-and-javascript & https://www.developphp.com/video/JavaScript/Audio-Seek-and-Volume-Range-Slider-Tutorial
function changeVolume() {
	var volumeSlider = document.getElementById('volumeSlider');
	video.volume = volumeSlider.value / volumeSlider.max;
	document.querySelector('#volume').innerHTML = volumeSlider.value;
	console.log("Volume is " + volumeSlider.value);
}


function gray() {
	video.style.filter = "grayscale(100%)";
	console.log("In grayscale")
}

function color() {
	video.style.filter = "grayscale(0%)";
	console.log("In color")
}
