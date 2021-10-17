var base = document.querySelector("#base");
var height = document.querySelector("#height");
var btnCheck = document.querySelector("#btn-check");
var outputDiv = document.querySelector("#output-div");

function clickhandler() {
  var baseT = Number(base.value);
  var heightT = Number(height.value);
  if(baseT>0 && baseT !== "") {
    if(heightT>0 && heightT !== "") {
      calculateHypotenuse(baseT,heightT);
    } else {
      alert("Please enter a valid height value");
    }
  } else {
    alert("Please enter a valid base value");
  }
}

function calculateHypotenuse(base,height) {
  var sumOfSquare = base*base + height*height;
  var result = Math.sqrt(sumOfSquare);
  outputDiv.innerText = `The length of hypotenuse is ${result.toFixed(2)}`;
}

btnCheck.addEventListener("click",clickhandler);