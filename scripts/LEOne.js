// Lightning Exercise 1: Create an object that represents a bill from your doctor's office. It should have the following properties: officeName, streetAddress, doctorName, patientName, visitDate, amountBilled, dueDate. You provide example values for each one.

// Copy the code below and paste it above your object.
const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

const doctorBill = {
    officeName: "The Dr. Phil Show",
    streetAddress: "Help Street",
    doctorName: "Dr. Phil",
    patientName: "Sam",
    visitDate: "June 20th, 2019",
    amountBilled: "A Dolla",
    dueDate: "Can't get pregnant"
}

// Use square bracket notation to output the value of those three properties to the console in Chrome.
console.log(doctorBill[dateVisited])
console.log(doctorBill[owed])
console.log(doctorBill[patient])

// Lightning Exercise 3: Use Object.values() to output all the property values to the console in Chrome.
console.log("Outputting all property values", Object.values(doctorBill))