console.log("You made it to the dempts.js!");

let stop = false;

function solution(speed, limit) {
    let speeding = speed - limit;
    let demerits = speeding/5;

    console.log("first", demerits);
    let demnum = Math.floor(demerits);
    console.log("second", demnum);

    if (demnum == 0) return "Above speed limit but within grace range. 0 Demerits";

    if (demnum == 1) return "1 Demerit.";

    if (demnum == 2) return "2 Demerits.";

    if (demnum == 3) return "3 Demerits.";

    if (demnum == 4) return "4 Demerits.";

    if (demnum == 5) return "5 Demerits.";

    if (demnum == 6) return "6 Demerits.";

    if (demnum == 7) return "7 Demerits.";

    if (demnum == 8) return "8 Demerits.";

    if (demnum == 9) return "9 Demerits.";

    if (demnum >= 10) return "License Suspended.";

    if (speed < limit) return "Driving within the limit. 0 Demerits."




    // if( number1 > number2 ) {
    //   return "Number 1 is greater.";
    // } else {
    //   return "Number 2 is greater.";
    //
    // }
  }

function main() {
  let speed = document.getElementById("textField1").value;
  let limit = document.getElementById("textField2").value;

  document.getElementById("validityTest1").innerHTML = testNaN (speed);
  document.getElementById("validityTest2").innerHTML = testNaN (limit);
  if (stop == true) {
    document.getElementById("answer").innerHTML = "Restart ... because I said so.";
  } else {
    document.getElementById("answer").innerHTML = "How many Demerits? " + solution(speed, limit);
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
