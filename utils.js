
const words = ['тетрадь','ручка','слово','книга','часы','машина','огонь','мир','ветка','вода']

export function  getWords() {
    let word = words[Math.floor(Math.random() * words.length)];
    return word;
}

export function getLetPos (word, letter) {
    let posNumArr = [];
    let privSearchResalt;
 
    for (; ; ){
       const searchIndex = privSearchResalt === undefined ? 0 : privSearchResalt + 1;
       privSearchResalt = word.indexOf(letter, searchIndex ) // -1
       if(privSearchResalt === -1){
          break;
       } 
       posNumArr.push(privSearchResalt);
 
    }
 
    return posNumArr;
 }


 
 export  function spanCreation(receivedWord){
   let word = document.querySelector('.word');
   for (let i = 1; i <= receivedWord.length; i++){
    
    let spans = document.createElement('span');
    spans.innerHTML = '_';
    word.prepend(spans);
   }

}

 
 let button = document.getElementsByClassName('choice');
 button.onclick = function pictureСhange(){
     
     let i = 0;
     let mapPicture = document.getElementById("mapPicture");
     let imgs = new Array('1.png','2.png', '3.png', '4.png');

}


function isGameWon (){
   let word = document.querySelector(.'word');
   let wordsArr = [...word.children];
   return wordsArr.every(span => span.textContent !== '_');
}
 