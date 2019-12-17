
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

function buildQuiz() { }

function showResults() { }

// display quiz right away
display.buildQuiz();

// on submit, show results
$("#submit").on("click", showResults);

var myQuestions = [
    {
        question: "Start off easy, what is the name of the company that the Office employees work for?",
        answers: {
            a: "Staples",
            b: "Dunder Miffin",
            c: "Dunder Mifflin",
            d: "Dunder down under"
        },
        correctAnswer: "c"
    },
    {
        question: "Who is the main character in Threat Level Midnight, a screen play by one of Dunder Mifflin's very own?",
        answers: {
            a: "Prison Mike",
            b: "Micheal Scar",
            c: "Michael Scott",
            d: "Michael Scarn"
        },
        correctAnswer: "d"
    },
    {
        question: "Stanley is often seen doing this instead of working or even remotely paying attention to the daily life around him",
        answers: {
            a: "Planning his vacation",
            b: "Doing Sudoku",
            c: "Playing Solitaire",
            d: "Doing a crossword puzzle"
        },
        correctAnswer: "d"
    }
    {
        question: "Here's an easy one for Office Lovers: What is Pam's greeting when she answers the phone?",
        answers: {
            a: "Hi you've reached Pam at Dunder Mifflin.",
            b: "Dunder Mifflin, this is Pam",
            c: "Welcome to Dunder Mifflin, Pam speaking",
            d: "This is Dunder Mifflin"
        },
        correctAnswer: "b"
    }
      {
        question: "Angela and Dwight have a quirky relationship. What does Dwight often call Angela?",
        answers: {
            a: "Monkey",
            b: "Booster Seat",
            c: "Angel",
            d: "Pumpkin"
        },
        correctAnswer: "a"
    }
      {
        question: "In the first episode, what item was jellofied?",
        answers: {
            a: "Scissors",
            b: "Calculator",
            c: "Stapler",
            d: "World's Best Boss Mug",
            e: "All of the Above"
        },
        correctAnswer: "e"
    }
      {
        question: "When Michael resigns from Dunder Mifflin to start his own Paper company, what does he choose to name it?",
        answers: {
            a: "Dunder Miffin",
            b: "The Michael Scott Paper Company",
            c: "Scott's tots",
            d: "Unlimited Paper"
        },
        correctAnswer: "b"
    }
    
];
function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {

                // ...add an HTML radio button
                answers.push(
                    `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
}
myQuestions.forEach((currentQuestion, questionNumber) => {
    // here goes the code we want to run for each question
});
