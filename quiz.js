var quizForm = document.querySelector(".quiz-form");
var btnCheck = document.querySelector("#btn-check");
var outputDiv = document.querySelector("#output-div");
var answer = ["90°","right angled"];

function clickhandler() {
  var score = 0;
  var index = 0;
  var formData = new FormData(quizForm);
  for(let value of formData.values()){
    if(value === answer[index]){
      score++;
    }
    index++
  }
  outputDiv.innerText = `The score is ${score}`;
  console.log(`The score is ${score}`);
}

btnCheck.addEventListener("click",clickhandler);