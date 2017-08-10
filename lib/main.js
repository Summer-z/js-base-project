function getEntireLyrics(num) {
    let result = '';
    while (num > 1) {
        result += num +  ' bottles of beer on the wall, ' + num + ' bottles of beer.\n' +
            'Take one down and pass it around, ' + (num - 1) + (num === 2 ? ' bottle' : ' bottles') + ' of beer on the wall.\n';
        num--;
    }
    if (num === 1) {
        result += num + ' bottle of beer on the wall, ' + num + ' bottle of beer.\n' +
            'Take one down and pass it around, ' + 'no more bottles' + ' of beer on the wall.\n';
        num--;
    }
    if (num === 0) {
        result += 'No more' +  ' bottles of beer on the wall, ' + 'no more bottles of beer.\n' +
            'Go to the store and buy some more, 99 bottles' + ' of beer on the wall.';
    }
    return result;
}

module.exports = getEntireLyrics;