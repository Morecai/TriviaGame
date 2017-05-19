$(document).ready(function() {
    var rightAns = 0;
    var wrongAns = 0;
    var qIndex = 0;
    var selectedAnswers;

    //question
    var questionArray = [{
        question: "Who said don't make the super suit Spandex, or Green?",
        answers: [
            "Steve Rodgers",
            "JJ Brenner",
            "Wade Wilson",
            "Hal Jordan"
        ],
        correctAnswer: 2
    }, {
        question: "The Iron Patriot was previously named...?",
        answers: [
            "Tin Man",
            "War Machine",
            "Jarvis",
            "M.O.A.B."
        ],
        correctAnswer: 1
    }, {
        question: "Who has NOT played Batman?",
        answers: [
            "Christian Bale",
            "Val Kilmer",
            "Ben Affleck",
            "Sheldon Cooper"

        ],
        correctAnswer: 3
    }, ];

    // if (questionArray[0].answers[questionArray[0].correctAnswer] === "Wade Wilson") {
    //     console.log("this is true!");
    //}


    var i = 0;
    var answerIndex = questionArray[i].correctAnswer;
    genQuestions();



    //Answers
    $(".btn").on("click", function(event) {
        selectedAnswers = $(this).text();
        console.log(selectedAnswers);
        if (selectedAnswers === questionArray[i].answers[answerIndex]) {
            rightAns++;

            console.log("you guessed correctly!");
        } else if (selectedAnswers !== questionArray[i].answers[answerIndex]) {
            wrongAns++;
            console.log("Sorry you guessed incorrectly");


        }
        genQuestions();
        clearInterval(interval);
        qIndex++;

    });
    //start game function

    //restart game function

    //end game function
    //timer
    var counter = 15;
    var interval = setInterval(function() {
        counter--;
        $(".page-header").text(counter + " Seconds");
        if (counter == 0) {
            wrongAns++;
            genQuestions();
            clearInterval(interval);
            console.log(counter);

        }
    }, 1000);

    console.log(counter);

    function newGame() {
        rightAns = 0;
        wrongAns = 0;
        clearInterval(interval);

    }

    function genQuestions() {
        $(".question").text(questionArray[qIndex].question);
        for (var i = 0; i < questionArray[qIndex].answers.length; i++) {
            var id = "#ans" + i;
            $(id).text(questionArray[qIndex].answers[i]);
        }
    }
});
