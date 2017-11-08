/*
@palindrome: function to look for palindrome and return boolean
*/

var macthes = [];

function palindrome(str) {

    if (str == undefined || str == '') {
        alert('Please make an entry');
    } else {
        if (str !== '') {
            matches = str.match(/[a-z]|[A-Z]|[a-z][A-Z]\S\d|\d+/g);
        }

        var lower = matches.join('').toLowerCase();
        var chopUp = lower.split('');
        var reverse = chopUp.reverse();
        var palinCandidate = reverse.join('');

        if (palinCandidate == lower && lower !== '') {
            document.getElementById('result').innerHTML = 'It is a palindrome';
            return true;
        } else {
            document.getElementById('result').innerHTML = 'It is NOT a palindrome';
            return false;
        }
    }

}