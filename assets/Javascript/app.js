$(document).ready(function(){

    $("#start-button").on("click", gameState.startTimer);
  
  });
  
  var gameState = {
  
    timeRemaining : 60,
  
    startTimer: function() {
      $("#timer").text("Time remaining: " + gameState.timeRemaining);
      setInterval(gameState.countdown, 1000);
      $("#start-page").hide();
      trivia.displayQuestions();
    },
  

    countdown: function() {
      gameState.timeRemaining--;
      $("#timer").text("Time remaining: " + gameState.timeRemaining);
      if (gameState.timeRemaining === 0) {
        gameState.stopTimer();
        $("#timer").empty();
      }
    },
  
    stopTimer: function() {
      clearInterval();
      trivia.checkAnswers();
    },
  
    showEndPage: function(numCorrect, numIncorrect, numUnanswered) {
      $("#end-page").show();
      $("#questions-box").empty();
      $("#timer").empty();
      $("#timer").hide();
      $("#correct-answers").text("How you Doin?: " + numCorrect);
      $("#incorrect-answers").text("Could you Be anymore wrong?: " + numIncorrect);
      $("#unanswered").text("I dont even have a pla (skipped)" + numUnanswered);
    }
  }
  
  var trivia = {
  
    displayQuestions: function() {
      var divContainer = $("#questions-box");
      var answerGroup = $(".form-check");
      divContainer.append('<h2>Answer the following questions:</h2>');
              
      for (var i = 0; i < questionBank.length; i++) {
  
        divContainer.append('<div id="question">' + questionBank[i].question + '</div>');
  
        var answer1 = questionBank[i].answers[0];
        var answer2 = questionBank[i].answers[1];
        var answer3 = questionBank[i].answers[2];
  
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer1 + '</label></div>');
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer2 + '</label></div>');
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer3 + '</label></div>');
      }
  
      
      var doneButton = '<button class="btn btn-primary" id="done-button" type="submit">Done</button>';
      divContainer.append(doneButton);
      $("#done-button").on("click", gameState.stopTimer);
    },
  

    checkAnswers: function() {
      var correctAnswer;
      var userAnswer;
      var numCorrect = 0;
      var numIncorrect = 0;
      var numUnanswered = 0;
  

      for (var i = 0; i < questionBank.length; i++) {
        correctAnswer = questionBank[i].correct;
        userAnswer = $('input[id=radio'+i+']:checked + label').text();
  
        if (userAnswer === correctAnswer) {
          numCorrect++;
        } else if (userAnswer === "") {
          numUnanswered++;
        } else if (userAnswer !== correctAnswer) {
          {
            numIncorrect++;
          }
        }
      }
  

      gameState.showEndPage(numCorrect, numIncorrect, numUnanswered);
    },
  }
  

  var questionBank =
  [
    {
        question: "To get over Richard, what did Monica start making?",
        answers: ["Pancakes", "Jam", "Candy"],
        correct: "Jam"
      },
    
      {
        question: "What was the name of the self help book that the girls loved?",
        answers: ["Be Your Own Cleansing Pool", "Be Your Own Windkeeper", "Be Your Own Lightning Bearer",],
        correct: "Be Your Own Windkeeper"
      },
      {
        question: "Where did Monica and Ross' parents jet off to for Thanksgiving?",
        answers: ["Puerto Rico", "Caribbean", "Bahamas",],
        correct: "Puerto Rico"
      },
      {
        question: "What was wrong with the couch Ross returned to the store?",
        answers: ["It was cut in half", "It was torn", "It had a stain"],
        correct: "It was cut in half"
      },
      {
        question: "What was the name of Eddie's ex-girlfriend?",
        answers: ["Tina", "Tillie", "Tara",],
        correct: "Tillie"
      },
      {
        question: "Which of the girls did Joey mistakenly see in the shower?",
        answers: ["achel", "Phoebe", "Monica"],
        correct: "Monica"
      },
      {
        question: "What was Phoebe in charge of at Rachel's suprise party?",
        answers: ["cups and food", "ice and food", "cups and ice"],
        correct: "cups and ice"
      },
      {
        question: "Who fell in an open grave?",
        answers: ["Joey", "Phoebe", "Ross","Chandler"],
        correct: "Ross"
      },
      {
        question: "What heirloom did Phoebe inherit?",
        answers: ["A Dollhouse", "Fur Coat","A Puppy"],
        correct: "Fur Coat"
      },
      {
        question: "What book did Joey keep in the freezer?",
        answers: ["IT", "Little Women","The Shining"],
        correct: "The Shining"
      }
    ]