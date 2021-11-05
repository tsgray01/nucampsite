//Create a random number function
function generate_random(max_number) {
    //Generate a random number from 0 to max_number
    return Math.round(Math.random() *max_number);
    }
    // Select the elements on the page to interact with
    let button = document.querySelector("button");
    let answer = document.querySelector("#answer");
    // add a click event to the button
    button.addEventListener("click", function() {
      //Your procedure goes here
      //0 -->"Yes definitely"
      //1 -->"No certainly not"
      //2 -->"Ask again later"
      //3 -->"I really don't care"
      
      //Generate a random number
      let randomNumber = generate_random(3);
     
      // Turn the random number into a answer using the key above
      let answerText = "";
      
      if (randomNumber == 0) {
     
        //Procedure to run if the condition is true
        answerText = "Yes definitely!";
      }
      else if (randomNumber == 1) {
        //Procedure to run if the condition is true
        answerText = "No certainly not!"
      }
      else if (randomNumber == 2) {
        //Procedure to run if the condition is true
        answerText = "Ask again later";
      }
      else {
        // Procedure to run no conditions are true
      answerText = "I really don't care!";
      }
      //Display the answer in the answer paragraphy
     answer.innerHTML = answerText;
    });