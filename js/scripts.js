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
  this.balance = this.startingBalance + depositTotal;
}

BankAccount.prototype.addDeposit = function(deposit) {
  this.deposits.push(deposit);
  this.updateBalance();
}


function Deposit(amount) {
  this.amount = amount,
  this.timestamp = new Date();
}

function Withdrawal(amount) {
  this.amount = amount
}

// Bug to fix: if starting balance input is empty to start, it messes up our balance

//UI Logic
$(document).ready(function() {
    let created = false;
    let bankAccount;
    $("#bank").submit(function(event) {
      event.preventDefault();
      // Gather inputs
      let depositAmount = parseInt($("#depositAmount").val());
      let startingBalance = parseInt($("#initialDeposit").val());
      // Create bank account if doesn't exist
      
      if (!created) {
        bankAccount = new BankAccount(startingBalance);
        created = true;
      }
      // Create new deposit and add to bank account
      let newDeposit = new Deposit(depositAmount);
      bankAccount.addDeposit(newDeposit);
      console.log(bankAccount);
    })
})