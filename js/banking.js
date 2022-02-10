// button event handler added

// Share one function between two(desposit and withdraw) input field
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const depositAmount = parseFloat(inputAmountText);
    // clear deposit input field
    inputField.value = '';
    return depositAmount;
}

document.getElementById('deposit-btn').addEventListener('click', function () {
    //get the input value
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);
    const depositAmount = getInputValue('deposit-input');

    //get current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    //existing amount + new anmount = total deposit
    depositTotal.innerText = previousDepositTotal + depositAmount;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;


});

// handle withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // const widthdrawInput = document.getElementById('withdraw-input');
    // const widthdrawAmountText = widthdrawInput.value;
    // const withdrawAmount = parseFloat(widthdrawAmountText);
    const withdrawAmount = getInputValue('withdraw-input');

    //update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    // update balance after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
});