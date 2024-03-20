function one(p)
{
    var p = "Mr" + p
    console.log("Your name is " + p)
}
function two(p,q)
{
    var p = "Mr" + p
    var age  = q
    console.log(`Your name is ${p} and you are ${age} years old`)
}
function three(a)
{
    a("John", 25)
}
three(one)