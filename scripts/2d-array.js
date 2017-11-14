/*
@twoDarr: function to create a 2d array based on conditions
*/

function twoDarr() {

    var stringToArray = document.getElementById('futureArr');
    var stringToArrayVal = stringToArray.value;
    var twoDindex = document.getElementById('twoDindex');
    var twoDindexVal = twoDindex.value;
    var originalArr = stringToArrayVal.split('');
    var twoDarrayRes = document.getElementById('twoDarrayRes');

    if (stringToArrayVal == undefined || stringToArrayVal == '' || twoDindexVal == undefined || twoDindexVal == '') {
        alert('Please make valid entries to create your two dimensional array');
    } else {

        var futureArr = [];

        for (var i = 0; i < originalArr.length; i + twoDindexVal) {
            futureArr.push(originalArr.splice(0, twoDindexVal));
        }


        if (twoDarrayRes.children.length > 0) {
            console.log('elements exist');
        } else {
            twoDarrayRes.insertAdjacentHTML('afterBegin', '[');

            for (var i = 0; i < futureArr.length; i++) {

                if (i == twoDindexVal - 1) {
                    twoDarrayRes.insertAdjacentHTML('beforeEnd', JSON.stringify(futureArr[i]));
                } else {
                    twoDarrayRes.insertAdjacentHTML('beforeEnd', JSON.stringify(futureArr[i]) + ',');
                }
            }
            twoDarrayRes.insertAdjacentHTML('beforeEnd', ']');
        }
    }

}

function twoDarrPress(e) {
    e = e || window.event;
    if (e.keyCode == 13) {
        document.getElementById('twoDarrButton').click();
        return false;
    }
    return true;
}