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
var divSize = getRandomNumber(18,2);
var divCircle = (Math.random() < 0.5) * 50;
var leftMargin = getRandomNumber(400,0);
var topMargin = getRandomNumber(400,0);
//alert(divCircle + " , "+ divSize +" "+ leftMargin +" "+ topMargin);

var start = new Date();
var waitTime = 0;
var maxlag = 3;
var attempts = 0;
var avgTime = 0;
var bestTime = 99999999999999999999;
function restart(){
    document.getElementById("clickable").style.backgroundColor = getRandomColor();
    document.getElementById("clickable").style.margin = topMargin+"vw " + "0 0 " + leftMargin+"vw";
    document.getElementById("clickable").style.height = divSize + "vw";
    document.getElementById("clickable").style.width = divSize + "vw";
    document.getElementById("clickable").style.borderRadius = divCircle + "%";
    document.getElementById("clickable").style.display = "block";
    start = new Date();
    document.getElementById("wait").innerHTML = "The latest block took " + (waitTime/1000).toFixed(2) + "s to appear.";
    
    
}

function restartLater(){
    setTimeout(restart, waitTime);
    
}
document.getElementById("submitlag").onclick = function(){
    maxlag = document.getElementById("maxlag").value;
    alert("Lag time has been changed to "+maxlag+" seconds.")
}
document.getElementById("clickable").onclick = function(){
    var end = new Date();
    var time = +((end - start) / 1000).toFixed(2);
    avgTime = +(((avgTime * attempts) + time) / (attempts + 1)).toFixed(2);
    document.getElementById("avgTime").innerHTML = "Avg time: "+ avgTime+"s";
    attempts++;
    if (time < bestTime &&  attempts > 3){
        alert("You just set a new record of " + time + "s!!")
        bestTime = time;
    }
    else if(time < bestTime){
        bestTime = time;
    }
    document.getElementById("bestTime").innerHTML = "Best time: " + bestTime +"s";
    document.getElementById("result").innerHTML = "Your latest time was "+ time + "s!";
    document.getElementById("clickcount").innerHTML = attempts;

    divSize = getRandomNumber(20,2);
    divCircle = (Math.random() < 0.5) * 50;
    leftMargin = getRandomNumber(80,0);
    topMargin = getRandomNumber(40,0);
    
    document.getElementById("clickable").style.display = "none";
    waitTime = (Math.random() * maxlag * 1000);
    restartLater();
    
}
