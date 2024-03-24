var incr=0
function incrementor(){
    console.log(incr)
    incr++
}
var cl=setInterval(incrementor,1000);
function clear(){
    clearInterval(cl)
}
setTimeout(clear,12000);