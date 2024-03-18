document.getElementById('playImage1').addEventListener('click', function() {
    const audio = document.getElementById('audioTrack1');
    togglePlayback(audio);
});

document.getElementById('playImage2').addEventListener('click', function() {
    const audio = document.getElementById('audioTrack2');
    togglePlayback(audio);
});

document.getElementById('playImage3').addEventListener('click', function() {
    const audio = document.getElementById('audioTrack3');
    togglePlayback(audio);
});

document.getElementById('playImage4').addEventListener('click', function() {
    const audio = document.getElementById('audioTrack4');
    togglePlayback(audio);
});

function togglePlayback(audio) {
    if (audio.paused || audio.ended) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0; 
    }
}
