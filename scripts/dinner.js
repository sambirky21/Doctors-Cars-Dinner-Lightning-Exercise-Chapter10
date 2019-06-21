// Lightning Exercise 1: Create an object to represent your favorite dinner item (e.g. meatloaf, spaghetti, fried fish, gumbo). Each object should have a name property, but you can add any other properties that you like, such as size, weight, ethnicity, vegetarian boolean.

let lasagna = {
    pan: "large",
    sauce: "red",
    meat: "ground beef",
    cheese: "ricotta",
    noodle: "lasagna sheets"
}

// Lightning Exercise 2: Output all of the key/value pairs into the DOM inside an <article> element with a class of food.


let outputElement = document.querySelector(".food")

console.log(outputElement)

for (let entry of Object.entries(lasagna)){
    outputElement.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
    console.log(entry)
};