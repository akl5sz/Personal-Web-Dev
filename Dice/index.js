var randomNumber1 = Math.floor(Math.random()*6 + 1);

var imagePath1 = "./images/dice" + randomNumber1 + ".png";
document.getElementById("left").setAttribute("src", imagePath1);

var randomNumber2 = Math.floor(Math.random()*6 + 1);

var imagePath2 = "./images/dice" + randomNumber2 + ".png";
document.getElementById("right").setAttribute("src", imagePath2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "\u{1F6A9}" + "Refresh Me";
} else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent = "Refresh Me" + "\u{1F6A9}";
} else {
    document.querySelector("h1").textContent = "\u{1F6A9}" + "Draw!" + "\u{1F6A9}";
}