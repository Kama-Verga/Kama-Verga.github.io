var Boom = new Howl({
  src: ['Boom.mp3']
});

var Tick = new Howl({
  src: ['Ticktack.mp3']
});

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
  Boom.play();
  Tick.play();
}

function Next(){
  playAudioLoop();
  var i;
  do {
   i = Math.floor(Math.random() * list.length);    
  } while (OldList.includes(i) && OldList.length < list.length -1);
  OldList.push(i);
  document.querySelector("#text").innerHTML = list[i];

}