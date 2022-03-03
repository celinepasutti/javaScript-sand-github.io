console.log("You made it to ordergrade.js!");

stop = false;

function javascript () {

}


function solution(gr1, gr2, gr3, gr4, gr5) {
  let kms = (gr1*1) + (gr2*1) + (gr3*1) + (gr4*1) + (gr5*1);
  let done = kms/5;
  console.log(done);

  // F: 1-49% D: 50-59% C: 60-69% B: 70-79 A: 80-100%
  if (done >= 1 && done <= 49.999) return "F.";

  if (done >= 50 && done <= 59.999) return "D.";

  if (done >= 60 && done <= 69.999) return "C.";

  if (done >= 70 && done <= 79.999) return "B.";

  if (done >= 80 && done <= 100) return "A.";

}



function main() {


  let gr1 = document.getElementById("textField1").value;
  let gr2 = document.getElementById("textField2").value;
  let gr3= document.getElementById("textField3").value;
  let gr4 = document.getElementById("textField4").value;
  let gr5 = document.getElementById("textField5").value;

  document.getElementById("validityTest1").innerHTML = testNaN (gr1);
  document.getElementById("validityTest2").innerHTML = testNaN (gr2);
  document.getElementById("validityTest3").innerHTML = testNaN (gr3);
  document.getElementById("validityTest4").innerHTML = testNaN (gr4);
  document.getElementById("validityTest5").innerHTML = testNaN (gr5);

  if (stop == true) {
    document.getElementById("answer").innerHTML = "Restart ... because I said so.";
  } else {
     document.getElementById("answer").innerHTML = "Average letter grade is " + solution(gr1, gr2, gr3, gr4, gr5);
  }
}

function testNaN (number) {
  if(number == "") {
    stop = true;
    return "Field empty. Please enter a real number.";
  }

  if ( isNaN(number) )
  {
    stop = true;
    return "Entry invalid. Please enter a real number.";
  } else
  {
    return "Entry validated.";
  }
}
