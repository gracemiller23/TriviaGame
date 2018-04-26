var timeCounter = 30;
var questionCount = 0;


//click events
var userInput = $(this).val();

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
var questionGifs = [["https://media.giphy.com/media/FY56lXEc3KY9y/giphy.gif", "https://media.giphy.com/media/xUOwGaK4KQ9Z6WZqso/giphy.gif"],
["https://media.giphy.com/media/3og0IQCfsZXScpvKhi/giphy.gif", "https://media.giphy.com/media/XJCL959KwYbE4/giphy.gif"], 
["https://media.giphy.com/media/31lPv5L3aIvTi/giphy.gif", "https://media.giphy.com/media/8bQdMxDSJ8oiQ/giphy.gif"], 
["https://media.giphy.com/media/pPr0e5tqtCwTe/giphy.gif", "https://media.giphy.com/media/UUVqDm2xhyU36/giphy.gif"],
["https://media.giphy.com/media/Ed9XahXW0baG4/giphy.gif", "https://media.giphy.com/media/bwfKLyFSreGQ/giphy.gif"], 
["https://media.giphy.com/media/ld1RKulOqeeaI/giphy.gif", "https://media.giphy.com/media/L20E2bh3ntSCc/giphy.gif"],
["https://media.giphy.com/media/HGEiJZcovtb1e/giphy.gif", "https://media.giphy.com/media/aj6lvT96A8xLq/giphy.gif"]];


function newQuestionForm(){
    //hide results div
    $("div.results").empty().hide();
    timeCounter = 30;
    runtime();
    //display the question form with the next question
    $("form.qForm").show().html("<h3>" + questions[questionCount] + 
    "</h3><input type='radio' value='a' class='answer'>" + answerChoices[questionCount][0] + 
    "</input><br><input type='radio' value='b' class='answer'>" + 
    answerChoices[questionCount][1] + "</input><br><input type='radio' value='c' class='answer'>" +  
    answerChoices[questionCount][2] + "</input><br><input type='radio' value='d' class='answer'>" + 
    answerChoices[questionCount][3] + "</input>" );
}


function answerCheck(){
    var correctAnswer = $("input").text().val(rightAnswers[questionCount]);//may NOT actually work ... check later
    
    if (intervalId > 0 && userInput === rightAnswers[questionCount]){
        $("form.qForm").hide().delay(3000);
        $("div.results").show().html("<h3> You are correct! </h3> <img src= '" + 
        questionGifs[questionCount][0] + "' alt='gif from the show, friends' class='result-image'>").delay(6000);
    }else if (intervalId > 0){
        $("form.qForm").hide().delay(3000);
        $("div.results").show().html("<h3> Wrong! </h3> <p>The correct answer is: " + correctAnswer + "</p> <img src= ' " + 
        questionGifs[questionCount][1] + "' alt='gif from the show, friends' class='result-image'>").delay(6000);
    }else{
        $("form.qForm").hide()
        $("div.results").show().html("<h3> Time's up! </h3> <p>The correct answer is: " + correctAnswer + "</p> <img src= '" + 
        questionGifs[questionCount][1] + "' alt='gif from the show, friends' class='result-image'>").delay(6000);
    }
    questionCount++;
    newQuestionForm();
}

//////potentially use adding and clearing divs from dynamic elements exercise to load and clear the page? load start page, clear, load forms div?

//---------------------------------timer functions ---------------------------
var number = 1000;
var intervalId;

    function runTime() {
      intervalId = setInterval(decrement, 30 * 1000);
    }

    function decrement() {

      number--;

      $("#show-time").html("<h2>" + number + "</h2>");

      if (number === 0) {

        stop();

        answercheck();
      }
    }

    function stop() {

      clearInterval(intervalId);
    }








