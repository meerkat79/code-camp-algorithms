/*
@repeatStringNumTimes: function to repeat a string by given number
*/

function repeatStringNumTimes() {
    
        var stringToRepeat = document.getElementById('stringToRepeat');
        var timesToRepeat = document.getElementById('timesToRepeat');
        var stringToRepeatVal = stringToRepeat.value;
        var timesToRepeatVal = timesToRepeat.value;
        var repeaterArr = [];
    
        if (stringToRepeatVal == undefined || stringToRepeatVal == '' || timesToRepeatVal == undefined || timesToRepeatVal == '') {
            alert('Please be sure to provide both a string to repeat and a number by which to repeat the string by');
        } else {
    
            for (var i = 0; i < timesToRepeatVal; i++) {
                repeaterArr.push(stringToRepeatVal);
            }
    
            var repeaterStr = repeaterArr.join('');
            document.getElementById('repeatResult').innerHTML = repeaterStr;
        }
    }
    
    function repeatPress(e) {
        e = e || window.event;
        if (e.keyCode == 13) {
            document.getElementById('repeatStringClick').click();
            return false;
        }
        return true;
    }