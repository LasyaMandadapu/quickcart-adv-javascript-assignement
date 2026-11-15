"use strict";

console.log("\n========== PART A: OBJECTS & ES6 CLASSES ==========");

// TASK 1: Prototype-based Products

function Product(productName, price, category) {
    this.productName = productName;
    this.price = price;
    this.category = category;
}

// Shared method for all Product objects
Product.prototype.displayProduct = function () {
    return `Product: ${this.productName} | Price: ₹${this.price} | Category: ${this.category}`;
};

const laptop = new Product("Laptop", 50000, "Electronics");
const mouse = new Product("Mouse", 800, "Accessories");
const keyboard = new Product("Keyboard", 1500, "Accessories");

console.log("\nPrototype-based Products:");
console.log(laptop.displayProduct());
console.log(mouse.displayProduct());
console.log(keyboard.displayProduct());


// TASK 2: ES6 Classes

class ProductItem {
    constructor(productName, price, category) {
        this.productName = productName;
        this.price = price;
        this.category = category;
    }

    getProductDetails() {
        return `${this.productName} costs ₹${this.price} and belongs to ${this.category}.`;
    }
}

class ElectronicProduct extends ProductItem {
    constructor(productName, price, brand) {
        super(productName, price, "Electronics");
        this.brand = brand;
    }

    checkWarranty() {
        return `${this.productName} has a standard warranty.`;
    }
}

class ClothingProduct extends ProductItem {
    constructor(productName, price, size) {
        super(productName, price, "Clothing");
        this.size = size;
    }

    getSize() {
        return `${this.productName} is available in size ${this.size}.`;
    }
}

const phone = new ElectronicProduct("Smartphone", 30000, "Samsung");
const shirt = new ClothingProduct("T-Shirt", 1200, "M");

console.log("\nES6 Classes:");
console.log(phone.getProductDetails());
console.log(phone.checkWarranty());
console.log(shirt.getProductDetails());
console.log(shirt.getSize());


// TASK 3: ES6 Syntax

console.log("\nES6 Syntax:");

// A. Arrow function
const calculateFinalPrice = (price, discount) => {
    return price - price * (discount / 100);
};

console.log("Final price:", calculateFinalPrice(50000, 10));


// B. Template literal
console.log(
    `Hello Rahul, your order of Laptop is confirmed. Total: ₹50000.`
);


// C. Destructuring
const customer = {
    name: "Rahul",
    email: "rahul@gmail.com",
    city: "Mumbai"
};

const { name, email } = customer;

console.log(`Customer: ${name}, Email: ${email}`);


// D. Rest operator
const calculateTotal = (...prices) => {
    return prices.reduce((total, price) => total + price, 0);
};

console.log("Total:", calculateTotal(50000, 800, 1500));


// E. Spread operator
const originalProduct = {
    name: "Laptop",
    price: 50000
};

const discountedProduct = {
    ...originalProduct,
    price: 45000
};

console.log("Original:", originalProduct);
console.log("Updated copy:", discountedProduct);