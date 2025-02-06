function updateUTCTime() {
    const now = new Date();
    const utcTime = now.toUTCString(); // Get UTC time as a readable string
    document.getElementById("currentTimeUTC").textContent = utcTime;
}

// Run function immediately to set the time
updateUTCTime();

// Update the time every second
setInterval(updateUTCTime, 1000);
