const title = document.querySelector('#title');
const artist = document.querySelector('#artist');

const music = document.querySelector('audio');

const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// FAKE DATABASE 

const songs = [{
    name: 'm-1',
    surname: 'Ceza',
    displayname: 'M-1'
}, {
    name: 'm-2',
    surname: 'Ceza',
    displayname: 'M-2'
}, {
    name: 'm-3',
    surname: 'Ceza',
    displayname: 'M-3'
}, {
    name: 'm-4',
    surname: 'Ceza',
    displayname: 'M-4'
}];

// check if playing
// state (veziyyet ozu)

let isPlaying = false;

function playSong() {
    isPlaying = true
    playBtn.classList.replace("fa-play","fa-pause");
    playBtn.setAttribute("title","Pause");
    music.play()
}

function pauseSong() {
    isPlaying = true
    playBtn.classList.replace("fa-pause","fa-play");
    playBtn.setAttribute("title","Play");
    music.pause()
}

// 1.CALLBACK 2.TERNARY OPERATOR

playBtn.addEventListener('click',()=>(isPlaying ? pauseSong() : playSong()))

// PARAMETRLI FUNKSIYALAR

//function usaqlaraSalamDe(name) {
  //  console.log("Hi" + name)
    //console.log(`Hi ${name}`)
//}

function loadSong(mahni) {
    // innerText textContent innerHTML
     
}