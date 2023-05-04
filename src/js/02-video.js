import Player from '@vimeo/player';
var throttle = require('lodash.throttle');


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(function (seconds) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
}, 1000));

const savedTime = localStorage.getItem('videoplayer-current-time') || 0;
const parsedTime = JSON.parse(savedTime);

player.setCurrentTime(parsedTime.seconds).then(function (seconds) {
}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});