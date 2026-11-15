"use strict";

console.log("\n========== PART B: ARRAY METHODS, MAP & SET ==========");

const cart = [
    { id: 101, name: "Laptop", price: 50000, quantity: 1, category: "Electronics" },
    { id: 102, name: "Mouse", price: 800, quantity: 2, category: "Accessories" },
    { id: 103, name: "Keyboard", price: 1500, quantity: 1, category: "Accessories" },
    { id: 104, name: "Monitor", price: 12000, quantity: 1, category: "Electronics" },
    { id: 105, name: "Headphones", price: 2500, quantity: 2, category: "Accessories" }
];

// TASK 1: Array methods

console.log("\nProduct names with total item price:");

const productTotals = cart.map((product) => {
    return {
        name: product.name,
        totalPrice: product.price * product.quantity
    };
});

productTotals.forEach((product) => {
    console.log(`${product.name}: ₹${product.totalPrice}`);
});


// Products above ₹2,000
const expensiveProducts = cart.filter((product) => product.price > 2000);

console.log("\nProducts above ₹2,000:");
expensiveProducts.forEach((product) => {
    console.log(product.name);
});


// Total cart value
const totalCartValue = cart.reduce((total, product) => {
    return total + product.price * product.quantity;
}, 0);

console.log("\nTotal Cart Value: ₹" + totalCartValue);


// Log product details
console.log("\nProduct Details:");

cart.forEach((product) => {
    console.log(
        `Name: ${product.name}, Category: ${product.category}, Quantity: ${product.quantity}`
    );
});


// Total value of Electronics
const electronicsTotal = cart
    .filter((product) => product.category === "Electronics")
    .reduce((total, product) => {
        return total + product.price * product.quantity;
    }, 0);

console.log("\nTotal Electronics Value: ₹" + electronicsTotal);


// TASK 2: Map

console.log("\nInventory using Map:");

const inventory = new Map();

cart.forEach((product) => {
    inventory.set(product.id, { ...product });
});

// Get a product
console.log("Product 101:", inventory.get(101));

// Update quantity
const mouseProduct = inventory.get(102);
mouseProduct.quantity = 5;
inventory.set(102, mouseProduct);

// Delete one product
inventory.delete(103);

console.log("\nUpdated Inventory:");

for (const [id, product] of inventory) {
    console.log(`${id}: ${product.name}, Quantity: ${product.quantity}`);
}


// TASK 2B: Set

const emails = [
    "rahul@gmail.com",
    "priya@gmail.com",
    "rahul@gmail.com",
    "arjun@gmail.com",
    "priya@gmail.com"
];

const uniqueEmails = new Set(emails);

console.log("\nUnique Emails:");
console.log([...uniqueEmails]);


// TASK 3: Object.freeze() and Object.seal()

const productConfig = {
    name: "Laptop",
    price: 50000,
    stock: 20
};

// Create separate copies
const frozenConfig = Object.freeze({ ...productConfig });
const sealedConfig = Object.seal({ ...productConfig });

console.log("\nFrozen Object:");
console.log(frozenConfig);

// These changes will not work
try {
    frozenConfig.price = 45000;
    frozenConfig.brand = "Example";
    delete frozenConfig.stock;
} catch (error) {
    console.log("Frozen object cannot be modified.");
}

console.log("After changes:", frozenConfig);


// console.log("\nSealed Object:");

// // Changing existing property works
// sealedConfig.price = 45000;

// // Adding and deleting properties do not work
// sealedConfig.brand = "Example";
// delete sealedConfig.stock;

// console.log("After changes:", sealedConfig);
console.log("\nSealed Object:");

// Changing an existing property works
sealedConfig.price = 45000;

console.log("Price changed successfully:", sealedConfig);

// A sealed object does not allow adding new properties
try {
    sealedConfig.brand = "Example";
} catch (error) {
    console.log("Cannot add a new property to a sealed object.");
}

// A sealed object does not allow deleting existing properties
try {
    delete sealedConfig.stock;
} catch (error) {
    console.log("Cannot delete a property from a sealed object.");
}

console.log("Final sealed object:", sealedConfig);