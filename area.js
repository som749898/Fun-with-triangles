var lengths = document.querySelectorAll(".sides");
var btnCheck = document.querySelector("#btn-check");
var outputDiv = document.querySelector("#output-div");
function clickhandler() {
  var length1 = Number(lengths[0].value);
  var length2 = Number(lengths[1].value);
  var length3 = Number(lengths[2].value);
  if(length1>0 && length1 !== ""){
    if(length2>0 && length2 !== "") {
      if(length3>0 && length3!== "") {
        calculateArea(length1,length2,length3);
      } else {
        alert("third side of a triangle is invalid");
      }
    } else {
      alert("second side of a triangle is invalid");
    }
  } else {
    alert("first side of a triangle is invalid");
  }
}

function calculateArea(length1,length2,length3) {
  var s = (length1+length2+length3)/2;
  var square = s*(s-length1)*(s-length2)*(s-length3);
  var result = Math.sqrt(square);
  outputDiv.innerText = `Area of a triangle using heron's formula is ${result.toFixed(2)} units`;
}

btnCheck.addEventListener("click",clickhandler);