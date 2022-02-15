console.log("You made it to max2.js!");

let stop = false;

        function main()
        {
          let firstNumber = document.getElementById("textField1").value;
          let secondNumber = document.getElementById("textField2").value;
          //document.getElementById("CanBeAnything").innerHTML = alert ("You are connected");
          document.getElementById("validityTest1").innerHTML = testNaN (firstNumber);
          document.getElementById("validityTest2").innerHTML = testNaN (secondNumber);

          if (stop = true;) {
            document.getElementById("answer").innerHTML = "Restart, because I said so!"
          } else {
            document.getElementById("answer").innerHTML = "What did you say?" + solution(firstNumber, secondNumber);
          }
        }

                function testNaN (number)
                {
                  if(number == "") {
                    stop = true;
                  return "Field empty. Please enter a real number."
                  }

                  if ( isNaN(number) )
                  {
                    stop = true;
                    return "Entry invalid. Please enter a real number."
                  } else
                  {
                    return "Entry validated."
                  }
        }
