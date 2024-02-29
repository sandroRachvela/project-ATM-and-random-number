function guessTheNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    const maxAttempts = 10; // Maximum attempts allowed
    let attempts = 0;
    let guess;

    while (guess !== randomNumber && attempts < maxAttempts) {
        guess = parseInt(prompt("Guess a number between " + min + " and " + max + " (Attempts left: " + (maxAttempts - attempts) + "):"));
        attempts++;

        if (guess < randomNumber) {
            alert("Higher!");
        } else if (guess > randomNumber) {
            alert("Lower!");
        }
    }

    if (guess === randomNumber) {
        alert("Congratulations! You guessed the number " + randomNumber + " in " + attempts + " attempts.");
    } else {
        alert("Sorry, you have exceeded the maximum number of attempts. The correct number was " + randomNumber + ".");
    }
}

guessTheNumber(1, 100);








