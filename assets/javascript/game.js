// $(document).ready(function() {

let words=("apple", "pineapple", "banana", "cherry", "orange", "peach", "watermelon");

let word = words[Math.floor(Math.random() * words.length)];

let answerArray =[];

for (let i=0; i<word.length; i++){
    answerArray[i] = "_";
}

let remainingLetters = word.length;

//              *****THE MAIN GAME LOOP*****

// $(word).keyup(function(){
//     $(answerArray[i]);
// });



// //Need to make these on key up events
// while (remainingLetters > 0) {
//     console.log(answerArray.join(" "));
//     let guess = text("Guess a letter!");
//     if (guess == null) {
//         break;
//     }
//     else if (guess.length !== 1) {
//         alert("Please press a single letter.");
//     }
//     else {
//         for (let j = 0; j < word.length; j++) {
//             if (word[j] === guess) {
//                 answerArray[j] = guess;
//                 remainingLetters--;
//             }
//         }
//     }

    //      *****END OF THE MAIN GAME LOOP*****
// }

// console.log(answerArray.join(" "));
// console.log("Good job! the answer was" + word);






// });