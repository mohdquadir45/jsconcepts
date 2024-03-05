




// const students = {
//     name: "Mohammed",
//     printName: function () {
//         console.log(this.name)
//     }
// }
// students.printName();

// const students2 = {
//     name : "Maryam Fatema",
// }

// students.printName.call(students2)

const name = {
    firstName: "Mohammed",
    lastName: "Umer",
   
}

let printFullName =  function (hometown) {
    console.log(this.firstName + " " + this.lastName+ " " + hometown)
}
printFullName.call(name, "Balapur Akola Maharashtra")
const name2 = {
    firstName: "Abdullah",
    lastName: "Saleh",
    
}
printFullName.call(name2, "Pune Near Aazam Campus")
printFullName.apply(name2, ["Nashik Mahashtra"])

let bindMethod = printFullName.bind(name2, "Hello Mohammed Uzair");
console.log("bindMethod ======>", bindMethod)
bindMethod()