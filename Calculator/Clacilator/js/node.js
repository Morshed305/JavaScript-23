function Allclear() {
    document.getElementById('display').value = '';
}

function Morshed(character) {
    document.getElementById('display').value += character; 
}

function LastCharacterdelete() {
    var currentDisplayValue = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplayValue.slice(0, -1);
}

function Total() {
    var result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
}