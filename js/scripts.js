//Business Logic
function BankAccount(balance) {
  this.deposits = [],
  this.withdrawals = [],
  this.balance = balance;
}

/*
BankAccount.prototype.balance = function() {
  let balance = 0;
  //return this.deposits - this.withdrawals
  console.log(this.deposits);
} */

BankAccount.prototype.updateBalance = function() {
  this.balance = this.deposits[this.deposits.length-1].amount;
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


let bankAccount = new BankAccount(0);

//UI Logic
$(document).ready(function() {
    $("#bank").submit(function(event) {
      event.preventDefault();
      let depositAmount = parseInt($("#depositAmount").val());
      let newDeposit = new Deposit(depositAmount);
      bankAccount.addDeposit(newDeposit);
      
      console.log(bankAccount);
    })
})