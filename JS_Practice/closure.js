console.log((function bank()
{
    var bankBalance = 1000;
function withdrawMoney(amount) {
    bankBalance -= amount;
    return bankBalance;
}
    function depositMoney(amount) {
        bankBalance += amount;
        return bankBalance;
    }
return {withdrawMoney,depositMoney};
})().withdrawMoney(100));

// const firstBankAccount = bank();
// console.log(firstBankAccount[1](300));
// console.log(firstBankAccount[0](200));

// const secondBankAccount = bank();
// console.log(secondBankAccount[0](100));
// console.log(secondBankAccount[1](300));

