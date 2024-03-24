const prompt=require("prompt-sync")(); 
function rectangleArea(length, width){
    return length*width;
}
var len=prompt("Enter the length:");
var brd=prompt("Enter the breadth");
var area=rectangleArea(len,brd);
console.log(`The area of rectangle of length:${len} and breadth:${brd} is ${area}`)