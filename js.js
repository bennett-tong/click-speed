function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function getRandomNumber(a,b){
    return Math.floor(Math.random() * a)+b;

}
var divSize = getRandomNumber(200,150);
var divCircle = (Math.random() < 0.5) * 50;
var leftMargin = getRandomNumber(400,0);
var topMargin = getRandomNumber(400,0);
//alert(divCircle + " , "+ divSize +" "+ leftMargin +" "+ topMargin);

var start = new Date();
var waitTime = 0;
function restart(){
    document.getElementById("clickable").style.backgroundColor = getRandomColor();
    document.getElementById("clickable").style.margin = topMargin+"px " + "0 0 " + leftMargin+"px";
    document.getElementById("clickable").style.height = divSize + "px";
    document.getElementById("clickable").style.width = divSize + "px";
    document.getElementById("clickable").style.borderRadius = divCircle + "%";
    document.getElementById("clickable").style.display = "block";
    start = new Date();
    document.getElementById("wait").innerHTML = "The latest block took " + (waitTime/1000).toFixed(2) + "s to appear!";
    
    
}

function restartLater(){
    setTimeout(restart, waitTime);
    
}

document.getElementById("clickable").onclick = function(){
    var end = new Date();
    var time = ((end - start) / 1000).toFixed(2);
    document.getElementById("result").innerHTML = "Your time was "+ time + "s.";
    divSize = getRandomNumber(200,150);
    divCircle = (Math.random() < 0.5) * 50;
    leftMargin = getRandomNumber(400,0);
    topMargin = getRandomNumber(400,0);
    
    document.getElementById("clickable").style.display = "none";
    waitTime = (Math.random() * 3000);
    restartLater();
}