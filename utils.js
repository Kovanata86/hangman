
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
 
 export function pictureСhange(imgIndex) {
    
   let mapPic = document.getElementById("map");
   let imgs = ['2.png','3.png', '4.png'];
   mapPic.src = './img/'+ imgs[imgIndex];  
 
}
