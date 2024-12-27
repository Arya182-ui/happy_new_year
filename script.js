// Countdown Timer
const countdown = document.getElementById('countdown');
const newYear = new Date('January 1, 2025 00:00:00').getTime();
const interval = setInterval(() => {
  const now = new Date().getTime();
  const distance = newYear - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  if (distance < 0) {
    clearInterval(interval);
    countdown.innerHTML = "Happy New Year!";
  }
}, 1000);

// Celebrate Button
document.getElementById('celebrateBtn').addEventListener('click', () => {
  for (let i = 0; i < 150; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('sparkle');
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.top = `${Math.random() * 100}%`;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 1500);
  }
  const audio = new Audio('hapy_new_year.mp3');
  audio.play();
});

// Greeting Message
document.getElementById('greetBtn').addEventListener('click', () => {
  const userName = document.getElementById('userName').value;
  const greetingMessage = document.getElementById('greetingMessage');
  greetingMessage.innerHTML = `Welcome, ${userName}! Wishing you a Happy New Year 2025! 🎉`;
});
