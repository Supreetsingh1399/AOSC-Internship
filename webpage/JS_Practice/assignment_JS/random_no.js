i=[1,2,3,4,5,6,7,8,9,10]
function random(i){
        console.log(Math.floor(Math.random(i)*10))
}
var cl= setInterval(random,1000,i)
function clear(){
    clearInterval(cl)
}
setTimeout(clear,5000)
random();