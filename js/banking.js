// button event handler added

// Share one function between two(desposit and withdraw) input field
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const depositAmount = parseFloat(inputAmountText);
    // clear input field
    inputField.value = '';
    return depositAmount;
}

//  Deposit and withdraw update with one function
function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    //existing amount + new anmount = total deposit
    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

//  Shared Balance update function
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    /* const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText); */

    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}

document.getElementById('deposit-btn').addEventListener('click', function () {
    //get the input value
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }


    //get and  update deposit total
    /*  const depositTotal = document.getElementById('deposit-total');
     const depositTotalText = depositTotal.innerText;
     const previousDepositTotal = parseFloat(depositTotalText);
     //existing amount + new anmount = total deposit
     depositTotal.innerText = previousDepositTotal + depositAmount; */


    // update balance
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount; */



});

// handle withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // const widthdrawInput = document.getElementById('withdraw-input');
    // const widthdrawAmountText = widthdrawInput.value;
    // const withdrawAmount = parseFloat(widthdrawAmountText);
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if(withdrawAmount > currentBalance){
        console.log('You can not withdraw more than your account balance');
    }


    // get and update withdraw total
    /* const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount; */


    // update balance after withdraw
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount; */


});