let secretNumber =Math.floor(Math.random() *100) + 1;
let attemptsLeft = 7;

const input = document.getElementById("guessInput");
const message = document.getElementById("message");
const attempts = document.getElementById("attempts");

function checkGuess(){
    let guess = Number(input.value);

    if(attemptsLeft <= 0){
        message.textContent = "🚫 Game is over! press Restart";
        return;
    }
    if(input.value === "" || isNaN(guess)){
        message.textContent = "❌ Please enter a valid number!";
        return;
    }
    if(guess < 1 || guess > 100){
        message.textContent = "⚠️ Enter a number between 1 and 100";
        return;
    }


    if(guess < secretNumber) {
        message.textContent ="📈 Too Low! Try a BIGGER number⬆️";
    } else if(guess > secretNumber){
        message.textContent ="📉 Too High! Try a SMALLER number⬇️";
    } else{
        message.textContent = "🎉 Correct! You Win!";
        return;
    }

    attemptsLeft--;
    attempts.textContent = "Attempts left:" + attemptsLeft;

    if(attemptsLeft === 0){
        message.textContent = "😢 Game Over! Number Was "+ secretNumber;
    }
    input.value = "";
}
function restartGame(){
    secretNumber = Math.floor(Math.random()* 100) +1;
    attemptsLeft =7;
    message.textContent = "Guess a number between 1 and 100";
    attempts.textContent = "";
    input.value = "";
}