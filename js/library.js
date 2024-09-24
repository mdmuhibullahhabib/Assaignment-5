
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue); 
    return textNumber; 
}

// Show section function
function showSectionById(id){
    // hide section
    document.getElementById('donate-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    // show the section
    document.getElementById(id).classList.remove('hidden');
}

// Time & date
const date = new Date();
