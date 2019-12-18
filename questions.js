// select all elements
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var qImg = document.getElementById("qImg");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var choiceE = document.getElementById("E");

var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");
var progress = document.getElementById("progress");
var scoreDiv = document.getElementById("scoreContainer");

// create our questions
var questions = [
    {
        question : "Start off easy, what is the name of the company that the Office employees work for?",
        imgSrc : "img/office2.png",
        choiceA: "Staples",
        choiceB: "Dunder Miffin",
        choiceC: "Dunder Mifflin",
        choiceD: "Dunder down under",
        choiceE: "All of the Above",
        correct : "C"
    },{
        question : "Who is the main character in Threat Level Midnight, a screen play by one of Dunder Mifflin's very own?",
        imgSrc : "img/office2.png",
        choiceA: "Prison Mike",
        choiceB: "Micheal Scar",
        choiceC: "Michael Scott",
        choiceD: "Michael Scarn",
        choiceE: "All of the Above",
        correct : "D"
    },{
        question : "Stanley is often seen doing this instead of working or even remotely paying attention to the daily life around him",
        imgSrc : "img/office2.png",
        choiceA: "Planning his vacation",
        choiceB: "Doing Sudoku",
        choiceC: "Playing Solitaire",
        choiceD: "Doing a crossword puzzle",
        choiceE: "All of the Above",
        correct : "D"
    },{
        question : "Here's an easy one for Office Lovers: What is Pam's greeting when she answers the phone?",
        imgSrc : "img/office2.png",
        choiceA: "Hi you've reached Pam at Dunder Mifflin.",
        choiceB: "Dunder Mifflin, this is Pam",
        choiceC: "Welcome to Dunder Mifflin, Pam speaking",
        choiceD: "This is Dunder Mifflin",
        choiceE: "All of the Above",
        correct : "B"
    },{
        question : "Angela and Dwight have a quirky relationship. What does Dwight often call Angela?",
        imgSrc : "img/office2.png",
        choiceA: "Monkey",
        choiceB: "Booster Seat",
        choiceC: "Angel",
        choiceD: "Pumpkin",
        choiceE: "All of the Above",
        correct : "A"
    },{
        question : "What item(s) were jellofied during the series?",
        imgSrc : "img/office2.png",
        choiceA: "Scissors",
        choiceB: "Calculator",
        choiceC: "Stapler",
        choiceD: "World's Best Boss Mug",
        choiceE: "All of the Above",
        correct : "E"
    },{
        question : "When Michael resigns from Dunder Mifflin to start his own Paper company, what does he choose to name it?",
        imgSrc : "img/office2.png",
        choiceA: "Dunder Miffin",
        choiceB: "The Michael Scott Paper Company",
        choiceC: "Scott's tots",
        choiceD: "Unlimited Paper",
        choiceE: "All of the Above",
        correct : "B"
    },
    
    
];

// create some variables

var lastQuestion = questions.length - 1;
var runningQuestion = 0;
var count = 0;
var questionTime = 10; // 10s
var gaugeWidth = 0; // 150px
var gaugeUnit = gaugeWidth / questionTime;
var TIMER;
var score = 0;

// render a question
function renderQuestion(){
    var q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    choiceE.innerHTML = q.choiceE;

}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(var qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    var scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    var img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png" ;
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}
