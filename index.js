
var readLineSynch = require('readline-sync')

var score = 0;
var highScores = 
  [
    {
      name:'Fiona',
      score:5
  
    }
  ]

var questionOne = {
  question: "Which is my favorite flower?",
  answer: "daffodils"
}

var questionTwo = {
  question: "Which is my favorite sad song?",
  answer: "channa meraya"
}
var questionThree = {
  question: "Which is my favorite color?",
  answer: "green"
}
var questionFour = {
  question: "Which is my favorite animal?",
  answer: "cat"
}
var questionFive = {
  question: "Which is my favorite fruit?",
  answer: "mango"
}
function EvaluateQuiz({ question, answer }) {
  var input = readLineSynch.question(question);
  if (input.toLowerCase() === answer.toLowerCase()) {
    score++;
    console.log('you are right')
  }
  else
  {
    console.log('you are wrong')
  }
}
function welcome()
{
  var name =readLineSynch.question('What is your name?');
  console.log('Welcome to my Quiz', name);
}

function Quiz()
{
    EvaluateQuiz(questionOne);
    EvaluateQuiz(questionTwo);
    EvaluateQuiz(questionThree);
    EvaluateQuiz(questionFour);
    EvaluateQuiz(questionFive);
    console.log('Your Score', score);
}

function ShowScores()
{
  console.log('Leaderboard:');
  highScores.map(score=>console.log('Name:', score.name, 'Score:',       score.score))
}
welcome()
Quiz()
ShowScores()




  

  











