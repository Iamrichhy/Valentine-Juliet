// ====== BACKGROUND MUSIC CONTROL ======
const music = document.getElementById('bg-music');
const muteBtn = document.getElementById('mute-btn');

// Play/pause toggle on user click
muteBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play().catch(() => {}); // catch autoplay errors
    muteBtn.textContent = 'Mute 🔇';
  } else {
    music.pause();
    muteBtn.textContent = 'Play Music 🎵';
  }
});

// Optional: auto-play on first user interaction anywhere on page
document.body.addEventListener('click', function startMusicOnce() {
  if (music.paused) {
    music.play().catch(() => {});
    muteBtn.textContent = 'Mute 🔇';
  }
  document.body.removeEventListener('click', startMusicOnce);
});

// ====== SMOOTH SCROLL FOR INTERNAL LINKS ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if(target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
