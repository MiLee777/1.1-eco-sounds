import playList from './playList.js';

const play = document.querySelector('#play')
const menu = document.querySelector('#menu')

const audio = new Audio();
let songIndex = 0;
let audioCurrentTime = 0;
audio.src = playList[songIndex].src;

playList.forEach(el => {
    const item = document.createElement('li');
    item.classList.add('menu__item');
    item.textContent = el.title;
    menu.append(item);
});

play.addEventListener('click', playAudio);

let playing = true;

function playAudio() {
    if (playing) {
        play.classList.remove('play');
        play.classList.add('pause');
        audio.play();
        playing = false;
    } else {
        play.classList.remove('pause');
        play.classList.add('play');
        audio.pause();
        playing = true;
    }
}

const menuItem = document.querySelectorAll('.menu__item');

// смена видео
const videos = ["assets/video/rain.mp4", "assets/video/autumn.mp4", "assets/video/forest.mp4", "assets/video/ocean.mp4", "assets/video/space.mp4"];

let itemIndex = 0;

const thisVideo = () => {
    menuItem.forEach(item => {
        item.classList.remove('active');
    })
    menuItem[itemIndex].classList.add('active');
    document.querySelector('#myVideo').src = videos[itemIndex];
}

menuItem.forEach((item, index) => {
    item.addEventListener('click', () => {
        itemIndex = index;
        thisVideo();
    });
});

thisVideo();

// смена песен
menuItem.forEach((item, index) => {
    item.setAttribute('data-index', index);
    item.addEventListener('click', () => {
        songIndex = item.getAttribute('data-index');
        audio.src = playList[songIndex].src;
        playAudio();
    });
});
