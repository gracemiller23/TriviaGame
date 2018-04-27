
//----------------------------variables-------------------------------

var questionCount = 0;
var number = 30;
var intervalId;
var answersCorrect = 0;
var answersWrong = 0;


var questions = ["How many times did Rachel and Ross try to get together (whether they succeeded or not)?", 
"Who was Joey's character on Days of Our Lives?", "Who did Rachel leave at the altar in season 1?", 
"Which of the following is NOT a verse from Phoebe's Smelly Cat?", 
"What is Joey's favorite food, as defined in the guys vs. girls epic quiz battle?",
"Where did Chandler agree to start a new division of his company while he was asleep at a meeting?",
"Who was Monica's first major relationship with on the show?"];

var answerChoices = [["9", "4", "3", "2"],["Dr. Tribbiani", "Dr. Hans Ramoray", "Dr. Drake Ramoray", "Dr. Bing"], 
["Barry", "Steve", "Paolo", "Paul"], 
["Smelly cat, smelly cat...","And you're no friend to those with noses...",
"You're obviously not their favorite pet...", "Why do you pee on the rug?"], 
["The Joey Special (aka two pizzas)","Cheesecake", "Sandwiches","Pasta"], 
["Tulsa","Tucson","Dallas","Kansas City"], ["Chandler", "Richard", "Fun Bobby","Pete"]];

var rightAnswers = ["b", "c", "a", "d", "c", "a", "b"];

var questionGifs = [["https://media.giphy.com/media/V2CPDf8e6zs6k/giphy.gif", "https://media.giphy.com/media/xUOwGaK4KQ9Z6WZqso/giphy.gif"],
["https://media.giphy.com/media/3og0IQCfsZXScpvKhi/giphy.gif", "https://media.giphy.com/media/XJCL959KwYbE4/giphy.gif"], 
["https://media.giphy.com/media/31lPv5L3aIvTi/giphy.gif", "https://media.giphy.com/media/8bQdMxDSJ8oiQ/giphy.gif"], 
["https://media.giphy.com/media/pPr0e5tqtCwTe/giphy.gif", "https://media.giphy.com/media/UUVqDm2xhyU36/giphy.gif"],
["https://media.giphy.com/media/Ed9XahXW0baG4/giphy.gif", "https://media.giphy.com/media/bwfKLyFSreGQ/giphy.gif"], 
["https://media.giphy.com/media/ld1RKulOqeeaI/giphy.gif", "https://media.giphy.com/media/L20E2bh3ntSCc/giphy.gif"],
["https://media.giphy.com/media/HGEiJZcovtb1e/giphy.gif", "https://media.giphy.com/media/aj6lvT96A8xLq/giphy.gif"]];

//---------------------------------timer functions ---------------------------

function run() {
    intervalId = setInterval(decrement, 1000);
  };

  function decrement() {

    number--;

    $("#show-number").html("<h2>" + number + " seconds left! </h2>");

    if (number === 0) {
      stop();
      timesUp();
    };
  };

  function stop() {
    clearInterval(intervalId);
  };

//-----------------------------------Game Play and Outcomes--------------------------  

function newQuestionForm(){
    number=30;
    $("#show-number").show();
    run();
    $("div.results").empty().hide();
    //display the question form with the next question
    $("form.qForm").show().html("<h3>" + questions[questionCount] + 
    "</h3><input type='radio' value='a' class='answer'> a. " + answerChoices[questionCount][0] + 
    "</input><br><input type='radio' value='b' class='answer'> b. " + 
    answerChoices[questionCount][1] + "</input><br><input type='radio' value='c' class='answer'> c. " +  
    answerChoices[questionCount][2] + "</input><br><input type='radio' value='d' class='answer'> d. " + 
    answerChoices[questionCount][3] + "</input>");
    
}

function youAreCorrect(){
    answersCorrect++;
    setTimeout(function(){
        $("#show-number").hide();
        $("form.qForm").hide();
        $("div.results").show().html("<h2> You are correct! </h2> <img src= '" + 
        questionGifs[questionCount][0] + "' alt='gif from the show, friends' class='result-image'>");
        }, 1000);
        setTimeout(function(){
        $("div.results").hide();
        $("form.qForm").show();
        questionCount++;
        if (questionCount < questions.length){
            newQuestionForm();
            }else{
                gameReset();
            }
        }, 5000); 
};

function youAreWrong(){
    answersWrong++;
    setTimeout(function(){ 
        $("#show-number").hide();
    $("div.results").show().html("<h2> Wrong! </h2> <h3>The correct answer is: " + 
    rightAnswers[questionCount] + "</h3> <img src= ' " + questionGifs[questionCount][1] + 
    "' alt='gif from the show, friends' class='result-image'>");
    }, 1000);

    setTimeout(function(){
        $("div.results").hide();
        questionCount++;
        if (questionCount < questions.length){
            newQuestionForm();
            }else{
                gameReset();
            }
        }, 6000);
};

function timesUp(){
    answersWrong++;
    setTimeout(function(){ 
        $("#show-number").hide();
    $("div.results").show().html("<h2> Time's up! </h2> <h3>The correct answer is: " + 
    rightAnswers[questionCount] + "</h3> <img src= ' " + questionGifs[questionCount][1] + 
    "' alt='gif from the show, friends' class='result-image'>");
    }, 1000);

    setTimeout(function(){
        $("div.results").hide();
        questionCount++;
        if (questionCount < questions.length){
        newQuestionForm();
        }else{
            gameReset();
        }
        }, 6000);
};

//------------------------game reset---------------------

function gameReset(){
    var score = Math.floor((answersCorrect / 7) * 100);
    questionCount = 0;
    $("#show-number").hide();
    $("div.results").hide();
    $("form.qForm").hide()
    $("div.start-page").show().html("<h1>Try again!</h1><h3>You got " + 
    answersWrong+ " answers wrong and " + answersCorrect + " answers right, for a score of " + 
    score + "%. <button id='start'> Start </button>");
    setTimeout(function(){
        answersCorrect = 0;
        answersWrong = 0;
    }, 1000);
};

//-------------------------click events-----------------------
$(document).ready(function(){

$("body").on("click", "button", function(){
    $("div.start-page").html("<h2>Okay, let's get started!</h2>")
    setTimeout(function(){
        $("div.start-page").hide();
        newQuestionForm();
    }, 1000);

}).on("click", "input", function(){
    var userInput = $(this).val();
    var correctAnswer = $("input").text(rightAnswers[questionCount]);
    stop();
    if (number > 0 && userInput === rightAnswers[questionCount]){
        youAreCorrect();
    }else if (number > 0){
        youAreWrong(userInput);
    }

});

});




