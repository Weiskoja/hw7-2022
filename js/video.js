
// office hour questions
// what is the volume information?
// queryselector for buttons not working. Maybe .js file was linked incorrecty
// skip requirement log location: time after skip or pre-skip to be logged?



//TODO fix selecting video, returning null but object type
var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	console.log(typeof(video));
	console.log(video);
});


// play video //
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
});


// pause video
//document.querySelector("#pause").addEventListener("click", function() {
//	video.pause()
//	console.log("Pause Video");
//});


// slow down video
//document.querySelector("#slower").addEventListener("click", function() {
//	video.playbackrate = curRate - 0.5
//	console.log("Pause Video");
//});

// speed up video
//document.querySelector("#faster").addEventListener("click", function() {
//	video.playbackrate = curRate + 0.5
//	console.log("Pause Video");
//});

// skip video
//document.querySelector("#pause").addEventListener("click", function() {
//	video.e = curRate - 0.5
//	console.log("Pause Video");
//});





