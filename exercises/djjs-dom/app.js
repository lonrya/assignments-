var mySquare = document.getElementById("square")
mySquare.addEventListener("mouseover", function(){
mySquare.style.backgroundColor = "blue"  
}) 
var mySquare = document.getElementById("square")
mySquare.addEventListener("mousedown", function(){
mySquare.style.backgroundColor = "red"
})
var mySquare = document.getElementById("square")
mySquare.addEventListener("mouseup", function(){
mySquare.style.backgroundColor = "yellow"
})
var mySquare = document.getElementById("square")
mySquare.addEventListener("dblclick", function(){
mySquare.style.backgroundColor = "green"
}) 
var mySquare = document.getElementById("square")
mySquare.addEventListener("mouseout", function(){
mySquare.style.backgroundColor = "orange"
}) 
window.addEventListener("keydown", function(){
    if(event.which === 66){
    mySquare.style.backgroundColor = "blue"
    } else if(event.which === 82) {
    mySquare.style.backgroundColor = "red" 
    } else if(event.which === 89) {
    mySquare.style.backgroundColor = "yellow"
    } else if(event.which === 71) {
    mySquare.style.backgroundColor = "green"
    } else if(event.which === 79) {
    mySquare.style.backgroundColor = "orange"
    }
})