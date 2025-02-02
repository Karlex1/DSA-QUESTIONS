
// setTimeout Method

// The function takes two parameters: a callback function and a delay value in milliseconds. The callback function represents the code we want to execute after the delay.
// When we call setTimeout, it registers the callback function and starts a timer. After the specified delay, the JavaScript engine adds the callback function to the event queue.
// In case you don't know what an event Queue is , the event queue is a data structure that holds tasks to be processed by the JavaScript runtime. When the call stack is empty (all synchronous code has finished executing), the runtime picks the next task from the event queue and executes it.
// By using setTimeout, we introduce an asynchronous behavior in our code. This means that while the delay is counting down, the JavaScript engine can continue executing other code without waiting for the setTimeout callback to be invoked 

const t=setTimeout(()=>{fn(...args)},[t])

// clearTimeout remove it from waiting queue before it can be able to go into event Queue
function clear(){clearTimeout(t)};
// setInterval Method:  similar just it execute repeteadly after t times the callback 
const i=setInterval(()=>{fn(...args)},[t])
// clearTimeout 
function cleari(){clearInterval(i)};
