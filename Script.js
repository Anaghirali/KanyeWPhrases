
let btn = document.getElementById('btn');
var xmlhttp = new XMLHttpRequest();
function exibir(){



xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       
      var Exquote = JSON.parse(this.responseText);



       document.getElementById("quote").innerHTML = (Exquote[Math.floor(Math.random() * Exquote.length)]);
    }
};
xmlhttp.open("GET", "quotes.txt", true);
xmlhttp.send();}
    