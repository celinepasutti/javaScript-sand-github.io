console.log("You made it to FizzBuzz.js!");

let stop = false;

function solution(number) {
    if (number%3 == 0 && number%5 == 0) {
      return "FizzBuzz";
    } else if (number%3 == 0) {
      return "Fizz";
    } else if (number%5 == 0) {
      return "Buzz";
    } else {
      return(number);
    }
}

function main() {
  let number = document.getElementById("textField1").value;
  document.getElementById("validityTest1").innerHTML = testNaN (number);

  if (stop == true) {
    document.getElementById("answer").innerHTML = "Restart ... because I said so.";
  } else {
    document.getElementById("answer").innerHTML =  solution(number);
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
