/*
function name(dog){
    console.log(dog.toUpperCase()+dog)
}
name("aaron")


function num(string){
    console.log(Math.floor(string.length/2))
}
num("doggies")
*/

function returnFirstHalf(string){
    var returnFirstHalf = string.slice(string.length / 2)
    var upperCased = returnFirstHalf.toUpperCase()
    return upperCased   
 } console.log(returnFirstHalf("helllllo"))

