function toggleMusic(audioId) {
    const audioElement = document.getElementById(audioId);
    if (!audioElement) return; // Exit if the audio element is not found

    if (audioElement.paused || audioElement.ended) {
        audioElement.play();
    } else {
        audioElement.pause();
        audioElement.currentTime = 0; // Rewind the audio
    }
}
