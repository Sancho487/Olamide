// a) Create an objrct with 10 different elements
let person = {
    name: "Alvin",
    age: 22,
    gender: "Male",
    country: "Nigeria",
    occupation: "Student",
    department: "computer science",
    level: 300,
    hobby: "coding",
    skill: "Web Developer",
    school: "University of Nigeria"
};
console.log("original object:", person);

// b) Delete two elements
delete person.hobby
delete person.skill;

console.log("After Delection", person);

// c) Add three new elements
person.lanuage = "javaScript"
person.married = false;
person.nickname = "El sancho";
// d) print the elememt and length
console.log("final object", person);
console.log("number of properties:",
    Object.keys(person).length);
    //e) Create an array of 10 different numbers
    let numbers = [5, 12, 23, 7, 45, 67, 89, 3, 18, 30]
    console.log("original Array:", numbers);
    // f) Delete the last two
    numbers.pop();
    numbers();
    console.log("After Deleting Last Two", numbers);
    // g) Change into an array of animals
    let animals = ["Dog", "Cat", "  Elephanr", "Lion", "Tiger", "Monker", "Goat", "Horse", "Sheep", "Zebra"];
    console.log("Array of Animals:", animals);