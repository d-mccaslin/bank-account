//Business Logic
function BankAccount(deposits, withdrawals) {
  this.deposits = [],
  this.withdrawals = []
}

BankAccount.prototype.balance = function() {
  let balance = 0;
  return this.deposits - this.withdrawals
}

BankAccount.prototype.addDeposit = function(deposit) {
  this.deposits.push(deposit);
}




function Deposit(amount) {
  this.amount = amount
}

function Withdrawal(amount) {
  this.amount = amount
}








//UI Logic
$(document).ready(function() {
    let deposits = parseInt($("#deposits").val());
 }