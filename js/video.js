
// office hour questions
// what is the volume information?
// queryselector for buttons not working. Maybe .js file was linked incorrecty
// skip requirement log location: time after skip or pre-skip to be logged?



//TODO fix selecting video, returning null but object type
var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
});


// play video //
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
});


// pause video
document.querySelector("#pause").addEventListener("click", function() {
	video.pause()
	console.log("Pause Video");
});


// slow down video
document.querySelector("#slower").addEventListener("click", function() { 
	video.playbackRate *=  0.9;
	console.log(video.playbackRate);
	console.log( "Current speed is: " + String((video.playbackRate.toFixed(2) * 100 ))  + "%")
	//console.log("video speed: " + String( (video.playbackrate  * 100) ) + "%");
});

// speed up video
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1.1; 
	console.log(video.playbackRate);
	console.log( "Current speed is: " + String((video.playbackRate.toFixed(2) * 100 ))  + "%")
	//console.log("video speed: " + String( (video.playbackrate  * 100) ) + "%");
});

// skip video
//document.querySelector("#pause").addEventListener("click", function() {
//	video.e = curRate - 0.5
//	console.log("Pause Video");
//});

// oldstyle video
document.querySelector("#vintage").addEventListener("click", function() {
	video.className = "oldSchool"
	console.log(video.className)
})

// original style the video
document.querySelector("#orig").addEventListener("click", function() {
	video.className = "video"
	console.log(video.className)
	console.log("this")
})





