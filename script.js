
//["Token_W.png", "Token_B.png"];
let images = [];
var Twhite = 0;
var Tblack = 0;
var conf = false;

var ANtoken = document.querySelectorAll("button");


function addBlack(){
    Tblack++;    
    document.querySelector("#blackT").innerHTML = Tblack;
}
function minusBlack(){
    if(Tblack > 0){Tblack--;}
    document.querySelector("#blackT").innerHTML = Tblack;
}

function addWhite(){
    Twhite++;    
    document.querySelector("#whiteT").innerHTML = Twhite;
}
function minusWhite(){
    if(Twhite > 0){Twhite--;}    
    document.querySelector("#whiteT").innerHTML = Twhite;
}

function con(){
    if(conf) {
        document.querySelector("#conf").innerHTML = "conf: off";
        document.querySelector("#conf").style.backgroundColor = "black";
        conf = false;
    }else{ 
        document.querySelector("#conf").innerHTML = "conf: on";
        document.querySelector("#conf").style.backgroundColor = "red";
        conf = true;
    }
}


function run(n){
    ANtoken.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        ANtoken.forEach(function(die){
            die.classList.remove("shake");
        });

    var parent = document.getElementById("dice-wrapper");
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }

    for(var i = images.length; i>0; i--){
        images.pop();
    }

    for(var i = Tblack; i>0; i--){
        images.push("Token_B.png");
    }

    for(var i = Twhite; i>0; i--){
        if(conf){
            if (0.5 > Math.random()){
                images.push("Token_B.png");
            }else{
                images.push("Token_W.png");
            }
        }else images.push("Token_W.png");
    }


    images = images.sort((a, b) => 0.5 - Math.random());
    images = images.sort((a, b) => 0.5 - Math.random());

    if(n > Tblack+Twhite){
        for(var i = images.length; i>0; i--){
            var img = document.createElement("img");
            var temp = images.pop();
            img.src = temp;
            img.id = "Token";
            document.getElementById("dice-wrapper").appendChild(img);
            images = images.sort((a, b) => 0.5 - Math.random());
        }
    }else {
        for(var i = n; i > 0; i--){
            var TE = Math.floor(Math.random()*images.length);
            var img = document.createElement("img");
            var temp = images.pop();
            img.src = temp;
            img.id = "Token";
            document.getElementById("dice-wrapper").appendChild(img);
            images = images.sort((a, b) => 0.5 - Math.random());
        }
    }
    }, 500);
}




