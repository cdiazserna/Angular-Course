interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer : AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

const song = 'New Song';

const { 
    song: anotherSong,
    songDuration: duration,
    details: details } = audioPlayer;

const { author } = details;

console.log('Song1: ', anotherSong);
console.log('Duration: ', duration);
console.log('Song2: ', song);
console.log('Author: ', author);

export {};