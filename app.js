function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}
//Questiın Prototype
Question.prototype.checkAnswer = function (answer) {
  return this.answer === answer;
}
//Quiz Constructor
function Quiz(questions) {
  this.questions = questions;
  this.score = 0;
  this.questionIndex = 0;
}
//Quiz Prototype 
Quiz.prototype.getQuestion = function () {
  return this.questions[this.questionIndex];
}

//Quiz isFinish
Quiz.prototype.isFinish = function () {
  return this.questions.length == this.questionIndex;
}

//Quiz Guess
Quiz.prototype.guess = function (answer) {
  let question = this.getQuestion();
  if (question.checkAnswer(answer)) {
    this.score++;
  }
  this.questionIndex++;
}


var q1 = new Question("Hangisi bir hücrede bulunan organeldir? ", ["RNA", "Lizozom", "DNA"], "Lizozom");
var q2 = new Question("Tarihçilerin Kutbu olarak bilinen dünyaca ünlü tarihçimiz kimdir? ", ["Mehmet Fuat Köprülü", "İlber Ortaylı", "Halil İnalcık"], "Halil İnalcık");
var q3 = new Question("Hangi hayvan memeli değildir?", ["Yunus", "Yarasa", "Penguen"], "Penguen");
var q4 = new Question("Fatih Sultan Mehmet’in babası kimdir?", ["Yıldırım Beyazıt", "II.Murat", "i.Mehmet"], "II.Murat");
var q5 = new Question("Hangi yabancı futbolcu Fenerbahçe forması giymiştir?", ["Simoviç", "Prekazi", "Schumacher"], "Schumacher");
var q6 = new Question("Magna Carta hangi ülkenin kralıyla yapılmış bir sözleşmedir?", ["Fransa", "İngiltre", "İspanya"], "İngiltre");
var q7 = new Question("Hangisi periyodik tabloda bulunan bir element değildir?", ["Azot", "Oksijen", "Su"], "Su");
var q8 = new Question("Hangisi bir doğal sayıdır?", ["0", "2.5", "-1"], "0");
var q9 = new Question("Hangisi tarihteki Türk devletlerinden biri değildir?", ["Avar Kağanlığı", "Emevi Devleti", "Hun İmparatorluğu"], "Emevi Devleti");
var q10 = new Question("Galatasaray hangi yıl UEFA kupasını almıştır?", ["2000", "2001", "2002"], "2000");

let questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

//Start Quiz
var quiz = new Quiz(questions);

loadQuestions();

function loadQuestions() {
  if (quiz.isFinish()) {
    showScore();
  }
  else {
    var question = quiz.getQuestion();
    var choices = question.choices;
    document.querySelector("#question").textContent = question.text;

    for (var i = 0; i < choices.length; i++) {
      var element = document.querySelector('#choice' + i);
      element.innerHTML = choices[i];
      guess('btn' + i, choices[i]);
    }
    showProgress();
  }
}
function guess(id, guess) {
  let btn = document.getElementById(id);
  btn.onclick = function () {
    quiz.guess(guess);
    loadQuestions();
  }
}
function showScore() {
  let html = `<h2>Score</h2><h4>${quiz.score}</h4>`;
  document.querySelector('.card-body').innerHTML = html;
}

function showProgress() {
  let totalQuestion = quiz.questions.length;
  let questionNumber = quiz.questionIndex + 1;
  document.querySelector('#progress').innerHTML = 'Question ' + questionNumber + " of " + totalQuestion;
}


/* console.log(quiz.isFinish());

console.log(quiz.getQuestion());
quiz.guess('Lizozom')
console.log(quiz.getQuestion());
quiz.guess('Halil İnalcık');
console.log(quiz.getQuestion());
quiz.guess('Penguen');
console.log(quiz.getQuestion());
quiz.guess('II.Murat');

console.log(quiz.score);

console.log(quiz.isFinish());
 */