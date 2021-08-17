var readlineSync = require('readline-sync');

var respondentName = readlineSync.question("Please tell me your name.\n");
console.log("Welcome "+ respondentName + ". Lets Play a short Quiz");

var points = 0;

var highestPoints = [
  {
    name: "Gaurav",
    points: 3,
  },
  {
    name: "Abhishek",
    points: 2,
  },
  {
    name: "Ravi",
    points: 2,
  },
]

var questions = [{
  question: "\n Do I love JavaScript? ",
  answer: "yes"
}, {
  question: "\n Do I love Cars?. ",
  answer: "yes"
},
{
  question: "\n Do I love to Travel? ",
  answer: "yes"
}];


function play(ques, ans) {
  var newAns = readlineSync.question(ques);

  if (newAns.toUpperCase() === ans.toUpperCase()) {
    console.log("You are right");
    points = points + 1;
    
  } else {
    console.log("You are wrong!");
   
  }

  console.log("\ncurrent points ", points);
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var newQues = questions[i];
    play(newQues.question, newQues.answer)
  }
}

function showScores() {
  console.log("\nTotal Points ", points);

  console.log("\nHighest Points List : ");

  highestPoints.map(points => console.log(points.name, " : ", points.points))
}

game();
showScores();

