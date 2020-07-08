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
var q2 = new Question("Tarihçilerin Kutbu olarak bilinen dünyaca ünlü tarihçimiz kimdir? ", ["Mehmet Fuat Köprülü", "Ilber Ortaylı", "Halil Inalcık"], "Halil Inalcık");
var q3 = new Question("Hangi hayvan memeli değildir?", ["Yunus", "Yarasa", "Penguen"], "Penguen");
var q4 = new Question("Fatih Sultan Mehmet’in babası kimdir?", ["Yıldırım Beyazıt", "II.Murat", "I.Mehmet"], "II.Murat");
var q5 = new Question("Hangi yabancı futbolcu Fenerbahçe forması giymiştir?", ["Simoviç", "Prekazi", "Schumacher"], "Schumacher");
var q6 = new Question("Magna Carta hangi ülkenin kralıyla yapılmış bir sözleşmedir?", ["Fransa", "Ingiltre", "spanya"], "Ingiltre");
var q7 = new Question("Hangisi periyodik tabloda bulunan bir element değildir?", ["Azot", "Oksijen", "Su"], "Su");
var q8 = new Question("Hangisi bir doğal sayıdır?", ["0", "2.5", "-1"], "0");
var q9 = new Question("Hangisi tarihteki Türk devletlerinden biri değildir?", ["Avar Kağanlığı", "Emevi Devleti", "Hun Imparatorluğu"], "Emevi Devleti");
var q10 = new Question("Galatasaray hangi yıl UEFA kupasını almıştır?", ["2000", "2001", "2002"], "2000");

let questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
//Start Quiz
var quiz = new Quiz(questions);
loadQuestions();
//again button
function againGame() {
  var myDiv = document.getElementById("againGame");
  //creating button element
  var button = document.createElement('BUTTON');
  //creating text to be
  button.classList.add("btn");
  button.classList.add("btn-primary");
  var text = document.createTextNode("Tekrar Oyna");
  /*   button.style.backgroundColor = "white";
    button.style.color = "black";
    button.style.border = "2px solid black";
    button.style.borderRadius = "10px" */
  //appending text to button
  button.appendChild(text);
  //appending button to div
  myDiv.appendChild(button);
  button.onclick = function () {
    location.reload();
  }
}
function loadQuestions() {
  if (quiz.isFinish()) {
    showScore();
  }
  else {
    var question = quiz.getQuestion();
    var choices = question.choices;
    let body = document.querySelector('body');
    body.style.backgroundImage = "url(https://g7.pngresmi.com/preview/283/853/198/who-wants-to-be-a-millionaire-2014-game-show-television-show-quiz-who-wants-to-be-a-millionaire.jpg)";
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
  if (quiz.score == 0) {
    let oneri = "Yazık Kafana..."
    let html = `<h2>Skorunuz</h2><h4>${quiz.score}</h4><p>${oneri}</p>`;
    document.querySelector('.card-body').innerHTML = html;
    againGame();
  }
  else if (quiz.score >= 1 && quiz.score <= 3) {
    let oneri = "Cahilsinnn..."
    let html = `<h2>Skorunuz</h2><h4>${quiz.score}</h4><p>${oneri}</p>`;
    document.querySelector('.card-body').innerHTML = html;
    againGame();
  }
  else if (quiz.score > 3 && quiz.score <= 6) {
    let oneri = "Idare Ederrr..."
    let html = `<h2>Skorunuz</h2><h4>${quiz.score}</h4><p>${oneri}</p>`;
    document.querySelector('.card-body').innerHTML = html;
    againGame();
  }
  else if (quiz.score >= 7 && quiz.score <= 9) {
    let oneri = "Güzelll..."
    let html = `<h2>Skorunuz</h2><h4>${quiz.score}</h4><p>${oneri}</p>`;
    document.querySelector('.card-body').innerHTML = html;
    againGame();
  }
  else if (quiz.score > 9 && quiz.score == 10) {
    let oneri = "Tebrikler Hepsini Doğru Yaptınız..."
    let html = `<h2>Skorunuz</h2><h4>${quiz.score}</h4><p>${oneri}</p>`;
    document.querySelector('.card-body').innerHTML = html;
    againGame();
  }
}
function showProgress() {
  let totalQuestion = quiz.questions.length;
  let questionNumber = quiz.questionIndex + 1;
  document.querySelector('#progress').innerHTML = 'Soru ' + questionNumber + " of " + totalQuestion;
}