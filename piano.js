
const keys = document.querySelectorAll('.key');
const playButton = document.getElementById('playButton');
const stopButton = document.getElementById('stopButton');
const noteNameDisplay = document.getElementById('noteName');
const noteCounterDisplay = document.getElementById('noteCounter');
const tuneButtons = document.querySelectorAll('[data-tune]');

const context = new (window.AudioContext || window.webkitAudioContext)();
const oscillators = {};

const notes = {
    'C': 261.63,
    'C#': 277.18,
    'D': 293.66,
    'D#': 311.13,
    'E': 329.63,
    'F': 349.23,
    'F#': 369.99,
    'G': 392.00,
    'G#': 415.30,
    'A': 440.00,
    'A#': 466.16,
    'B': 493.88
};

const noteCounters = {};
let currentTuneTimeouts = [];

keys.forEach(key => {
    key.addEventListener('click', () => {
        const note = key.getAttribute('data-note');
        playSound(note);
        noteNameDisplay.textContent = `Note: ${note}`;
    });
});

tuneButtons.forEach(button => {
    button.addEventListener('click', () => {
        stopTune();
        const tune = button.getAttribute('data-tune');
        playTune(tune);
    });
});

stopButton.addEventListener('click', () => {
    stopTune();
    noteNameDisplay.textContent = '';
});

function playSound(note) {
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();

    // Find the corresponding key element based on the data-note attribute
    const keyElement = document.querySelector(`.key[data-note="${note}"]`);

    // Apply a highlight effect to the key element
    keyElement.classList.add('highlight');

    oscillator.frequency.value = notes[note];
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);

    gainNode.gain.value = 0.5;

    oscillator.start(context.currentTime);
    oscillator.stop(context.currentTime + 0.5);

    // Remove the highlight effect after a short delay (e.g., 500ms)
    setTimeout(() => {
        keyElement.classList.remove('highlight');
    }, 500);
}

function playTune(tune) {
    const tuneNotes = tunes[tune];
    let delay = 0;

    tuneNotes.forEach(note => {
        const timeout = setTimeout(() => {
            playSound(note);
            noteNameDisplay.textContent = `Note: ${note}`;
        }, delay);
        currentTuneTimeouts.push(timeout);
        delay += 500;
    });
}

function stopTune() {
    currentTuneTimeouts.forEach(timeout => clearTimeout(timeout));
    currentTuneTimeouts = [];
}

playButton.addEventListener('click', () => playTune('happyBirthday'));

const tunes = {
    'happyBirthday': ['C', 'C', 'D', 'C', 'F', 'E', 'C', 'C', 'D', 'C', 'G', 'F', 'C', 'C', 'C', 'A', 'F', 'E', 'D', 'B', 'B', 'A', 'F', 'G', 'F'],
    'twinkle': ['C', 'C', 'G', 'G', 'A', 'A', 'G', 'F', 'F', 'E', 'E', 'D', 'D', 'C', 'G', 'G', 'F', 'F', 'E', 'E', 'D', 'G', 'G', 'F', 'F', 'E', 'E', 'D', 'C', 'C', 'G', 'G', 'A', 'A', 'G', 'F', 'F', 'E', 'E', 'D', 'D', 'C'],
    'star': ['E', 'E', 'F', 'G', 'G', 'F', 'E', 'D', 'C', 'C', 'D', 'E', 'E', 'D', 'D', 'E', 'E', 'F', 'G', 'G', 'F', 'E', 'D', 'C', 'C', 'D', 'E', 'E', 'D', 'D', 'E', 'D', 'C', 'C', 'E', 'E', 'F', 'G', 'G', 'F', 'E', 'D', 'C', 'C', 'D', 'E', 'E', 'D', 'D', 'E'],
    'odejoy': ['E', 'E', 'F', 'G', 'G', 'F', 'E', 'D', 'C', 'C', 'D', 'E', 'E', 'D', 'D', 'E', 'E', 'F', 'G', 'G', 'F', 'E', 'D', 'C', 'C', 'D', 'E', 'D', 'C', 'D', 'E', 'F', 'F', 'E', 'F', 'G', 'E', 'F', 'G', 'G', 'F', 'E', 'D', 'C', 'C', 'D', 'E', 'E', 'D', 'D', 'E'],
    'einekleine': ['A', 'A', 'A', 'E', 'C#', 'E', 'F#', 'G#', 'G', 'A', 'A', 'A', 'E', 'C#', 'E', 'F#', 'G#', 'G', 'A', 'G#', 'F#', 'G#', 'A', 'F#', 'G#', 'A', 'A', 'A', 'E', 'C#', 'E', 'F#', 'G#', 'G', 'A', 'A', 'A', 'E', 'C#', 'E', 'F#', 'G#', 'G', 'A', 'G#', 'F#', 'G#', 'A', 'F#', 'G#', 'A', 'F#', 'G#'],
    'danube': ['E', 'E', 'F#', 'G', 'A', 'B', 'C#', 'D', 'B', 'C#', 'D', 'E', 'E', 'F#', 'G', 'A', 'B', 'A', 'G', 'F#', 'E', 'B', 'C#', 'D', 'E', 'E', 'F#', 'G', 'A', 'B', 'C#', 'D', 'B', 'C#', 'D', 'E', 'E', 'F#', 'G', 'A', 'B', 'A', 'G', 'F#', 'E', 'B', 'C#', 'D', 'E', 'D', 'C#', 'B'],
    'traviata': ['F#', 'G#', 'A', 'A#', 'A', 'G#', 'A', 'F#', 'G#', 'A', 'A#', 'A', 'G#', 'A', 'F#', 'G#', 'A', 'A#', 'A', 'G#', 'A', 'F#', 'G#', 'A', 'A#', 'A', 'G#', 'A', 'F#', 'G#', 'A', 'A#', 'A', 'G#', 'A', 'F#', 'G#', 'A', 'A#', 'A', 'G#', 'A', 'F#', 'G#', 'A', 'A#', 'A', 'G#', 'A', 'F#'],
    'valkyries': ['D', 'E', 'F#', 'G', 'A', 'B', 'C#', 'D', 'E', 'F#', 'G', 'A', 'B', 'C#', 'D', 'E', 'F#', 'G', 'A', 'B', 'C#', 'D', 'E', 'F#', 'G', 'A', 'B', 'C#', 'D', 'E', 'F#', 'G', 'A', 'B', 'C#', 'D', 'E', 'F#', 'G', 'A', 'B', 'C#', 'D', 'E', 'F#', 'G', 'A', 'B', 'C#', 'D', 'E', 'F#'],
    'cancan': ['E', 'D', 'C', 'D', 'E', 'E', 'E', 'E', 'F', 'G', 'A', 'B', 'C', 'B', 'A', 'G', 'F', 'E', 'E', 'E', 'E', 'F', 'G', 'A', 'B', 'C', 'B', 'A', 'G', 'F', 'E', 'E', 'C', 'B', 'A', 'B', 'C', 'C', 'C', 'C', 'D', 'E', 'F', 'G', 'A', 'G', 'F', 'E', 'D', 'C', 'C', 'C', 'C', 'D', 'E', 'F'],
    'furElise': ['E', 'D#', 'E', 'D#', 'E', 'B', 'D', 'C', 'A', 'A#', 'B', 'E', 'E', 'B', 'D', 'C', 'A', 'A#', 'B', 'E', 'E', 'E', 'D#', 'E', 'D#', 'E', 'B', 'D', 'C', 'A', 'A#', 'B', 'E', 'E', 'B', 'D', 'C', 'A', 'A#', 'B', 'E', 'E', 'E', 'D#', 'E', 'D#', 'E', 'B', 'D', 'C', 'A', 'A#', 'B'],
    'allaTurca': ['A', 'A', 'A', 'G#', 'E', 'E', 'E', 'A', 'A', 'A', 'G#', 'E', 'E', 'E', 'A', 'A', 'F#', 'F#', 'E', 'E', 'D', 'D', 'E', 'E', 'F#', 'F#', 'G#', 'G#', 'A', 'A', 'A', 'G#', 'E', 'E', 'E', 'A', 'A', 'A', 'G#', 'E', 'E', 'E', 'A', 'A', 'F#', 'F#', 'E', 'E', 'D', 'D', 'E', 'E']
};