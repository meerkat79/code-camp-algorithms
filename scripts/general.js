function mutation() {

    var entry1 = document.getElementById('entry1').value;
    var entry2 = document.getElementById('entry2').value;

    mutArr = [entry1, entry2];

    console.log(mutArr.length);

    for (var i = 0; mutArr.length > i; i++) {
        console.log(mutArr[i]);
    }

}