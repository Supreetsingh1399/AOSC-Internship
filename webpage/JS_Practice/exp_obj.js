var myObj = {
    tv: 9000,
    piano: 50000,
    shoes: 2000,
    phone: 1000,
}
var expensive=0;
for(el in myObj)
{
    if(myObj[el]>expensive)
    {
        expensive=myObj[el];
        var item=el;
    }
}

console.log(`The most expensive item was ${item} and its price was ${expensive}`)