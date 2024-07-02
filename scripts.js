function updateTimeAndDay() {
    const timeElement = document.getElementById('time');
    const dayElement = document.getElementById('day');

    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });

    timeElement.textContent = utcTime;
    dayElement.textContent = dayOfWeek;
}

document.addEventListener('DOMContentLoaded', updateTimeAndDay);
