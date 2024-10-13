const audioRoom = new Audio("/assets/musique/0Doom_64_Main_Theme.mp3");
audioRoom.volume = .5;
const btn = {
  increase : document.querySelector('#set-volume-high'),
  decrease : document.querySelector('#set-volume-low'),
  pause : document.querySelector('#set-pause-music'),
  level : document.querySelector('#sound-level')
}

btn.level.textContent = Math.floor(audioRoom.volume * 100) + "%";

export const soundManager = {
  keydownManager : function() {
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case "Enter":
          audioRoom.play();
          break;
    
          case "Backspace":
          audioRoom.pause();
          break;
   
        case "NumpadAdd":
          console.log('Touche +', event.code);
          audioRoom.volume = Math.min(audioRoom.volume + 0.1, 1);
          break;
    
        case "NumpadSubtract":        
          audioRoom.volume = Math.max(audioRoom.volume - 0.1, 0);
          break;
    
        default:
          break;
      }
    })
  },

  clickManager : function () {
    document.addEventListener('click', (event) => {

      if (event.target === btn.increase) {
        audioRoom.volume = Math.min(audioRoom.volume + 0.1, 1);
        btn.level.textContent = Math.floor(audioRoom.volume * 100) + "%";

      } else if (event.target === btn.decrease) {
        audioRoom.volume = Math.max(audioRoom.volume - 0.1, 0);
        btn.level.textContent = Math.floor(audioRoom.volume * 100) + "%";

      }

      if (event.target === btn.pause) {
        if (audioRoom.paused) {
        audioRoom.play();

        } else {
          audioRoom.pause();

        }
      }
    })
  },

  play : function () {
    audioRoom.play();
  },

  setting : function () {
    const getSetting = document.querySelector(".sound-setting-wrapper");
    
    getSetting.addEventListener('clic', () => {
      
    })
  }
}