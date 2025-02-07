// Part 1: JavaScript Basics

// 1. Variables and Data Types
let name = "Lisa Tayn";
let age = 25;
let isStudent = true;
let hobbies = ["Reading", "Coding", "Gaming"];
let person = { firstName: "Lisa", lastName: "Tayn", country: "USA" };

// Logging values and types
console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is Student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);

// 2. Calculator Function
function calculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Choose an operation (+, -, *, /):");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid input! Please enter valid numbers.");
        return;
    }

    let result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            break;
        default:
            alert("Invalid operation! Use +, -, *, or /.");
            return;
    }

    alert(`Result: ${result}`);
}

// 3. Function to Greet User
function greetUser(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
}
console.log(greetUser("Ramms"));

// Part 2: Control Structures

// 4. Voting Eligibility Check
function checkVotingEligibility() {
    let userAge = parseInt(prompt("Enter your age:"));

    if (isNaN(userAge)) {
        alert("Invalid input! Please enter a number.");
        return;
    }

    let message = userAge >= 18 
        ? "You are eligible to vote!" 
        : "You are not eligible to vote yet.";

    document.getElementById("vote-result").innerText = message;
}

// 5. Loop to Display Numbers 1-10
let numberList = document.getElementById("number-list");
for (let i = 1; i <= 10; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = i;
    numberList.appendChild(listItem);
}

// Part 3: Introduction to the DOM

// 6. Modify HTML Elements with JavaScript
document.querySelector("h1").innerText = "JavaScript in Action!";

// 7. Dynamically Add Content to the DOM
let dynamicDiv = document.getElementById("dynamic-content");
let newParagraph = document.createElement("p");
newParagraph.textContent = "This content was added dynamically using JavaScript.";
dynamicDiv.appendChild(newParagraph);
