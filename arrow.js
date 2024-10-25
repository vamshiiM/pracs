// Regular function
const add = function(a, b) {
    return a + b;
};

// Arrow function
const addArrow = (a, b) => a + b;

console.log(add(5, 3));       // 8
console.log(addArrow(5, 3));  // 8


//// promises 

// syntax
const myPromise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("The operation was successful!");
    } else {
        reject("There was an error with the operation.");
    }
});


/// using promise

myPromise
    .then(result => {
        console.log(result);  // "The operation was successful!"
    })
    .catch(error => {
        console.error(error); // "There was an error with the operation."
    })
    .finally(() => {
        console.log("This will run no matter what.");
    });


// .then() is used for returning successful operations
//.catch() is used for returning error operations



// chaining promise

const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data fetched!"), 1000);
    });
};

fetchData()
    .then(result => {
        console.log(result);  // "Data fetched!"
        return "Processing data...";
    })
    .then(status => {
        console.log(status);  // "Processing data..."
    })
    .catch(error => {
        console.error(error); // Catch any errors in the chain
    });
