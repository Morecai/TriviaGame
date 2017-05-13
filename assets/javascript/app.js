$(document).ready(function() {
	var rightAns = 0;
    var wongAns = 0;
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

    if (questionArray[0].answers[questionArray[0].correctAnswer] === "Wade Wilson") {
        console.log("this is true!");
    }
    var i = 0
    var answerIndex = questionArray[i].correctAnswer;
    for (var i = 0; i < questionArray.lenght; i++) {
        if (questionArray[0]) {
            $("#ans0").text(questionArray[0].answers[0]);
            $("#ans1").text(questionArray[0].answers[1]);
            $("#ans2").text(questionArray[0].answers[2]);
            $("#ans3").text(questionArray[0].answers[3]);
        }
        // questionArray[i][1] = "War Machine";
        // console.log(questionArray[0].answers[0]);
    }
    // if (questionArray[1].answers[answerIndex] === "War Machine") {
    //     console.log("this is true!");
    // }
    // //console.log(questionArray[0].answers[0]);


    //Answers
    $("button").on("click", ".answers", function(event){
    	selectedAnswers = $(this);
    		if (selectedAnswers === questionArray[i].answers[answerIndex]) {
    			console.log("you guessed correctly!")
    		}
    		else (selectedAnswers !== questionArray[i].answers[answerIndex]) {
    			console.log("Sorry you guessed incorrectly")
    		}
    })

    //start game function

    //restart game function

    //end game function
    //timer
    var counter = 15;
    var interval = setInterval(function() {
        counter--;
        $(".page-header").text(counter + " Seconds");
        if (counter == 0) {
            clearInterval(interval);
            console.log(counter);

        }
    }, 1000);

    console.log(counter);

    function newGame(){
    	rightAns = 0;
    	wongAns = 0;
    	clearInterval(interval);

    }
})
