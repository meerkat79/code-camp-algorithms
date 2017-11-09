function truncateString() {

    var stringToTruncate = document.getElementById('stringToTruncate');
    var indexToTruncate = document.getElementById('indexToTruncate');
    var stringToTruncateVal = stringToTruncate.value;
    var indexToTruncateVal = indexToTruncate.value;
    var truncateArr = stringToTruncateVal.split('');

    if (stringToTruncateVal.length > indexToTruncateVal) {

        if (indexToTruncateVal <= 3) {
            truncateArr.splice(indexToTruncateVal, stringToTruncateVal.length, '...');
            var humpty = truncateArr.join('');
            var res = document.getElementById('truncateResult');
            res.innerHTML = humpty;

        } else {
            truncateArr.splice(indexToTruncateVal - 3, stringToTruncateVal.length, '...');
            var humpty = truncateArr.join('');
            var res = document.getElementById('truncateResult');
            res.innerHTML = humpty;
        }

    } else {
        var res = document.getElementById('truncateResult');
        res.innerHTML = stringToTruncateVal;
    }
}

function truncatePress(e) {
    e = e || window.event;
    if (e.keyCode == 13) {
        document.getElementById('truncateStringClick').click();
        return false;
    }
    return true;
}