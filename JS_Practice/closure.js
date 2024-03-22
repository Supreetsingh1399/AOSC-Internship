function bank()
{
    var bankBalance = 1000;
function withdrawMoney(amount) {
    bankBalance -= amount;
    return bankBalance;
}
return withdrawMoney;
}
const withdraw = bank();
console.log(withdraw(100));

