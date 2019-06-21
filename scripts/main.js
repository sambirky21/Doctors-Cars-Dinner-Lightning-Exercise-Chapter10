// Lightning Exercise to start day - Array Methods Chapter 4

// Sort the numbers in descending order (10, 9, 8, 7, etc).
// Remove any integers greater than 19.
// Multiply each remaining number by 1.5 and then substract 1.
// Then output (either in the DOM or the console) the sum of all the resulting numbers.

// var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// // var chainingResults = integers

// let descendingIntegers = integers.sort((current, next) => {
//     return current - next
//   }).reverse()

//   let lessThanNineteen = descendingIntegers.slice(4, 14)

//   let multiplyMinus1 = lessThanNineteen.map( lessThanNineteen => lessThanNineteen * 1.5 - 1)

//   let chainingResults = multiplyMinus1.reduce((current, next) => current + next)



// Object Methods

const allCars = [
    {
        model: "Mustang",
        color: "Midnight Blue",
        year: 1976,
        length: 120,
        width: 62,
        height: 47
    },
    {
        model: "Xterra",
        color: "Forest Green",
        year: 2011,
        length: 144,
        width: 71,
        height: 55
    },
    {
        model: "Thunderbird",
        color: "Red",
        year: 2005,
        length: 115,
        width: 58,
        height: 42
    },
    {
        model: "Suburban",
        color: "Grey",
        year: 2015,
        length: 149,
        width: 73,
        height: 58
    }
]

// For this to work, you will need an HTML element in your index.html with an id of app.
let outputElement = document.querySelector("#app")

/*
    Just get a reference to the first object since
    they all have the same properties
*/
const firstCar = allCars[0]

// Now iterate its keys
outputElement.innerHTML += "<h1>Properties</h1>"
for (const key of Object.keys(firstCar)) {
  outputElement.innerHTML += `<div>${key}</div>`
}

// Iterate the array of cars. Individual objects stored in `car`.
outputElement.innerHTML += "<h1>Car List</h1>"
allCars.forEach(car => {
    // Iterate all of the values of the current car
    for (const value of Object.values(car)) {
      outputElement.innerHTML += `<div>${value}</div>`
    }
})