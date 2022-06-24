// import { getWords } from "./utils.js";

let button = document.getElementsByClassName('choice')[0]

button.addEventListener('click', () => pictureСhange(2))

function pictureСhange(imgIndex) {
    
    let mapPic = document.getElementById("map");
    let imgs = ['2.png','3.png', '4.png'];
    mapPic.src = './img/'+ imgs[imgIndex];  
  
}

