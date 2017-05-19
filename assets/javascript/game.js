//Declare variables and set to zero to start
var targetNumber = 0;
var totalScore = 0;
var wins = 0;
var losses = 0;

//Random number for player to try to reach between 19 - 120

var targetNumber = Math.floor(Math.random() * 100) + 19;


//Random secret numbers for each of the crystals between 1-12
var gold = Math.floor((Math.random() * 12) + 1);
var green = Math.floor((Math.random() * 12) + 1);
var pink = Math.floor((Math.random() * 12) + 1);
var sky = Math.floor((Math.random() * 12) + 1);

console.log("gold" + " " + gold);
console.log("green" + " " + green);
console.log("pink" + " " + pink);
console.log("sky" + " " + sky);

//Pushes random target number to the page for guess

$("#targetNumber").html(targetNumber);

//Click Events for the crystals

$(".gold-crystal").click(function() {
    update(gold);

    console.log(gold);

});

$(".green-crystal").click(function() {
    update(green);

    console.log(green);
});

$(".pink-crystal").click(function() {
    update(pink);

    console.log(pink);
});

$(".sky-crystal").click(function() {
    update(sky);

    console.log(sky);
});

function update(crystals) {
    //This updates the score count from the crystals by each color
    totalScore += crystals;
    //Updates text on screen 
    $("#score").empty();
    $("#score").append("Your total score is:" + " " + totalScore);
    // If the score goes over the target number adds a loss and then resets game
    if (totalScore > targetNumber) {

        losses++;

        $("#losses").html("Losses:" + " " + losses);

        reset();
        //If the score equals the target number adds a win and then resets game
    } else if (targetNumber == totalScore) {
        wins++;

        $("#wins").html("Wins:" + " " + wins);

        reset();
    };
};

//Restarts the game w/out refreshing the page

function reset() {
    // Generates a new random number
    targetNumber = Math.floor((Math.random() * 100) + 19);
    // Displays that number on the page.
    $("#targetNumber").html(targetNumber);
    // Generates new values for the crystals.
    var gold = Math.floor((Math.random() * 12) + 1);
    var green = Math.floor((Math.random() * 12) + 1);
    var pink = Math.floor((Math.random() * 12) + 1);
    var sky = Math.floor((Math.random() * 12) + 1);
    // Resets the total guess to 0.
    totalScore = 0;

    $("#score").html("Your total score is:" + " " + totalScore);
};
