// Lightning Exercise 1: Output all of the key names from your doctor's office bill to the console in Chrome.

const doctorBill = {
    officeName: "The Dr. Phil Show",
    streetAddress: "Help Street",
    doctorName: "Dr. Phil",
    patientName: "Sam",
    visitDate: "June 20th, 2019",
    amountBilled: "A Dolla",
    dueDate: "Can't get pregnant"
}
// console.log(Object.keys(doctorBill))


// Lightning Exercise 2: Output all of the key names from your doctor's office bill to the DOM inside a parent <section> element. Wrap each one in a <span> element.

let doctorKeys = Object.keys(doctorBill)

let docSection = document.querySelector("#doc")

docSection.innerHTML += `<span>${doctorKeys}</span>`