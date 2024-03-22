var items={
    "mobile": 40000,
    "laptop": 60000,
    "earphone": 1000,
    "watch": 5000   
};
var temp=0
for(let i=0;i<Object.keys(items).length;i++){
    if(Object.values(items)[i]>temp){
        temp=Object.values(items)[i];
    }
}
console.log(`The most expensive item was ${Object.keys(items)[Object.values(items).indexOf(temp)]} and its price was ${temp}`);