console.log("You made it to modules.js!");

let stop = false;

function solution(number) {
  if ( number%2 == 1 ) {
    return "odd.";
  } else {
    return "even.";
  }
}

function main() {
  let number = document.getElementById("textField1").value;
  document.getElementById("validityTest1").innerHTML = testNaN (number);

  if (stop == true) {
    document.getElementById("answer").innerHTML = "Restart ... because I said so.";
  } else {
    document.getElementById("answer").innerHTML = "This number is " + solution(number);
  }
}

function testNaN (number) {
  if(number == "") {
    stop = true;
    return "Field empty. Please enter a number.";
  }

  if ( isNaN(number) ) {
    stop = true;
    return "Entry invalid. Please enter a number.";
  } else {
    return "Entry validated.";
  }
}
