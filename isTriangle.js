var angles = document.querySelectorAll(".angle");
var btnCheck = document.querySelector("#btn-check");
var outputDiv = document.querySelector("#output-div");

function clickHandler() {
  var angle1 = Number(angles[0].value);
  var angle2 = Number(angles[1].value);
  var angle3 = Number(angles[2].value);
  if(angle1>0 && angle1 !== ""){
    if(angle2>0 && angle2 !== "") {
      if(angle3>0 && angle3!== "") {
        checkTriangle(angle1,angle2,angle3);
      } else {
        alert("Angle3 is invalid");
      }
    } else {
      alert("Angle2 is invalid");
    }
  } else {
    alert("Angle1 is invalid");
  }
}

function checkTriangle(angle1,angle2,angle3){
  var sum = angle1+angle2+angle3;
  if(sum === 180) {
    outputDiv.style.color = "green";
    outputDiv.innerText = `Yay, the angles form a triangle!`;
  } else {
    outputDiv.style.color = "red";
    outputDiv.innerText = `Oh Oh! The angle doesn't form a triangle`;
  }
}

btnCheck.addEventListener("click",clickHandler);