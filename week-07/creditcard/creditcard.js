function displayError(msg) {
    const errorDiv = document.querySelector('.errors');
    if (errorDiv) errorDiv.textContent = msg;
}

function submitHandler(event) {
    event.preventDefault();
    let errorMsg = '';
    displayError('');

    const cardNum = document.querySelector('#cardNumber').value.replace(/\s+/g, ''); 
    const expMonth = Number(document.querySelector('#month').value);
    const expYear = Number(document.querySelector('#year').value) + 2000;
    const cvv = document.querySelector('#cvv').value;

    const now = new Date();
    const currentMonth = now.getMonth() + 1; 
    const currentYear = now.getFullYear();

    if (!/^\d{16}$/.test(cardNum)) {
        errorMsg += 'Card number must be 16 digits. ';
    } else if (cardNum !== '1234567890123456') { 
        errorMsg += 'Card number is not valid. ';
    }

    if (!expMonth || !expYear || expMonth < 1 || expMonth > 12) {
        errorMsg += 'Invalid expiration date. ';
    } else if (expYear < currentYear || (expYear === currentYear && expMonth < currentMonth)) {
        errorMsg += 'Card is expired. ';
    }

    if (!/^\d{3,4}$/.test(cvv)) {
        errorMsg += 'Invalid CVV. ';
    }

    // Check if there were errors
    if (errorMsg !== '') {
        displayError(errorMsg);
        return;
    }

    document.querySelector('.Bank-Card').innerHTML = '<div class="success-message"><h2>Thank you for your purchase.</h2></div>';
    }
    
    document.querySelector('#checkoutForm').addEventListener('submit', submitHandler);