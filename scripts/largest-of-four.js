/*
@largestOfFour: function to look for largest number in each provided array and return single array with values
*/

var fourArr = [
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
];

var nestedParent = document.getElementById('nested-parent');

for (var i = 0; i < fourArr.length; i++) {
    var nestedChild = nestedParent.appendChild(document.createElement('li'));
    nestedChild.innerHTML = '[ ' + fourArr[i] + ' ]';
    nestedParent.appendChild(nestedChild);
}

function largestOfFour() {

    var largeNumbersArr = [];

    fourArr.forEach(function(nestedArr) {
        nestedArr.sort(function(a, b) {
            return b - a;
        });
        largeNumbersArr.push(nestedArr[0]);
    });

    console.log(largeNumbersArr);
    var res = document.getElementById('arrResult');
    res.innerHTML = '[ ' + largeNumbersArr + ' ]';
}