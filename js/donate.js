

// Noakhali Donate Money
document.getElementById('noakhali-donate-money').addEventListener('click', function (event) {
    event.preventDefault();

    const donateMoney = getInputFieldValueById('noakhali-input-donate-money');
    const donateBox = getTextFieldValueById('noakhali-donatebox-balance')
    const balance = getTextFieldValueById('account-balance');


    if (balance >= donateMoney) {
        const newBalance = balance - donateMoney;
        const noakhaliDonateBoxBalance = donateBox + donateMoney;

        document.getElementById('noakhali-donatebox-balance').innerText = noakhaliDonateBoxBalance;
        document.getElementById('account-balance').innerText = newBalance;

        // Transaction
        const div = document.createElement('div');
        div.innerHTML = `
             <div class="border border-slate-200 rounded-lg space-y-4 p-5">
             <h3 class="text-2xl font-bold">${donateMoney} Taka is Donated  for Flood at Noakhali, Bangladesh</h3>
             <p>${date}</p>
            </div>
        `
        document.getElementById('transaction-container').appendChild(div);

        alert('Donate Successful')
    }
    else {
        alert('Failed to the Donate')
    }
})


// Feni Donate Money
document.getElementById('feni-donate-money').addEventListener('click', function (event) {
    event.preventDefault();

    const donateMoney = getInputFieldValueById('feni-input-donate-money');
    const donateBox = getTextFieldValueById('feni-donatebox-balance')
    const balance = getTextFieldValueById('account-balance');


    if (balance >= donateMoney) {
        const newBalance = balance - donateMoney;
        const feniDonateBoxBalance = donateBox + donateMoney;

        document.getElementById('feni-donatebox-balance').innerText = feniDonateBoxBalance;
        document.getElementById('account-balance').innerText = newBalance;

        // Transaction
        const div = document.createElement('div');
        div.innerHTML = `
             <div class="border border-slate-200 rounded-lg space-y-4 p-5">
             <h3 class="text-2xl font-bold">${donateMoney}  Taka is Donated for Flood Relief in Feni, Bangladesh</h3>
             <p>${date}</p>
            </div>
        `
        document.getElementById('transaction-container').appendChild(div);

        alert('Donate Successful')
    }
    else {
        alert('Failed to the Donate')
    }
})


// Quota Donate Money
document.getElementById('quota-donate-money').addEventListener('click', function (event) {
    event.preventDefault();

    const donateMoney = getInputFieldValueById('quota-input-donate-money');
    const donateBox = getTextFieldValueById('quota-donatebox-balance')
    const balance = getTextFieldValueById('account-balance');


    if (balance >= donateMoney) {
        const newBalance = balance - donateMoney;
        const quotaDonateBoxBalance = donateBox + donateMoney;

        document.getElementById('quota-donatebox-balance').innerText = quotaDonateBoxBalance;
        document.getElementById('account-balance').innerText = newBalance;

        // Transaction
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="border border-slate-200 rounded-lg space-y-4 p-5">
             <h3 class="text-2xl font-bold">${donateMoney} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h3>
             <p>${date}</p>
            </div>
        `
        document.getElementById('transaction-container').appendChild(div);

        alert('Donate Successful')
    }
    else {
        alert('Failed to the Donate')
    }
})
