"use strict";

// ========================================
// TASK 1: DEBOUNCING
// ========================================

function debounce(callback, delay) {
    let timerId;

    return function (...args) {
        clearTimeout(timerId);

        timerId = setTimeout(() => {
            callback.apply(this, args);
        }, delay);
    };
}

const searchInput = document.getElementById("searchInput");
const searchResult = document.getElementById("searchResult");

function searchProduct(event) {
    const searchText = event.target.value;

    searchResult.textContent = searchText
        ? `Searching for "${searchText}"...`
        : "Start typing to search.";

    console.log("Search executed:", searchText);
}

const debouncedSearch = debounce(searchProduct, 500);

searchInput.addEventListener("input", debouncedSearch);


// ========================================
// TASK 2: THROTTLING
// ========================================

function throttle(callback, delay) {
    let lastExecution = 0;

    return function (...args) {
        const currentTime = Date.now();

        if (currentTime - lastExecution >= delay) {
            lastExecution = currentTime;
            callback.apply(this, args);
        }
    };
}

const throttledScroll = throttle(() => {
    console.log("Scroll event handled at:", new Date().toLocaleTimeString());
}, 1000);

window.addEventListener("scroll", throttledScroll);


// ========================================
// TASK 3: MEMOIZATION
// ========================================

function calculateDiscount(price, percentage) {
    const discountAmount = price * (percentage / 100);
    return price - discountAmount;
}

function memoizeDiscount(callback) {
    const cache = new Map();

    return function (price, percentage) {
        const key = `${price}-${percentage}`;

        if (cache.has(key)) {
            console.log("Result returned from cache.");
            return {
                result: cache.get(key),
                source: "Cache"
            };
        }

        console.log("Fresh calculation performed.");

        const result = callback(price, percentage);

        cache.set(key, result);

        return {
            result,
            source: "Fresh calculation"
        };
    };
}

const cachedDiscountCalculator = memoizeDiscount(calculateDiscount);

const priceInput = document.getElementById("priceInput");
const discountInput = document.getElementById("discountInput");
const calculateButton = document.getElementById("calculateButton");
const discountResult = document.getElementById("discountResult");

calculateButton.addEventListener("click", () => {
    const price = Number(priceInput.value);
    const percentage = Number(discountInput.value);

    if (!price || percentage < 0) {
        discountResult.textContent = "Please enter valid values.";
        return;
    }

    const calculation = cachedDiscountCalculator(price, percentage);

    discountResult.textContent =
        `Final Price: ₹${calculation.result} (${calculation.source})`;
});


// ========================================
// TASK 4: EVENT BUBBLING & DELEGATION
// ========================================

const productList = document.getElementById("productList");

// Parent handler demonstrates event bubbling
productList.addEventListener("click", (event) => {
    console.log("Parent container clicked.");
});

// Event delegation for Remove buttons
productList.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-button")) {
        // Stop the click event from bubbling to other handlers
        event.stopPropagation();

        const productItem = event.target.closest(".product-item");

        if (productItem) {
            console.log("Removing:", productItem.textContent.trim());
            productItem.remove();
        }
    }
});