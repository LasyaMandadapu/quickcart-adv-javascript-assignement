"use strict";

console.log("\n========== PART F: FINAL INTEGRATION ==========");


// Product class

class Product {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotal() {
        return this.price * this.quantity;
    }
}


// Product data

const products = [
    new Product(1, "Laptop", 50000, 1),
    new Product(2, "Mouse", 1000, 2),
    new Product(3, "Monitor", 15000, 1),
    new Product(4, "Keyboard", 2000, 1)
];


// Destructuring

const customer = {
    name: "Rahul",
    email: "rahul@gmail.com"
};

const { name: customerName } = customer;


// map() - product totals

const productTotals = products.map((product) => {
    return {
        name: product.name,
        total: product.getTotal()
    };
});


// filter() - products above ₹5,000

const expensiveProducts = products.filter((product) => product.price > 5000);


// reduce() - order total

const orderTotal = products.reduce((total, product) => {
    return total + product.getTotal();
}, 0);


// Set - unique product IDs

const uniqueProductIds = new Set(
    products.map((product) => product.id)
);


// Map - inventory

const inventory = new Map();

products.forEach((product) => {
    inventory.set(product.id, {
        name: product.name,
        quantity: product.quantity
    });
});


// Object.freeze()

const orderConfig = Object.freeze({
    currency: "INR",
    status: "Processing"
});


// JSON.stringify()

const orderData = {
    customer: customerName,
    products: productTotals,
    total: orderTotal
};

const orderJSON = JSON.stringify(orderData);

console.log("\nOrder JSON:");
console.log(orderJSON);


// Async order confirmation

function confirmOrder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Confirmed Successfully!");
        }, 1000);
    });
}

async function processOrder() {
    console.log("\n====== QUICKCART ORDER SUMMARY ======");
    console.log(`Customer: ${customerName}`);
    console.log("Products:");

    productTotals.forEach((product) => {
        console.log(`${product.name} - ₹${product.total}`);
    });

    console.log(`Total Order Amount: ₹${orderTotal}`);
    console.log(`Unique Products: ${uniqueProductIds.size}`);
    console.log(`Order Status: ${orderConfig.status}...`);

    try {
        const confirmationMessage = await confirmOrder();
        console.log(`Order Status: ${confirmationMessage}`);
    } catch (error) {
        console.log("Order confirmation failed:", error);
    }

    console.log("=====================================");
}

processOrder();