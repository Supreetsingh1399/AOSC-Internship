const prompt=require("prompt-sync")(); 
function circleValues(radius){
    var area= 2*3.14*(radius*radius);
    var peri=2*3.14*radius;
    console.log(`The perimeter of the circle with radius:${radius} is:${peri} and area is:${area}`)
}
rad=prompt("Enter the radius:")
circleValues(rad);
