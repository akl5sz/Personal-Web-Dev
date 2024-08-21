var buttonColors = ["red", "blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameStarted = false;
var level = 0;


$(document).keypress(function(){
    if(!gameStarted){
        $("h1").text("Level " + level);
        nextSequence();
        gameStarted = true;
    }
});

$(".btn").click(function(event){
    var userChosenColor = event.target.id; //$(this).attr("id")
    userClickedPattern.push(userChosenColor);
    // console.log(userClickedPattern);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
 });

function nextSequence(){
    level++;
    userClickedPattern = [];
    $("h1").text("Level "+level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    var colorId = "#" + randomChosenColour
    // console.log($(colorId));
    $(colorId).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}
 function playSound(name){
    switch(name){
        case "green":
            var audio = new Audio("sounds/green.mp3");
            audio.play();
            break;
        case "red":
            var audio = new Audio("sounds/red.mp3");
            audio.play();
            break;
        case "yellow":
            var audio = new Audio("sounds/yellow.mp3");
            audio.play();
            break;
        case "blue":
            var audio = new Audio("sounds/blue.mp3");
            audio.play();
            break;
        default:

    }
 }

 function animatePress(currentColor){
    $("#"+ currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100);
 }

 function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        // console.log("Success");
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    } else {
        // console.log("Wrong");
        var audio = new Audio("sounds/wrong.mp3");  
        audio.play();
        $("body").addClass("game-over");
        $("h1").text("Game Over, Press Any Key to Restart");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        startOver();
    }
 }

 function startOver(){
    level = 0;
    gamePattern = [];
    gameStarted = false;
 }