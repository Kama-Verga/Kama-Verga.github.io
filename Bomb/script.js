
var Tick = document.getElementById("#TickTack")
var Boom = document.getElementById("#Boom")

let list = [];
let OldList = [];

fetch('Database.csv')
.then(response => response.text())
.then(data => {
  const rows = data.split('\n');
  for(let i = 0; i < rows.length; i++){
    list.push (rows[i]);
    console.log(list[i].testo);
  }
});

function playAudioLoop() {
  Tick.play(); // Avviamo la riproduzione dell'audio

  // Impostiamo un timeout per fermare l'audio dopo un certo periodo di tempo
  setTimeout(function() {
    Tick.pause(); // Fermiamo la riproduzione dell'audio
    Tick.currentTime = 0; // Resettiamo il tempo di riproduzione
  }, Tick.duration * 5 * 1000); // Moltiplichiamo la durata dell'audio per il numero di volte in cui deve essere riprodotto in loop

  Boom.play();
}

function Next(){
  var i;
  do {
   i = Math.floor(Math.random() * list.length);    
  } while (OldList.includes(i) && OldList.length < list.length -1);
  OldList.push(i);
  document.querySelector("#text").innerHTML = list[i];
  playAudioLoop();
}