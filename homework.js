// Exploring Conditional Statements and Loops

// Task 1:
let loggedIn = true

if (loggedIn) {
    console.log("Welcome Back!");
} else if (!loggedIn) {
    console.log("Please login to continue");
}


// Task 2:

let item1 = 25.25;
let item2 = 37.75;
let item3 = 17.00;

let items = [item1, item2, item3];
let totalPrice = 0;

for (let i = 0; i < items.length; i++) {
    console.log(`Item ${i + 1}: $${items[i]}`);
    totalPrice += items[i];
}

// Task 3:
console.log(`Total Price: $${totalPrice}`);


// Exploring Functions in JavaScript

// Task 1: 

let balance = 0;

function deposit(amount){
    balance += amount;
    return "$" + amount + " has been deposited into your account. Your new balance is $" + balance + ".";
}

console.log(deposit(100));

// Task 2:

function withdrawal(amount){
    balance -= amount;
    return "$" + amount + " has been withdrawn from your account. Your new balance is $" + balance + ".";
}

console.log(withdrawal(50));

// Task 3:

function checkBalance(){
    console.log("Current balance: $" + balance);
}

checkBalance()
