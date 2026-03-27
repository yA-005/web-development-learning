
## Definition of a Callback Function
## see file callback-function.js 

A **callback function** is simply a **function passed as an argument to another function**, with the expectation that it will be **called (executed) at a later time** – either immediately, after some operation completes, or when an event occurs.

### Key Points

- It's **not a keyword** in JavaScript; it's a **programming pattern**.
- The outer function decides **when** and **how** to invoke the callback.
- Callbacks are widely used for:
  - **Asynchronous operations** (like `setTimeout`, reading files, network requests)
  - **Event handling** (e.g., `button.addEventListener("click", callback)`)
  - **Higher‑order array methods** (like `map`, `filter`, `forEach` – where the callback runs on each element)

### Simple Example

```javascript
// The function that accepts a callback
function doSomething(callback) {
    console.log("Doing something...");
    callback();   // calling the callback function
}

// The callback function
function afterDone() {
    console.log("Done!");
}

doSomething(afterDone);
// Output:
// Doing something...
// Done!
```

### Why "callback"?

The name comes from the idea: you give a function to another function, and the other function **calls back** your function when it’s ready.

### Synchronous vs Asynchronous

- **Synchronous callback**: Executed immediately within the outer function (e.g., `array.map(callback)`).
- **Asynchronous callback**: Executed later, after an operation finishes (e.g., `setTimeout(callback, 1000)`).

So in short: **a callback is a function you pass to another function to be called later.**