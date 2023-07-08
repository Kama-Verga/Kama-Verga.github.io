
var Boom = new Howl({
  src: ['Audio/Boom.mp3']
});

var Tick = new Howl({
  src: ['Audio/Ticktack.mp3']
});

let list = [];
let OldList = [];
let button = document.getElementById("#NextButton");

fetch('Database.csv')
.then(response => response.text())
.then(data => {
  const rows = data.split('\n');
  for(let i = 0; i < rows.length; i++){
    list.push (rows[i]);
    console.log(list[i].testo);
  }
});

function playAudioLoop(n) {
  if(n > 0){ 
    Tick.play();
    setTimeout(function() {
      playAudioLoop(n - 1); // Richiama la funzione per la prossima iterazione con un ritardo
    }, 3.1 * 1000);
  }
}

var bool = true;

function Next(){
  if(bool){
    bool = false;
    var i;
    do {
      i = Math.floor(Math.random() * list.length);    
    } while (OldList.includes(i) && OldList.length < list.length -1);
    OldList.push(i);
    document.querySelector("#text").innerHTML = list[i];
    var n = Math.floor(Math.random() * 11);
    n = n+1;

    let Sn = n;
    playAudioLoop(n);

    setTimeout(function() {
      Boom.play();
      bool = true;
    }, 3.1 * Sn * 1000);
  }
}