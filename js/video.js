
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
})

// original style the video
document.querySelector("#orig").addEventListener("click", function() {
	video.className = "video"
})

// set volume
document.querySelector("#slider").addEventListener("input", function() {
	var sliderVal = document.querySelector("#slider").value;
	video.volume = sliderVal * 0.01;
	document.querySelector("#volume").innerHTML = String(sliderVal) + "%";

})



// mute
document.querySelector("#mute").addEventListener("click", function() {
	if (!video.muted){
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute"
		document.querySelector("#slider").value = 0;
		document.querySelector("#volume").innerHTML = "0%"
	}	
	else{
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute"
		document.querySelector("#slider").value = video.volume * 100;
		document.querySelector("#volume").innerHTML = String(video.volume * 100) + "%";
	}
	
})


//var curVol = video.volume
	//if (!(video.muted)){
		//document.querySelector("#slider").value = 0;
		//video.volume = 0;
		//console.log(video.volume);
	//}
	//else{
		//document.querySelector("#slider").value = curVol;
		//video.volume = curVol;
		//console.log(video.volume);
	//}
