let sound = document.createElement('audio')
sound.id = 'audio'
sound.controls = ''
sound.src = 'assets/backsound.mp3'
sound.type = 'audio/mp3'
sound.muted = true;
document.body.appendChild(sound)

let mutedButton = document.getElementById('mutedBtn')

mutedButton.onclick = function (e) {
  if (sound.muted) {
    sound.muted = false;
    sound.play();
  } else {
    sound.muted = true;
    sound.pause();
  }
};
