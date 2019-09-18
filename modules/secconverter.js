function convTime(timeSecConv) {
    var hrs, min, sec;
    sec = Math.floor(timeSecConv % 60);
    min = Math.floor((timeSecConv / 60) % 60);
    hrs = Math.floor((timeSecConv / (60 * 60)) % 24);

    if (hrs == 0) {
        return (min + 'min ' + sec + 'sec');
    } else if (min == 0 && hrs == 0) {
        return (sec + 'sec');
    } else if (min == 0) {
        return (hrs + 'hrs ' + sec + 'sec');
    } else {
        return (hrs + 'hrs ' + min + 'min ' + sec + 'sec');
    }
}

exports.timeFromSec = convTime;