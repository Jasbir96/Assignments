## Description 
In a JavaScript code snippet,  Your task is to write the code that includes the main script and the Web Worker, specifically designed to calculate the factorial of a given number.

Use the following code stub as a starting point:
```javascript
// Main script
const number = 10;

// Create a new Web Worker
const worker = new Worker('worker.js');

// Event listener to receive messages from the Web Worker
worker.onmessage = function(event) {
  const factorial = event.data;
  console.log(`Factorial of ${number} is ${factorial}`);
};

// Event listener to handle errors from the Web Worker
worker.onerror = function(error) {
  console.error('An error occurred in the Web Worker:', error);
};

// Send the number to the Web Worker for factorial calculation
worker.postMessage(number);

// Web Worker script (worker.js)
self.onmessage = function(event) {
  const number = event.data;

  // Function to calculate the factorial of a number
  function calculateFactorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }

    return n * calculateFactorial(n - 1);
  }

  // Perform the factorial calculation
  const factorial = calculateFactorial(number);

  // Send the factorial result back to the main script
  self.postMessage(factorial);
};

```

The main script creates a new Web Worker, passes the number to the worker, and listens for the result using the onmessage event. The Web Worker receives the number, performs the factorial calculation, and sends the result back to the main script using the postMessage method.

Update the code snippet by implementing the missing parts of the Web Worker script and ensuring that the factorial calculation is correctly performed. Run the code snippet and display the factorial result in the console.


## Solution

```javascript

// Main script
const number = 10;

// Create a new Web Worker
const worker = new Worker('worker.js');

// Event listener to receive messages from the Web Worker
worker.onmessage = function(event) {
  const factorial = event.data;
  console.log(`Factorial of ${number} is ${factorial}`);
};

// Event listener to handle errors from the Web Worker
worker.onerror = function(error) {
  console.error('An error occurred in the Web Worker:', error);
};

// Send the number to the Web Worker for factorial calculation
worker.postMessage(number);

// Web Worker script (worker.js)
self.onmessage = function(event) {
  const number = event.data;

  // Function to calculate the factorial of a number
  function calculateFactorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }

    return n * calculateFactorial(n - 1);
  }

  // Perform the factorial calculation
  const factorial = calculateFactorial(number);

  // Send the factorial result back to the main script
  self.postMessage(factorial);
};

```