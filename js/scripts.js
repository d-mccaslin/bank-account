//Business Logic
function BankAccount(startingBalance) {
  this.deposits = [],
  this.withdrawals = [],
  this.startingBalance = startingBalance
}

/*
BankAccount.prototype.balance = function() {
  let balance = 0;
  //return this.deposits - this.withdrawals
  console.log(this.deposits);
} */

BankAccount.prototype.updateBalance = function() {
  //this.balance = this.deposits[this.deposits.length-1].amount;
  let depositTotal = 0;
  for (i = 0; i < this.deposits.length; i++) {
    const depositAmount = this.deposits[i].amount;
    depositTotal += depositAmount;
  }
  let withdrawalTotal = 0;
  for (i = 0; i < this.withdrawals.length; i++) {
    const withdrawalAmount = this.withdrawals[i].amount;
    withdrawalTotal += withdrawalAmount;
  }
  this.balance = this.startingBalance + depositTotal - withdrawalTotal;
}

BankAccount.prototype.addDeposit = function(deposit) {
  this.deposits.push(deposit);
  this.updateBalance();
}

BankAccount.prototype.addWithdrawal = function(withdrawal) {
  this.withdrawals.push(withdrawal);
  this.updateBalance();
}


function Deposit(amount) {
  this.amount = amount,
  this.timestamp = new Date();
}

function Withdrawal(amount) {
  this.amount = amount,
  this.timestamp = new Date();
}

// Bug to fix: if starting balance input is empty to start, it messes up our balance

//UI Logic
$(document).ready(function() {
    let created = false;
    let bankAccount;
    $("#bank").submit(function(event) {
      event.preventDefault();
      // Gather inputs
      let startingBalance = parseInt($("#initialDeposit").val());
      let depositAmount = parseInt($("#depositAmount").val());
      let withdrawalAmount = parseInt($("#withdrawalAmount").val());
      // Create bank account if doesn't exist
      if (!created) {
        bankAccount = new BankAccount(startingBalance);
        created = true;
      }
      // Create new deposit and add to bank account
      if (depositAmount) {
        let newDeposit = new Deposit(depositAmount);
        bankAccount.addDeposit(newDeposit);
      }
      // Create new withdrawal and add to bank account
      if (withdrawalAmount) {
        let newWithdrawal = new Withdrawal(withdrawalAmount);
        bankAccount.addWithdrawal(newWithdrawal);
      }
      // Check bank account object to see if it updated
      console.log(bankAccount);
    })
})