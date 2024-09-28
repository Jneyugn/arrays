
let colors = ["Purple", "Blue", "Pink", "Green", "Yellow"]; 
console.log(colors, "- this is the color array");
console.log(colors[0], "-this is the first element of the color array"); 
console.log(colors[2], "-this is the middle element of the color array"); 
console.log(colors[4], "-this is the last element of the color array"); 
colors[1] = "Burgandy"
console.log(colors[1], "- this array color has been modified from Blue to Burgandy");
console.log(colors);

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}



let moreNumbers = Array.of(1, 2, 3, 4, 5, 6, 7); 
console.log(moreNumbers, "-This is an array of moreNumbers")
console.log(moreNumbers[0], "-this is the first element of the moreNumbers array"); 
console.log(moreNumbers[3], "-this is the middle element of the moreNumbers array"); 
console.log(moreNumbers[6], "-this is the last element of the moreNumbers array"); 

// let arrayLength = new Array(5); // Creates an array with length 5 but no element.
// console.log(arrayLength, "- this is what we are in the array");
// console.log(arrayLength.length, "- this is the length of the array");

console.log(moreNumbers.length, "- this is the length of the moreNumbers array");


//pop
let fruits = ["Pineapple", "Strawberry", "Lychee","Watermelon"];
let lastFruit = fruits.pop();
console.log(lastFruit); 
console.log(fruits); 

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//push
let cars = ["Honda","Lexus"];
cars.push("Toyota");
console.log(cars); 


//filter
let ages = [15, 7, 16, 40, 24, 8, 32, 19, 18];
let adults = ages.filter(age => age >= 18);
console.log(adults, "-this is a filter array that demonstrats ages above 18."); 

let city = ["Toronto", "Vaughan", "Milton", "Hamilton"];
let [firstCity, secondCity, fourthCity] = city;

console.log(firstCity);
console.log(secondCity);
console.log(fourthCity);