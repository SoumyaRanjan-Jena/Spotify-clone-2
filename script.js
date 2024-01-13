console.log('Js is working');

async function getsongs() {
    let a = await fetch('http://127.0.0.1:5500/songs/');
    let response = await a.text();
    //console.log(response);
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[1]);
        }
    }
    return songs;
}

async function main() {
    let songs = await getsongs();
    console.log(songs);

    let songUl = document.querySelector(".songlist").getElementsByTagName("ul")[0];
    for (const song of songs) {
        songUl.innerHTML = songUl.innerHTML + `<li>
                <img class="invert" src="music.svg" alt="music">
                <div class="info">
                    <div style="font-size: 7px;">${song.replaceAll("%20", " ") }</div>
                    <div style="font-size: 10px;">SRJ</div>
                </div>
                <div class="playnow">
                    <span>Play Now</span>
                    <img class="invert" src="play.svg" alt="play">
                </div>
            </li>`;
    }
    // var audio = new Audio(songs[0]);
    // audio.play();
}

main();