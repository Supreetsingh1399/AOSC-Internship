function one()
{
    return function two()
    {
        return function three()
        {
            console.log("Hi")
            return "Hello"
        }
    }
}

var ref = one()

var ref2 = ref()
console.log(ref2())