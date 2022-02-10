// button event handler added
document.getElementById('deposit-btn').addEventListener('click', function () {
    //get the input value
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;

    //get current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    depositTotal.innerText = depositAmount;
    // clear deposit input field
    depositInput.value = '';
    

}); 