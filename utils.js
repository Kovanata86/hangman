
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
 const result  = getLetPos();



 if ( result.length === 0 ) {
   counter()
 }