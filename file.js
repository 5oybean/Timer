// Timer-Variablen
let timerInterval;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;  // Neue Variable für Stunden

// Elemente holen
const timerDisplay = document.getElementById('timerDisplay');
const startPauseButton = document.getElementById('startPauseButton');
const resetButton = document.getElementById('resetButton');

// Starten/Pausieren
startPauseButton.addEventListener('click', function() {
    if (isRunning) {
        // Wenn der Timer läuft, pausieren
        clearInterval(timerInterval);
        startPauseButton.textContent = 'Start';
    } else {
        // Wenn der Timer pausiert ist, starten
        timerInterval = setInterval(updateTime, 1000); // Timer läuft jede Sekunde
        startPauseButton.textContent = 'Pause';
    }
    isRunning = !isRunning;
});

// Zurücksetzen
resetButton.addEventListener('click', function() {
    clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;  // Zurücksetzen der Stunden
    timerDisplay.textContent = "00:00:00"; // Anzeige zurücksetzen
    startPauseButton.textContent = 'Start';
    isRunning = false;
});

// Zeit aktualisieren
function updateTime() {
    seconds++; // Jede Sekunde erhöhen

    if (seconds >= 60) { // Wenn 60 Sekunden erreicht sind
        seconds = 0;
        minutes++;  // Minuten erhöhen
    }
    if (minutes >= 60) { // Wenn 60 Minuten erreicht sind
        minutes = 0;
        hours++; // Stunden erhöhen
    }

    // Formatierung der Anzeige für Stunden, Minuten und Sekunden
    let displaySeconds = seconds < 10 ? '0' + seconds : seconds;
    let displayMinutes = minutes < 10 ? '0' + minutes : minutes;
    let displayHours = hours < 10 ? '0' + hours : hours; // Stunden auch zweiziffrig

    // Anzeige der Zeit im Format: Stunden:Minuten:Sekunden
    timerDisplay.textContent = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}
