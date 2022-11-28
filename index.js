var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImagesource1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImagesource1);


var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImagesource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImagesource2);


if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 WINS"
}else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 WINS"
}else{
  document.querySelector("h1").innerHTML = "It's a DRAW"
}
