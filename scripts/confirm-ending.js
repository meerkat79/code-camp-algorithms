/*
@confirmEnding: function to check whether provided string ends with provided ending
*/

function confirmEnding() {
    
        var providedString = document.getElementById('providedString');
        var providedEnding = document.getElementById('providedEnding');
        var providedStringValue = providedString.value;
        var providedEndingValue = providedEnding.value;
        var endingToCheck = providedEndingValue.length;
    
        var matchResult = document.getElementById('matchResult');
    
        // codeCamp snippet
        if (providedStringValue.substr(-endingToCheck) == providedEndingValue) {
            console.log('true');
        } else {
            console.log('false');
        }
    
        //codeCamp snipet ends
    
        if (providedString.value == undefined || providedString.value == '' || providedEnding.value == undefined || providedEnding.value == '') {
            alert('Please be sure to provide both a string and an ending to check');
        } else {
            if (providedString.value == providedEnding.value) {
    
                if (matchResult.children.length > 0) {
    
                    var len = matchResult.children.length;
                    var successChild = document.getElementById('success');
                    var dangerChild = document.getElementById('danger');
    
                    if (successChild) {
                        matchResult.removeChild(successChild);
                    }
    
                    if (dangerChild) {
                        matchResult.removeChild(dangerChild);
                    }
                }
    
                var matchChild = matchResult.appendChild(document.createElement('span'));
                matchChild.id = 'success';
                matchChild.classList = 'bg-success';
                matchChild.innerHTML = providedString.value + ' query matches string value ' + providedEnding.value;
            } else {
                if (matchResult.children.length > 0) {
                    var successChild = document.getElementById('success');
                    var dangerChild = document.getElementById('danger');
    
                    if (successChild) {
                        matchResult.removeChild(successChild);
                    }
    
                    if (dangerChild) {
                        matchResult.removeChild(dangerChild);
                    }
                }
                var matchChild = matchResult.appendChild(document.createElement('span'));
                matchChild.id = 'danger';
                matchChild.classList = 'bg-danger';
                matchChild.innerHTML = providedString.value + ' does not matche the provided target string of ' + providedEnding.value;
            }
        }    
    }
    
    function matchKeyPress(e) {
        e = e || window.event;
        if (e.keyCode == 13) {
            document.getElementById('checkEnding').click();
            return false;
        }
        return true;
    }