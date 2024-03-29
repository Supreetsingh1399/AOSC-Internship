var items= ([
    {item1: "mobile", price: 40000},
    {item2: "laptop", price: 60000},
    {item3: "earphone", price: 1000},
    {item4: "watch", price: 5000}
]);
var temp=6000;
var a=items.filter((item)=> item.price>temp);
var obj=({a});
console.log(a);