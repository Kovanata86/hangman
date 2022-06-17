
const words = ['тетрадь','ручка','слово','книга','часы','машина','огонь','мир','ветка','вода']

export function  getWords() {
    let word = words[Math.floor(Math.random() * words.length)];
    return word;
}

console.log(getWords());