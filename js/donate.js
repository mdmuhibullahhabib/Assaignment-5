
// Noakhali Donate Money
document.getElementById('noakhali-donate-money').addEventListener('click', function (event){
    event.preventDefault();

    const donateMoney = getInputFieldValueById('noakhali-input-donate-money');
    const donateBox = getTextFieldValueById('noakhali-donatebox-balance')
    const balance = getTextFieldValueById('account-balance');


    if(balance >= donateMoney){
        const newBalance = balance - donateMoney;
        const noakhaliDonateBoxBalance = donateBox + donateMoney;

        document.getElementById('noakhali-donatebox-balance').innerText = noakhaliDonateBoxBalance;
        document.getElementById('account-balance').innerText = newBalance;

        alert('Donate Successful')
    }
    else{
        alert('Failed to the Donate')
    }
})


// Feni Donate Money
document.getElementById('feni-donate-money').addEventListener('click', function (event){
    event.preventDefault();

    const donateMoney = getInputFieldValueById('feni-input-donate-money');
    const donateBox = getTextFieldValueById('feni-donatebox-balance')
    const balance = getTextFieldValueById('account-balance');


    if(balance >= donateMoney){
        const newBalance = balance - donateMoney;
        const feniDonateBoxBalance = donateBox + donateMoney;

        document.getElementById('feni-donatebox-balance').innerText = feniDonateBoxBalance;
        document.getElementById('account-balance').innerText = newBalance;

        alert('Donate Successful')
    }
    else{
        alert('Failed to the Donate')
    }
})


// Quota Donate Money
document.getElementById('quota-donate-money').addEventListener('click', function (event){
    event.preventDefault();

    const donateMoney = getInputFieldValueById('quota-input-donate-money');
    const donateBox = getTextFieldValueById('quota-donatebox-balance')
    const balance = getTextFieldValueById('account-balance');


    if(balance >= donateMoney){
        const newBalance = balance - donateMoney;
        const quotaDonateBoxBalance = donateBox + donateMoney;

        document.getElementById('quota-donatebox-balance').innerText = quotaDonateBoxBalance;
        document.getElementById('account-balance').innerText = newBalance;

        alert('Donate Successful')
    }
    else{
        alert('Failed to the Donate')
    }
})
