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



// Adding an event listener to the button to toggle play/pause for each song
document.getElementById('playButton1').addEventListener('click', function() {
    // Getting the audio elements for each song
    const audio1 = document.getElementById('audio1');
    const audio2 = document.getElementById('audio5');
    const audio3 = document.getElementById('audio3');

    // Toggling play/pause for the first song
    if (audio1.paused) {
        audio1.play();
    } else {
        audio1.pause();
    }

    // Toggling play/pause for the second song
    if (audio2.paused) {
        audio2.play();
    } else {
        audio2.pause();
    }

    // Toggling play/pause for the third song
    if (audio3.paused) {
        audio3.play();
    } else {
        audio3.pause();
    }
});


// Adding an event listener to the button to toggle play/pause for each song
document.getElementById('playButton2').addEventListener('click', function() {
    // Getting the audio elements for each song
    const audio1 = document.getElementById('audio4');
    const audio2 = document.getElementById('audio2');
    const audio3 = document.getElementById('audio9');

    // Toggling play/pause for the first song
    if (audio1.paused) {
        audio1.play();
    } else {
        audio1.pause();
    }

    // Toggling play/pause for the second song
    if (audio2.paused) {
        audio2.play();
    } else {
        audio2.pause();
    }

    // Toggling play/pause for the third song
    if (audio3.paused) {
        audio3.play();
    } else {
        audio3.pause();
    }
});

// Adding an event listener to the button to toggle play/pause for each song
document.getElementById('playButton3').addEventListener('click', function() {
    // Getting the audio elements for each song
    const audio1 = document.getElementById('audio7');
    const audio2 = document.getElementById('audio8');
    const audio3 = document.getElementById('audio6');

    // Toggling play/pause for the first song
    if (audio1.paused) {
        audio1.play();
    } else {
        audio1.pause();
    }

    // Toggling play/pause for the second song
    if (audio2.paused) {
        audio2.play();
    } else {
        audio2.pause();
    }

    // Toggling play/pause for the third song
    if (audio3.paused) {
        audio3.play();
    } else {
        audio3.pause();
    }
});


