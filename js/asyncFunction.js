Problem summary:
We need to write an asynchronous function that sleeps for the given number of milliseconds and then resolves any value.

Examples:
sleep(2000) -> waits for 2 seconds and then resolves
sleep(500) -> waits for 0.5 seconds and then resolves
Approach:
To implement the sleep function, we can use the setTimeout function which waits for a given number of milliseconds and then executes a callback function. We can then wrap this logic in a Promise and use async/await to wait for the Promise to resolve.

Concepts:
// Asynchronous functions: The question specifies that the sleep function should be an asynchronous function. In simple terms, Asynchronous functions allow code to execute non-blocking I/O operations and other time-consuming tasks without blocking the main thread.
// Promises: Asynchronous operations typically return a Promise object. Promises are a way of handling asynchronous operations and specifying what should happen when the operation completes (either successfully or with an error).
// setTimeout: The setTimeout function is a built-in function that can be used to schedule a function to run after a certain amount of time has elapsed. In our question we will use setTimeout to implement the sleep function.
// Error handling: Asynchronous operations can fail for various reasons (e.g. network errors, invalid input). Error handling is important as its like a fallback mechanism if the code doesn't work.
// Async/await: Async/await is a syntactic feature that makes it easier to write asynchronous code that looks like synchronous code. It allows us to write code that "waits" for a Promise to resolve before continuing execution.
// Solutions:
// Javascript Solution without using error handling and Async/await:
/**
 * @param {number} millis
 */
async function sleep(millis) {
  return new Promise(delayresolve => setTimeout(delayresolve, millis));
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
