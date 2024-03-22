var student  = {
    name: "Huy",
    age: 30,
    car: null,
    pets: ["dog", "cat"],
}


function one({name:nm, ag:age, car, pets,...others})
{
    console.log(`Name: ${nm}`);
    console.log(`Name: ${car}`);
    
}

{

}

one(student)