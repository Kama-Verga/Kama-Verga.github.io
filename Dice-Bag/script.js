//["Token_W.png", "Token_B.png"];

var C_D = -1;
var C_D_Size = 0;
var tot = 0;
function run(n){
    var TE = (Math.floor(Math.random()*(n)))+1;
    var img = document.createElement("img");
    img.src = "Dice/"+n+"/"+TE+".png";
    img.className = "DiceMG";
    img.id = C_D;
    C_D++;
    tot = tot + TE;
    document.getElementById("dice-wrapper").appendChild(img);
    if(C_D%5 == 0 && C_D > 10) {
        increaseDive(70);
        C_D_Size = C_D_Size + 70;
    }
    document.querySelector("#tot").innerHTML = "Totale: " + tot;
}

function increaseDive(N) {
    var div = document.getElementById("Scatola");
    var heigt = div.offsetHeight;
    var Nheigt = heigt + N;
    div.style.height = Nheigt + "px";
}

function Resrt() {
    var parent = document.getElementById("dice-wrapper");
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
    increaseDive(-C_D_Size);    
    document.querySelector("#tot").innerHTML = "Totale: ";
    C_D = -1;
    C_D_Size = 0;
    tot = 0;
}
