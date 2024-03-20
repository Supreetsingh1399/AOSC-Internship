function one()
{
    console.log("Hi")   
}

setTimeout(one, 1000)

function two()
{
    console.log("Bye")
}

var cl = setInterval(two, 2000)

function three()
{
    clearInterval(cl)
}
setTimeout(three, 7000)