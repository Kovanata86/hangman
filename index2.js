import { getWords } from "./utils.js";

const letter = document.getElementById("letter").value;


function showRightLetter (rightLetterPos,letter) {

   const newWord = document.getElementsByClassName('word')[0] 
   const spans = newWord.children; 
   rightLetterPos.forEach(letterPos => {
    spans[letterPos].textContent = letter;
    
   });

}
