
//["Token_W.png", "Token_B.png"];

var C_D = 0;
function run(n){
    var TE = Math.floor(Math.random()*(n+1));
    var img = document.createElement("img");
    img.src = "Dice/"+n+".png";
    img.className = "DiceMG";
    img.id = C_D;
    C_D++;
    document.getElementById("dice-wrapper").appendChild(img);
}




