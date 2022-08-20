function getPin() {
    const pin = pinGenerat();
    if ((pin / 1000) >= 1) {
        return pin;
    } else {
        return getpin();
    }
}


function pinGenerat() {
    return Math.round(Math.random() * 10000);
}

document.getElementById('pin-generate').addEventListener('click', function() {

    const getPinField = document.getElementById('pin-field');
    getPinField.value = getPin();
})

function getKeybordPin(keyValue, displayField) {

    // console.log(typeof(keyValue));
    if (isNaN(keyValue)) {
        if (keyValue == 'C') {
            displayField.value = '';
        } else if (keyValue == "<") {
            displayString = (displayField.value);
            const pinArray = displayString.split('');
            pinArray.pop();
            const pinString = pinArray.join('');
            displayField.value = pinString;

        } else if (keyValue === 'Submit') {
            console.log(getMatchResult());
        }
    } else {
        displayField.value += keyValue + '';
    }

}

function getMatchResult() {
    const displayField = document.getElementById('displayField');
    const userTypePin = displayField.value;
    const getPinField = document.getElementById('pin-field');
    const randomPin = getPinField.value;
    const correctElement = document.getElementById('correctPin');
    const incorrectElement = document.getElementById('wrongPin');
    if (userTypePin === randomPin) {
        correctElement.style.display = 'block';
        incorrectElement.style.display = 'none';
        displayField.value = "";
        getPinField.value = '';
    } else {
        correctElement.style.display = 'none';
        incorrectElement.style.display = 'block';
        displayField.value = "";



    }

}

document.getElementById('calculator').addEventListener('click', function(even) {
    const keyValue = even.target.innerText;
    //  console.log((isNaN(keyValue)));
    const displayField = document.getElementById('displayField');
    getKeybordPin(keyValue, displayField);

})