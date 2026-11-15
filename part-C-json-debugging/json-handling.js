"use strict";

console.log("\n========== PART C: JSON HANDLING ==========");

// TASK 1: JSON.stringify() and JSON.parse()

const order = {
    orderId: 501,
    customer: "Rahul",
    amount: 5000,
    deliveryDate: undefined,
    discount: null,
    calculateTax: function () {
        return 500;
    }
};

console.log("\nOriginal Order:");
console.log(order);

const orderJSON = JSON.stringify(order);

console.log("\nJSON String:");
console.log(orderJSON);

const parsedOrder = JSON.parse(orderJSON);

console.log("\nParsed Order:");
console.log(parsedOrder);

console.log(
    "\nNote: undefined properties and functions are omitted when converting an object to JSON. Null is preserved."
);


// TASK 2: Output prediction

console.log("\n----- JSON Output Questions -----");

// Q1
console.log("\nQ1:");
console.log(JSON.stringify({ name: "Rahul", age: undefined }));
// Output: {"name":"Rahul"}


// Q2
console.log("\nQ2:");
console.log(JSON.stringify([10, undefined, 30]));
// Output: [10,null,30]


// Q3
console.log("\nQ3:");
console.log(JSON.stringify({ price: NaN, discount: Infinity }));
// Output: {"price":null,"discount":null}


// Q4
console.log("\nQ4:");

try {
    console.log(JSON.parse("{name: 'Rahul', age: 25}"));
} catch (error) {
    console.log("Error:", error.message);
}


// Q5
console.log("\nQ5:");

const user = { name: "Rahul" };
user.self = user;

try {
    console.log(JSON.stringify(user));
} catch (error) {
    console.log("Error: Cannot stringify a circular reference.");
}


// Q6
console.log("\nQ6:");
console.log(JSON.stringify({ createdAt: new Date("2026-01-01") }));