
// HERO SECTION !!!!!!!
// THE FOLLOWING CODE IS FOR THE AUDIO IN THE HERO SECTION
var mysong = document.getElementById("mysong");
var icon = document.getElementById("icon");

icon.onclick = function(){
    if(mysong.paused){
        mysong.play();
        icon.classList.remove("fa-circle-play");
        icon.classList.add("fa-circle-pause");
    }
    else{
        mysong.pause();
        icon.classList.remove("fa-circle-pause");
        icon.classList.add("fa-circle-play");
    }
}


// RELEASE SECTION !!!!!!
// THE FOLLOWIN CODE IS FOR THE NEW RELEASE SECTION
let artist = document.getElementById("track-artist");
let trackName = document.getElementById("track-name");

let display = document.getElementById("display");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let thumbnail = document.getElementsByClassName("thumbnail");

let releases = new Array(

    "assets/images/thumbnails/bg8.png",
    "assets/images/thumbnails/bg10.jpg",
    "assets/images/thumbnails/bg9.jpg"

);

let i = 0;

next.onclick = function(){

    if(i<2){
       
        
        display.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url("'+releases[i+1]+'")';
        thumbnail[i+1].classList.add("active");
        thumbnail[i].classList.remove("active"); 
        i++;

        if(i == 0){
            artist.innerHTML = "LXWKEYXTXT";
            trackName.innerHTML = "'DONT MAKE ME MAD'";
        }

        if(i == 1){
            artist.innerHTML = "D_boii";
            trackName.innerHTML = "'UNDERRATED'";
        } 
               
        if(i == 2){
            artist.innerHTML = "LXWKEYXTXT";
            trackName.innerHTML = "'RUNNING OUTTA LUCK'";
        }
    
    }


}

prev.onclick = function(){
    if(i > 0){
        
        display.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url("'+releases[i-1]+'")';
        thumbnail[i-1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i--;

        if(i == 0){
            artist.innerHTML = "LXWKEYXTXT";
            trackName.innerHTML = "'DONT MAKE ME MAD'";
        }

        if(i == 1){
            artist.innerHTML = "D_boii";
            trackName.innerHTML = "'UNDERRATED'";
        } 
               
        if(i == 2){
            artist.innerHTML = "LXWKEYXTXT";
            trackName.innerHTML = "'RUNNING OUTTA LUCK'";
        }

    }
}


// THE FOLLOWING CODE IS FOR THE CONTAINER-BOX CLASS AND FOR THE TRACKS 

let trackPrev = document.getElementById("track-prev");
let trackNext = document.getElementById("track-next");
let trackPlay = document.getElementById("track-play");

let track1 = document.getElementById("track1");

let test = track1.getAttribute('src', "assets/media/Song1.mp3");

let x = 0;

trackPlay.onclick = function(){
    if(track1.paused && track1.getAttribute('src', "assets/media/Song1.mp3") == test) {
        track1.play();
        trackPlay.classList.add("fa-circle-pause");
        trackPlay.classList.remove("fa-circle-play");
    }
    else{
        track1.pause();
        trackPlay.classList.add("fa-circle-play");
        trackPlay.classList.remove("fa-circle-pause");
    }
}

