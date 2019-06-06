var add = document.getElementById("add")
var addForm = document.addForm
addForm.addEventListener("submit", function(event){
event.preventDefault()
var h1Tag = document.createElement("h1")
h1Tag.textContent = addForm.firstNum
add.appendChild("h1Tag")
addForm.firstNum = ""
}) 
console.log(document.firstNum + document.secondNum)
