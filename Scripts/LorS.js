console.log("You made it to the LorS.js!");

let stop = false; //Boolean for testNaN() validation function, see end of file

function solution(width, height) {
  if ( width == height ) return "Square.";
//ternary op example (single comparison),, needs single-line if statement to limit choices.
  // return (width > height) ? "Portrait." : "Landscape.";

  if( width > height ) {
    return "Landscape.";
  } else {
    return "Portrait.";
  }
}

function main() {
  let width = document.getElementById("textField1").value;
  let height = document.getElementById("textField2").value;
  //document.getElementById("CanBeAnything").innerHTML = alert ("You are connected");
  document.getElementById("validityTest1").innerHTML = testNaN (width);
  document.getElementById("validityTest2").innerHTML = testNaN (height);
  if (stop == true)
  {
    document.getElementById("answer").innerHTML = "Restart ... because I said so."
  } else {
    document.getElementById("answer").innerHTML = "This image is in  " + solution(width, height);
  }
}

function testNaN (number) {
  if(number == "") {
    stop = true;
    return "Field empty. Please enter a number."
  }

  if ( isNaN(number) )
  {
    stop = true;
    return "Entry invalid. Please enter a number."
  } else
  {
    return "Entry validated."
  }
}
