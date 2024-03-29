var animal = {
    eats: true,
    sleep: true,
    walk: function() {
        console.log("Animal walk");
    },
    drink: "water",
}

var elephant = {
    truk: "To pick up food",
    weight: "Heavy",
    tusk: "To fight",
}
elephant.__proto__ = animal;
console.log(elephant.sleep);