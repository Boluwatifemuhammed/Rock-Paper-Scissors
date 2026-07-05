const buttons = document.querySelectorAll(".choice-btn");
const aiCardContent = document.getElementById("aicard-content");
const userCard = document.getElementById("user-card");
const rockDiv = document.getElementById("rock-div")
const paperDiv = document.getElementById("paper-div")
const scissorsDiv = document.getElementById("scissors-div")
const moveBtn = document.getElementById("move-btn")
const winCount = document.getElementById("wins-count")
const lossCount = document.getElementById("losses-count")
const drawCount = document.getElementById("draws-count")

// console.log(rockBtn);

function showUserRock() {
    userCard.innerHTML = rockDiv.innerHTML;

}

function showUserPaper() {
    userCard.innerHTML = paperDiv.innerHTML;

}

function showUserScissors() {
    userCard.innerHTML = scissorsDiv.innerHTML;

}



function showAiRock() {
    aiCardContent.innerHTML = rockDiv.innerHTML;
}

function showAiPaper() {
    aiCardContent.innerHTML = paperDiv.innerHTML;
    
}

function showAiScissors() {
    aiCardContent.innerHTML = scissorsDiv.innerHTML;
    
}


let result = 0;


buttons.forEach((button) =>{

    button.addEventListener("click", () => {
    const choice = button.dataset.choice;

    if (choice === "rock") {
        showUserRock();
    } 
    else if(choice === "paper"){
        showUserPaper();
    } else{
        showUserScissors();
        
    }
    
    });

});


buttons.forEach((button) =>{

    button.addEventListener("click", () => {
    const randomNumber = Math.random();

    if (randomNumber >=0 && randomNumber < 1/3) {
        showAiRock();
    } 
    else if(randomNumber >= 1/3 && randomNumber < 2/3){
        showAiPaper();
    } else{
        showAiScissors();
        
    }
    
    });

});



buttons.forEach((button) => {
  button.addEventListener("click", () => {


    if (
      (aiCardContent.innerHTML === scissorsDiv.innerHTML &&
      userCard.innerHTML === paperDiv.innerHTML) ||
      
      (aiCardContent.innerHTML === paperDiv.innerHTML &&
      userCard.innerHTML === rockDiv.innerHTML) ||

      (aiCardContent.innerHTML === rockDiv.innerHTML &&
      userCard.innerHTML === scissorsDiv.innerHTML)
      
    ) {
      moveBtn.textContent = "LOOSE"
    } else {
      moveBtn.textContent = "ion know"
      
    }
    

  });
});