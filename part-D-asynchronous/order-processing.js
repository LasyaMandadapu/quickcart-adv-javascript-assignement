"use strict";

console.log("\n========== PART D: ASYNCHRONOUS JAVASCRIPT ==========");


// TASK 1: Event Loop

console.log("\n----- Event Loop -----");

console.log("Order Started");

setTimeout(() => {
    console.log("Payment Processing");
}, 0);

Promise.resolve().then(() => {
    console.log("Payment Successful");
});

console.log("Order Completed");


// TASK 2: Callbacks

function validateOrder(callback) {
    setTimeout(() => {
        console.log("Order Validated");
        callback();
    }, 1000);
}

function processPayment(callback) {
    setTimeout(() => {
        console.log("Payment Completed");
        callback();
    }, 1000);
}

function sendConfirmation(callback) {
    setTimeout(() => {
        console.log("Confirmation Sent");
        callback();
    }, 1000);
}

console.log("\n----- Callback Flow -----");

validateOrder(() => {
    processPayment(() => {
        sendConfirmation(() => {
            console.log("Order process completed using callbacks.");
        });
    });
});


// TASK 3: Promises

function validateOrderPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Order Validated");
            resolve();
        }, 1000);
    });
}

function processPaymentPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Payment Completed");
            resolve();
        }, 1000);
    });
}

function sendConfirmationPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Confirmation Sent");
            resolve();
        }, 1000);
    });
}

console.log("\n----- Promise Flow -----");

validateOrderPromise()
    .then(processPaymentPromise)
    .then(sendConfirmationPromise)
    .then(() => {
        console.log("Order process completed using promises.");
    })
    .catch((error) => {
        console.log("Order failed:", error);
    });


// TASK 4: Async/Await

async function placeOrder() {
    console.log("\n----- Async/Await Flow -----");

    try {
        await validateOrderPromise();
        await processPaymentPromise();
        await sendConfirmationPromise();

        console.log("Order placed successfully!");
    } catch (error) {
        console.log("Order placement failed:", error);
    }
}

placeOrder();


// TASK 5: Promise Combinators

function productsAPI() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Products Loaded");
        }, 1000);
    });
}

function paymentAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Payment Service Failed");
        }, 1500);
    });
}

function deliveryAPI() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Delivery Loaded");
        }, 2000);
    });
}

async function demonstrateCombinators() {
    console.log("\n----- Promise Combinators -----");

    try {
        const results = await Promise.all([
            productsAPI(),
            paymentAPI(),
            deliveryAPI()
        ]);
        console.log("Promise.all:", results);
    } catch (error) {
        console.log("Promise.all error:", error);
    }

    const settledResults = await Promise.allSettled([
        productsAPI(),
        paymentAPI(),
        deliveryAPI()
    ]);

    console.log("Promise.allSettled:", settledResults);

    try {
        const raceResult = await Promise.race([
            productsAPI(),
            paymentAPI(),
            deliveryAPI()
        ]);
        console.log("Promise.race:", raceResult);
    } catch (error) {
        console.log("Promise.race error:", error);
    }

    try {
        const anyResult = await Promise.any([
            productsAPI(),
            paymentAPI(),
            deliveryAPI()
        ]);
        console.log("Promise.any:", anyResult);
    } catch (error) {
        console.log("Promise.any error:", error);
    }
}

demonstrateCombinators();