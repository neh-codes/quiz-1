//Welcome message
readlineSync = require('readline-sync');
console.log("Welcome to the DO YOU KNOW NEHA quiz!");
var username = readlineSync.question("What's your name? ");
console.log("\nHello "+username+" let's begin");
console.log("--------------------------------");

//questions
var questions = [
{
 question: "Where do I live? ",
 answer: "pune"
},
{
  question: "What's my age? ",
  answer: "23",
},
{
  question: "which color I like the most? ",
  answer: "lavendar"
},
{
  question: "which school am I from? ",
  answer: "bvb"
},
{
  question: "Do I have a dog? ",
  answer: "no"
}
]

//answerCheck
var score = 0;
function play(question, answer)
{
  var userAnswer = readlineSync.question(question)
  if(userAnswer.toUpperCase() == answer.toUpperCase())
  {
    console.log("You're correct!");
    score++;
  }
  else{
    console.log("Oops that's incorrect!");
  }
  console.log("score: ",score);
  console.log("--------------------------------");
}

//toTraverse
for(i=0; i<questions.length; i++)
{
  var current = questions[i];
  play(current.question, current.answer);
}

//showScore
console.log(username+" your final score is: ",score);

//highScores data
var highScores = [
  {
    name: "Serena van der woodsen",
    score: 5
  },
  {
    name: "Blair Waldorf",
    score: 3
  }
]

//finalMessage
console.log("\nHere are the high scores:")
for(i=0; i<highScores.length; i++)
{
  console.log(highScores[i]);
}
console.log("Did you beat the highscore? ping me to get it updated");