
/*
var nums = []
for (i = 0; i <= 9; i++) {
nums.push(i)
}
console.log(nums)
*/
/*
for (i = 9; i >= 0; i--){
    console.log(i)
}
var fruit = ["banana", "orange", "apple", "kiwi"]
for (i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}

for (i = 0; i <= 100; i++){
if (i % 2 === 0) {
    console.log(i)
}
}

var fruits = []
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
for (i = 0; i < fruit.length; i += 2){
    fruits.push(fruit[i])
}
    console.log(fruits)

    var nameArray = []
    var occupationsArray = []
    var peopleArray = [
        {
          name: "Harrison Ford",
          occupation: "Actor"
        },
        {
          name: "Justin Bieber",
          occupation: "Singer"
        },
        {
          name: "Vladimir Putin",
          occupation: "Politician"
        },
        {
          name: "Oprah",
          occupation: "Entertainer"
        }
      ]
    for (i = 0; i < peopleArray.length; i++){
        
        nameArray.push(peopleArray[i].name)
        occupationsArray.push(peopleArray[i].occupation)
    } console.log(nameArray)
    console.log(occupationsArray)

var array = [ [0, 0, 0], [0, 0, 0], [0, 0, 0]];
for (var i = 0; i < array.length; i++){
    console.log(array[i])
}

var array = [[0, 0, 0], [1, 1, 1], [2, 2, 2]]
for (var i = 0; i < array.length; i++){
    console.log(array[i])
}

var array = [[0, 1, 2], [0, 1, 2], [0, 1, 2]]
for (var i = 0; i <array.length; i++){
    console.log(array[i])
}
*/
var array = []
    for (var i = 0; i < 3 ; i++){
        var arr = []
    for (j = 0; j < 3; j++){
        arr[j] = i 
    }    
      
       array[i] = arr
    }
console.log(array)