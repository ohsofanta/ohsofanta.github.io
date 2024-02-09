autowatch = 1; // Automatically update the script in Max when saved

var metro; // Task for playing notes
var stopTimer; // Timer to stop the rhythm after a specified duration

// Define MIDI note probabilities
var noteProbabilities = {
    60: 0.15, // Middle C (C4) has a 15% chance of being chosen
    62: 0.15, // D4
    64: 0.15, // E4
    65: 0.15, // F4
    67: 0.15, // G4
    69: 0.1,  // A4
    71: 0.1,  // B4
    72: 0.05, // C5
    74: 0.05, // D5
    76: 0.05, // E5
    77: 0.05, // F5
    79: 0.05  // G5
};


// Function to choose a note based on the defined probabilities
function chooseNote() {
    var random = Math.random();
    var cumulative = 0;
    for (var note in noteProbabilities) {
        cumulative += noteProbabilities[note];
        if (random < cumulative) {
            return parseInt(note);
        }
    }
}

// Function to play a note
function playNote() {
    var note = chooseNote();
    outlet(0, [note, 100, 100]); // Send MIDI note, velocity, and duration
}

// Setup a metro object to trigger playNote in rhythm
function startRhythm(bpm, durationInMinutes) {
    if (metro) {
        metro.cancel(); // Ensure any existing metro task is cancelled before starting a new one
    }
    metro = new Task(playNote, this);
    metro.interval = 60000 / bpm; // Convert BPM to interval in ms
    metro.repeat(); // Start the metro
    
    // Calculate the duration in milliseconds
    var durationInMilliseconds = durationInMinutes * 60000;
    
    // Setup a timer to stop the rhythm after the specified duration
    if (stopTimer) {
        clearTimeout(stopTimer); // Clear any existing timer
    }
    // stopTimer = setTimeout(stopRhythm, durationInMilliseconds);
}

// Function to stop the rhythm
function stopRhythm() {
    if (metro) {
        metro.cancel(); // Stop the metro task if it exists
    }
    if (stopTimer) {
        clearTimeout(stopTimer); // Clear the stop timer
        stopTimer = null; // Reset the timer variable
    }
}

// Example of starting the rhythm for 2 minutes at 120 BPM
function list(bars, beatsPerBar, unitsPerBeat, tempo) {
   
    // Assuming 'unitsPerBeat' is a subdivision of a beat and does not directly affect the duration calculation in the context of BPM.
    // The total number of beats in the piece is bars multiplied by beats per bar.
    var totalBeats = bars * beatsPerBar;
    
    // The duration in minutes is the total number of beats divided by the tempo (BPM).
    var durationInMinutes = totalBeats / tempo;
    
    startRhythm(120, durationInMinutes); // Start playing notes at 120 BPM for 2 minutes
}
