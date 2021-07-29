const app = () => {
    const song = document.querySelector('.song');
    const play = document.querySelector('.play');
    const outline = document.querySelector('.moving-outline circle');
    const video = document.querySelector('.vid-container video');

    //Sounds
    const sounds = document.querySelector('.sound-picker button');
    //Time Display
    const timeDisplay = document.querySelector('.time-display');
    //Get the length of the outline
    const outlineLength = outline.getTotalLength();
    //Duration 
    let fakeDuration = 600;

    outline.style.strokeDasharray = 100;
    outline.style.strokeDashoffset = outlineLength;

    //play sound
    play.addEventListener('click', () => {
        checkPlaying(song);
    });

    //Create a function specific to stop and play the sound
    const checkPlaying = song => {
        if(song.paused) {
            song.play();
            video.play();
            play.src = './svg/pause.svg';
        }else{
            song.pause();
            video.pause();
            play.src = './svg/play/.svg';
        }
    }


}