console.log("You made it to grts1.js!");

let stop = false;

function solution(time) {
  //Early morning (12AM - 6:59AM): "Hello."
  //Before noon (7AM - 11:59AM): "Good morning!"
  //Afternoon  (12PM - 4:59PM): "Good afternoon!"
  //Evening (5PM - 11:59PM): "Good evening."

  if (time >= 12:00 AM && time <= 6:59 AM) return "Hello.";

  if (time >= 7:00 AM && time <= 11:59 AM) return "Good morning!";

  if (time >= 12:00 PM && time <= 4:59 PM) return "Good afternoon!";

  if (time >= 5:00 PM && time <= 11:59 PM) return "Good evening.";



}

function main() {
    let time = document.getElementById("textField1").value;
    console.log("time var", time);
    document.getElementById("validityTest1").innerHTML = testNaN (time);

    if (stop == true) {
      document.getElementById("answer").innerHTML = "Restart ... because I said so.";
    } else {
       document.getElementById("answer").innerHTML = "Average letter grade is " + solution(time);
    }
  }


  function testNaN(number) {
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
