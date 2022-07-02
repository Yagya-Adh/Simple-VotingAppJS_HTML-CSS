/* function inceramentValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
    console.log('a is greate', +value);
}

function inceramentVal() {
    var value = parseInt(document.getElementById('num').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('num').value = value;
    console.log('b is greate', +value);
}
 */
function inceramentValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
    console.log('a is greate', +value);
}

function inceramentVal() {
    var value = parseInt(document.getElementById('num').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('num').value = value;
    console.log('b is greate', +value);
}

function displayResult() {
    var a = parseInt(document.getElementById('number').value, 10);
    var b = parseInt(document.getElementById('num').value, 10);
    var resulta = 'A';
    var resultb = 'B';
    var resultc = 'Draw';
    if (a > b) {
        document.getElementById('show').value = resulta;
    }
    if (b > a) {
        document.getElementById('show').value = resultb;
    }
    if (a == b) {
        document.getElementById('show').value = resultc;
    }
    if (a == 0 || b == 0) {
        document.getElementById('show').value = 'Start Vote';
    }
}
