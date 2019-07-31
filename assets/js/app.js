var choices = [];
var q = ["Which internet company began life as an online bookstore called 'Cadabra'?","Moore's law originally stated that the number of transistors on a microprocessor chip would double every...","On which day did the World Wide Web go online?","In CSS, which of these values CANNOT be used with the 'position' property?","What is known as 'the brain' of the Computer?"];
choices[0] = ["Amazon", "eBay", "Overstock", "Shopify"];
choices[1] = ["Year", "Four Years", "Two Years", "Eight Years"];
choices[2] = ["December 20, 1990", "December 17, 1996", "November 12, 1990", "November 24, 1995"];
choices[3] = ["center", "static", "absolute", "relative"];
choices[4] = ["Central Processing Unit", "Motherboard", "Graphics Processing Unit", "Keyboard"];

var c = 0
var answers = [];
var correctChoice = "";
var results = "";
var correct = 0;
var wrong = 0;

function randomOrder () {
  return Math.round(Math.random() * 3);
}

function setQuiz(param1) {
  $("#questionText").text(q[param1]);
  correctChoice = choices[param1][0];
  for (var i = 0; i < answers.length; i++) {
    var ans = "#a" + (i + 1) + "";
    $(ans).text(choices[param1][answers[i]])
  }};

function restart () {
    c++
    order()
    setQuiz(c)
    $("#quizResult").text("---");
    $(".questionNumber").text(c + 1)
  }

  var timer = new Timer();
  timer.start({countdown: true, startValues: {minutes: 1, seconds: 00}});
  $('#countdownExample .values').html(timer.getTimeValues().toString());
  timer.addEventListener('secondsUpdated', function (e) {
      $('#countdownExample .values').html(timer.getTimeValues().toString());
  });
  timer.addEventListener('targetAchieved', function (e) {
    $("#quizResult").text("Time has run out!")
    $("#row").hide("fast","linear");
    $("#questionText").hide("fast","linear");
  });

function order () {
  while (answers.length < 4) {
  var num = randomOrder();
  if (answers.indexOf(num) < 0) {
    answers.push(num);
  }}};

order();
setQuiz(c);
console.log(answers);
$(".answers").on("click", function () {
  var r = $(this).text();
  if (r == correctChoice) {
      results = "You are Correct!"
      correct++
      $("#correct").text(correct);
      $("#row").hide("fast","linear");
      $("#questionText").hide("fast","linear");
    } else {
      results = "You are Wrong! It was " + correctChoice;
      wrong++
      $("#wrong").text(wrong);
      $("#row").hide("fast","linear");
      $("#questionText").hide("fast","linear");
    }
      $("#quizResult").text(results);
      var timer2 = new Timer();
      timer2.start({countdown: true, startValues: {seconds: 3}});
      timer.stop();
      var startAgain = $(".values").text()
      console.log(startAgain);
      var timerSplit = startAgain.split(":");
      console.log(timerSplit);
      var minSplit = timerSplit[1].split(" ");
      console.log(parseInt(minSplit));
      $('#countdownExample2 .values2').html(timer2.getTimeValues().toString());
      timer2.addEventListener('secondsUpdated', function (e) {
          $('#countdownExample2 .values2').html(timer2.getTimeValues().toString());
      });
      timer2.addEventListener('targetAchieved', function (e) {
        $("#row").show("fast","linear");
        $("#questionText").show("fast","linear");
        restart();
        timer.start({countdown:true, startValues:{minutes: parseInt(minSplit), seconds:parseInt(timerSplit[2])}});
        $('#countdownExample .values').html(timer.getTimeValues().toString());
        timer.addEventListener('secondsUpdated', function (e) {
            $('#countdownExample .values').html(timer.getTimeValues().toString());
        });
        timer.addEventListener('targetAchieved', function (e) {
          $("#quizResult").text("Time has run out!")
          $("#row").hide("fast","linear");
          $("#questionText").hide("fast","linear");
          order();
          c = 0;
          setQuiz(c);
        });

  });
});
