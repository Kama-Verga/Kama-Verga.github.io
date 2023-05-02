
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
    const columns = rows[i].split('-');
    list.push(new Card (columns[0],columns[1],columns[2]));
    console.log(list[i].testo);
  }
});

var Ncard = 0;

var Back = 0;

var ANCard = document.getElementById("myElement");

function NextCard(){
    element.classList.add("FlipC");
    Back = 0;
    do {
        Ncard = parseInt(Math.floor(Math.random() * list.length));
        console.log("estraggo il numero" + Ncard);
        console.log("old" + old.length);
        console.log("list" + list.length);
    } while (old.includes(Ncard) && old.length <= list.length-2);
    old.push(Ncard);
    console.log(Ncard);
    
    document.querySelector("#title").innerHTML = list[Ncard].titolo;
    AddDifficulty(parseInt(list[Ncard].dif));
    document.querySelector("#text").innerHTML = list[Ncard].testo;

    element.classList.remove("FlipC");

}

function BackCard(){
    let lastCard;
    console.log("valore back" + Back);

    if(old.length > 1){
        
        Back++;
        lastCard = old[(old.length - (Back+1))];
        
        console.log(lastCard);
        if(lastCard < 0) lastCard = old[0];
        console.log(lastCard);

        document.querySelector("#title").innerHTML = list[lastCard].titolo;
        AddDifficulty(parseInt(list[lastCard].dif));
        document.querySelector("#text").innerHTML = list[lastCard].testo;
        
        
    }else console.log("nessuna esecuzione");
    
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