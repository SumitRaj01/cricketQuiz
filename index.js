var readlineSync = require("readline-sync");
var cricQuiz = readlineSync.question(
  "Welcome to the Cricket Quiz? Enter your name: "
);
console.log("Welcome " + cricQuiz);
var score = 0;
console.log("Enter your answer after the options");
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are right!");
    score++;
    console.log("your current score is:" + score);
  } else {
    console.log("You are wrong");
    console.log("your current score is:" + score);
  }
}

var questions = [
  {
    question: `Who won 2020 IPl? 
    a: Kolkata night riders 
    b: Mumbai Indians 
    c: Sunriser Hyderabad `,
    answer: "Mumbai Indians",
  },
  {
    question: `Who won 2021 IPL? 
    a: Kings XI Punjab 
    b: Chennai SuperKings 
    c: Delhi Capitals `,
    answer: "Chennai SuperKings",
  },
  {
    question: `Who won 2015 ICC World Cup?
    a: New Zealand
    b: Australia
    c: India  `,
    answer: "Australia",
  },
  {
    question: `Who is the only International captain to win Champions Trophy , T20 World Cup Trophy , ICC Cricket World Cup?
    a: Mahendra Singh Dhoni
    b: Michael Clarke
    c: Kane Williamson `,
    answer: "Mahendra Singh Dhoni",
  },
  {
    question: `Which team has won the most number of 50 over ICC world cup?
    a: India
    b: Australia
    c: Pakistan`,
    answer: "Australia",
  },
];
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  //console.log(currentQuestion);
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("Your final score is: " + score);
