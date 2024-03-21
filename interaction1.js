// Get all the buttons with the class 'music-btn'
const buttons = document.querySelectorAll('.music-btn');

// Add click event listeners to each button
buttons.forEach((button, index) => {
    button.addEventListener('click', function() {
        // Get the corresponding audio element based on the button's index
        const audio = document.getElementById('audio' + (index + 1));

        // Check if the audio element exists and is not null
        if (audio) {
            if (audio.paused) {
                // If audio is paused, play it
                audio.play();
            } else {
                // If audio is playing, pause it
                audio.pause();
            }
        }
    });
});