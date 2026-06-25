const btn = document.getElementById("btn")
const paperBtn = document.getElementById("paper-btn")
const scissorsBtn = document.getElementById("scissors-btn")

// console.log(rockBtn);

btn.addEventListener("click", () => {
    const randomNumber = Math.random();

    if (randomNumber >=0 && randomNumber < 1/3) {
        console.log("rock")
    } 
    else if(randomNumber >= 1/3 && randomNumber < 2/3){
        console.log("paper");
    } else{
        console.log("scissors");
        
    }
    
})