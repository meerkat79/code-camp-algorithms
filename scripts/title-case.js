/*
@titleCase: function to change string to Titte string
*/

function titleCase() {
    
        var titleValue = document.getElementById('toTittle').value;
    
        if (titleValue == undefined || titleValue == '') {
            alert('Please enter a valid value');
        } else {
            var myArr = titleValue.split(' ');
            var wordArr = myArr.map(function(w) {
                return w.toLowerCase();
            });
            var idealW = [];
    
            wordArr.forEach(function(item) {
                idealW.push(item.replace(item[0], item[0].toUpperCase()));
            });
    
            var compiledArr = idealW.join(' ');
    
            document.getElementById('compileVal').innerHTML = compiledArr;
        }   
    
    }
    
    function searchKeyPress(e) {
        e = e || window.event;
        if (e.keyCode == 13) {
            document.getElementById('toTittleBtn').click();
            return false;
        }
        return true;
    }