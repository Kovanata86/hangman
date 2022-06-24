// import { getWords } from "./utils.js";

function spanCreation(receivedWord){
    let word = document.querySelector('.word');
    for (let i = 1; i <= receivedWord.length; i++){
     
     let spans = document.createElement('span');
     spans.innerHTML = '_';
     word.prepend(spans);
    }

}
