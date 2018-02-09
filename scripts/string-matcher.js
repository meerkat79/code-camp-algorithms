if(Array.prototype.matcher) {
    console.warn("Overriding existing Array.prototype.matcher. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
}

else {
    Array.prototype.matcher = function (array) {    
        if(!array) {
            console.log('your entry is not an array!');
            return false;
        }
        
        if(this.length != array.length) {
            console.log('values entered will not match as length is different!');
            return false;
        }

        for (var i=0; this.length > i; i++) {
            if(this[i] instanceof Array && array[i] instanceof Array) {
                if(!this[i].matcher(array[i])) {
                    return false;
                }
            }
            else if (this[i] != array[i]) {
                return false;
            }
        }

        return true;
                
    };

    Object.defineProperty(Array.prototype, "matcher", {enumerable: false});

}

function matchArr () {
    var field1 = document.getElementById('field1');
    var field2 = document.getElementById('field2');
    var field1Val = field1.value;
    var field2Val = field2.value;
    
    if(field1Val==undefined || field1Val==null || field1Val=='' || field2Val==undefined || field2Val==null || field2Val=='') {
        alert('Please make a valid entries in both fields');
    }
    else {
        var field1Arr =  field1Val.toLowerCase().split('');
        var field2Arr = field2Val.toLowerCase().split('');

        var organisedArr1 = field1Arr.sort();
        var organisedArr2 = field2Arr.sort();

        if(organisedArr1.matcher(organisedArr2)) {
            console.log('arrays items match? true');
            document.getElementById('matcherRes').innerHTML = 'The items in the array match :)';
        }

        else {
            console.log('arrays items match? false');
            document.getElementById('matcherRes').innerHTML = 'The items in the array do not match :(';
        }
    }    
}


/*
 example for freecodecamp

 function mutation (arr) {

        var field1 =  arr[0].toLowerCase();
        var field2 = arr[1].toLowerCase();

        if(field1.indexOf(field2) !== -1) {
          return true;
        }

        else {
          return false;
        }   
}

mutation(["hello", "hey"]);

*/