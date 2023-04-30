
//["penality.png"];
var old = [];

class Card{
    constructor (titolo, dif, testo){
        this.titolo = titolo;
        this.dif = dif;
        this.testo = testo;
    }
}

let list = [];

fetch('Database.csv')
.then(response => response.text())
.then(data => {
  const rows = data.split('\n');
  for(let i = 0; i < rows.length; i++){
    const columns = rows[i].split(',');
    list.push(new Card (columns[0],columns[1],columns[2]));
    console.log(list[i].testo);
  }
});



function NextCard(){
    do {
        let Ncard = Math.floor(Math.random() * list.length);
    } while (old.includes(Ncard));
    old.push(NextCard);

    document.querySelector("#title").innerHTML = list[Ncard].titolo;
    AddDifficulty(parseInt(list[Ncard].dif));
    document.querySelector("#text").innerHTML = list[Ncard].testo;
}


function AddDifficulty(n){

    var parent = document.getElementById("penality");
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }

    for(var i = n; i>0; i--){
        var img = document.createElement("img");
        var temp = "penality.png";
        img.src = temp;
        img.id = "Card";
        document.getElementById("penality").appendChild(img);
    }
}