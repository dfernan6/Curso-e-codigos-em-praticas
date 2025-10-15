// Lista de arquivos de áudio
const playlist = [
  'audios/1.mp3',
  'audios/2.mp3',
  'audios/3.mp3',
  'audios/4.mp3',
  'audios/5.mp3',
  'audios/6.mp3',
  'audios/7.mp3',
  'audios/8.mp3',
  'audios/9.mp3',
  'audios/10.mp3'
];

let currentTrack = 0;
let isPlaying = false;
const audio = new Audio(playlist[currentTrack]);

// Elementos DOM
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const playPauseBtn = document.getElementById('playPauseBtn');
const backBtn = document.getElementById('backBtn');
const forwardBtn = document.getElementById('forwardBtn');
const h1 = document.querySelector('h1');

function updateChapterTitle() {
  const chapterNumber = currentTrack + 1;
  h1.innerText = `Capítulo ${chapterNumber}`;
}

// Alternar ícones
function updateIcons() {
  if (isPlaying) {
    playIcon.classList.add('hidden');
    pauseIcon.classList.remove('hidden');
  } else {
    playIcon.classList.remove('hidden');
    pauseIcon.classList.add('hidden');
  }
}

// Tocar áudio
function playAudio() {
  audio.play();
  isPlaying = true;
  updateIcons();
}
updateChapterTitle();

// Pausar áudio
function pauseAudio() {
  audio.pause();
  isPlaying = false;
  updateIcons();
}

// Alternar entre play e pause
playPauseBtn.addEventListener('click', () => {
  if (isPlaying) {
    pauseAudio();
  } else {
    playAudio();
  }
});

// Voltar faixa
backBtn.addEventListener('click', () => {
  audio.pause();
  currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
  audio.src = playlist[currentTrack];
  updateChapterTitle();
  playAudio();
});

// Avançar faixa
forwardBtn.addEventListener('click', () => {
  audio.pause();
  currentTrack = (currentTrack + 1) % playlist.length;
  audio.src = playlist[currentTrack];
  updateChapterTitle();
  playAudio();
});

