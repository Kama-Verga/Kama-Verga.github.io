


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


function Next(){
    var i;
    do {
    i = Math.floor(Math.random() * list.length);    
    } while (OldList.includes(i) && OldList.length < list.length -1);
    OldList.push(i);
    document.querySelector("#text").innerHTML = i;
}