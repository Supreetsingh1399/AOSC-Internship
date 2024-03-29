var myObj = {
    name: "John",
    age: 30,
    car: null,
    pets: ["dog", "cat"],
    address: {
        street: "123 Main St",
        city: "Pittsburgh",
        state: "PA"
    },

}
console.log(myObj.name)
for(el in myObj)
{
    console.log(myObj[el]);
}